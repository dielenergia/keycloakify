import { join as pathJoin } from "path";
import { downloadKeycloakDefaultTheme } from "../shared/downloadKeycloakDefaultTheme";
import { transformCodebase } from "../../src/bin/tools/transformCodebase";
import { existsAsync } from "../../src/bin/tools/fs.existsAsync";
import { getThisCodebaseRootDirPath } from "../../src/bin/tools/getThisCodebaseRootDirPath";
import { WELL_KNOWN_DIRECTORY_BASE_NAME } from "../../src/bin/shared/constants";
import { assert, type Equals } from "tsafe/assert";
import * as fsPr from "fs/promises";

export async function createPublicDotKeycloakifyDir() {
    await Promise.all(
        (["login", "account"] as const).map(async themeType => {
            const { extractedDirPath } = await downloadKeycloakDefaultTheme({
                keycloakVersionId: (() => {
                    switch (themeType) {
                        case "login":
                            return "FOR_LOGIN_THEME";
                        case "account":
                            return "FOR_ACCOUNT_MULTI_PAGE";
                    }
                    assert<Equals<typeof themeType, never>>();
                })()
            });

            const destDirPath = pathJoin(
                getThisCodebaseRootDirPath(),
                "dist",
                "res",
                "public",
                WELL_KNOWN_DIRECTORY_BASE_NAME.DOT_KEYCLOAKIFY,
                themeType
            );

            await fsPr.rm(destDirPath, { recursive: true, force: true });

            base_resources: {
                const srcDirPath = pathJoin(
                    extractedDirPath,
                    "base",
                    themeType,
                    "resources"
                );

                if (!(await existsAsync(srcDirPath))) {
                    break base_resources;
                }

                transformCodebase({
                    srcDirPath,
                    destDirPath
                });
            }

            transformCodebase({
                srcDirPath: pathJoin(
                    extractedDirPath,
                    "keycloak",
                    themeType,
                    "resources"
                ),
                destDirPath
            });

            transformCodebase({
                srcDirPath: pathJoin(extractedDirPath, "keycloak", "common", "resources"),
                destDirPath: pathJoin(
                    destDirPath,
                    WELL_KNOWN_DIRECTORY_BASE_NAME.RESOURCES_COMMON
                )
            });

            copy_v24_js: {
                if (themeType !== "login") {
                    break copy_v24_js;
                }

                const { extractedDirPath } = await downloadKeycloakDefaultTheme({
                    keycloakVersionId: "LAST_24"
                });

                transformCodebase({
                    srcDirPath: pathJoin(
                        extractedDirPath,
                        "base",
                        "login",
                        "resources",
                        "js"
                    ),
                    destDirPath: pathJoin(destDirPath, "js", "v24")
                });
            }
        })
    );
}
