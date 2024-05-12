import { generateTheme } from "./generateTheme";
import { generatePom } from "./generatePom";
import { join as pathJoin, relative as pathRelative, sep as pathSep } from "path";
import * as child_process from "child_process";
import { generateStartKeycloakTestingContainer } from "./generateStartKeycloakTestingContainer";
import * as fs from "fs";
import { readBuildOptions } from "./buildOptions";
import { getLogger } from "../tools/logger";
import { getThemeSrcDirPath } from "../getThemeSrcDirPath";
import { getThisCodebaseRootDirPath } from "../tools/getThisCodebaseRootDirPath";
import { readThisNpmProjectVersion } from "../tools/readThisNpmProjectVersion";
import { keycloakifyBuildOptionsForPostPostBuildScriptEnvName } from "../constants";
import { buildJars } from "./buildJars";
import { generateThemeVariations } from "./generateThemeVariants";

export async function main() {
    const buildOptions = readBuildOptions({
        "processArgv": process.argv.slice(2)
    });

    const logger = getLogger({ "isSilent": buildOptions.isSilent });
    logger.log("🔏 Building the keycloak theme...⌚");

    const { themeSrcDirPath } = getThemeSrcDirPath({ "reactAppRootDirPath": buildOptions.reactAppRootDirPath });

    const [themeName, ...themeVariantNames] = buildOptions.themeNames;

    const { implementedThemeTypes } = await generateTheme({
        themeName,
        themeSrcDirPath,
        "keycloakifySrcDirPath": pathJoin(getThisCodebaseRootDirPath(), "src"),
        "keycloakifyVersion": readThisNpmProjectVersion(),
        buildOptions
    });

    for (const themeVariantName of themeVariantNames) {
        generateThemeVariations({
            themeName,
            themeVariantName,
            implementedThemeTypes,
            buildOptions
        });
    }

    {
        const { pomFileCode } = generatePom({ buildOptions });

        fs.writeFileSync(pathJoin(buildOptions.keycloakifyBuildDirPath, "pom.xml"), Buffer.from(pomFileCode, "utf8"));
    }

    fs.writeFileSync(pathJoin(buildOptions.keycloakifyBuildDirPath, ".gitignore"), Buffer.from("*", "utf8"));

    run_post_build_script: {
        if (buildOptions.bundler !== "vite") {
            break run_post_build_script;
        }

        child_process.execSync("npx vite", {
            "cwd": buildOptions.reactAppRootDirPath,
            "env": {
                ...process.env,
                [keycloakifyBuildOptionsForPostPostBuildScriptEnvName]: JSON.stringify(buildOptions)
            }
        });
    }

    const { lastJarFileBasename } = await buildJars({
        "doImplementAccountTheme": implementedThemeTypes.account,
        buildOptions
    });

    generateStartKeycloakTestingContainer({
        "jarFilePath": pathJoin(buildOptions.keycloakifyBuildDirPath, lastJarFileBasename),
        buildOptions
    });

    logger.log(
        [
            `✅ Your keycloak theme has been generated and bundled into .${pathSep}${pathJoin(
                pathRelative(buildOptions.reactAppRootDirPath, buildOptions.keycloakifyBuildDirPath),
                "keycloak-theme-for-kc-*.jar"
            )}`,
            "",
            `To test your theme locally you can spin up a Keycloak container image with the theme pre loaded by running:`,
            "",
            `👉 $ .${pathSep}${pathRelative(
                buildOptions.reactAppRootDirPath,
                pathJoin(buildOptions.keycloakifyBuildDirPath, generateStartKeycloakTestingContainer.basename)
            )} 👈`,
            ``,
            `Once your container is up and running: `,
            "- Log into the admin console 👉 http://localhost:8080/admin username: admin, password: admin 👈",
            `- Create a realm:                       Master         -> AddRealm   -> Name: myrealm`,
            `- Enable registration:                  Realm settings -> Login tab  -> User registration: on`,
            `- Enable the Account theme (optional):  Realm settings -> Themes tab -> Account theme: ${buildOptions.themeNames[0]}`,
            `                                        Clients        -> account    -> Login theme:   ${buildOptions.themeNames[0]}`,
            `- Enable the email theme (optional):    Realm settings -> Themes tab -> Email theme:   ${buildOptions.themeNames[0]} (option will appear only if you have ran npx initialize-email-theme)`,
            `- Create a client                       Clients        -> Create     -> Client ID:                       myclient`,
            `                                                                        Root URL:                        https://www.keycloak.org/app/`,
            `                                                                        Valid redirect URIs:             https://www.keycloak.org/app* http://localhost* (localhost is optional)`,
            `                                                                        Valid post logout redirect URIs: https://www.keycloak.org/app* http://localhost*`,
            `                                                                        Web origins:                     *`,
            `                                                                        Login Theme:                     ${buildOptions.themeNames[0]}`,
            `                                                                        Save (button at the bottom of the page)`,
            ``,
            `- Go to  👉  https://www.keycloak.org/app/ 👈 Click "Save" then "Sign in". You should see your login page`,
            `- Got to 👉  http://localhost:8080/realms/myrealm/account 👈 to see your account theme`,
            ``,
            `Video tutorial: https://youtu.be/WMyGZNHQkjU`,
            ``
        ].join("\n")
    );
}
