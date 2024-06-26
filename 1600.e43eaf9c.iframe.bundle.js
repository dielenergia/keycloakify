"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[1600],{"./dist/login/pages/WebauthnAuthenticate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>WebauthnAuthenticate});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_tools_assert__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/tools/assert.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/tools/clsx.js"),_tools_useInsertScriptTags__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/tools/useInsertScriptTags.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/login/lib/kcClsx.js");function WebauthnAuthenticate(props){var kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=props.classes,kcClsx=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_7__.$)({doUseDefaultCss,classes}).kcClsx,url=kcContext.url,isUserIdentified=kcContext.isUserIdentified,challenge=kcContext.challenge,userVerification=kcContext.userVerification,rpId=kcContext.rpId,createTimeout=kcContext.createTimeout,messagesPerField=kcContext.messagesPerField,realm=kcContext.realm,registrationDisabled=kcContext.registrationDisabled,authenticators=kcContext.authenticators,shouldDisplayAuthenticators=kcContext.shouldDisplayAuthenticators,msg=i18n.msg,msgStr=i18n.msgStr,advancedMsg=i18n.advancedMsg,insertScriptTags=(0,_tools_useInsertScriptTags__WEBPACK_IMPORTED_MODULE_6__.m)({componentOrHookName:"WebauthnAuthenticate",scriptTags:[{type:"text/javascript",src:url.resourcesCommonPath+"/node_modules/jquery/dist/jquery.min.js"},{type:"text/javascript",src:url.resourcesPath+"/js/base64url.js"},{type:"text/javascript",textContent:"\n\n                    function webAuthnAuthenticate() {\n                        let isUserIdentified = "+isUserIdentified+";\n                        if (!isUserIdentified) {\n                            doAuthenticate([]);\n                            return;\n                        }\n                        checkAllowCredentials();\n                    }\n\n                    function checkAllowCredentials() {\n                        let allowCredentials = [];\n                        let authn_use = document.forms['authn_select'].authn_use_chk;\n                    \n                        if (authn_use !== undefined) {\n                            if (authn_use.length === undefined) {\n                                allowCredentials.push({\n                                    id: base64url.decode(authn_use.value, {loose: true}),\n                                    type: 'public-key',\n                                });\n                            } else {\n                                for (let i = 0; i < authn_use.length; i++) {\n                                    allowCredentials.push({\n                                        id: base64url.decode(authn_use[i].value, {loose: true}),\n                                        type: 'public-key',\n                                    });\n                                }\n                            }\n                        }\n                        doAuthenticate(allowCredentials);\n                    }\n\n\n                    function doAuthenticate(allowCredentials) {\n                    \n                        // Check if WebAuthn is supported by this browser\n                        if (!window.PublicKeyCredential) {\n                            $(\"#error\").val(\""+msgStr("webauthn-unsupported-browser-text")+'");\n                            $("#webauth").submit();\n                            return;\n                        }\n                    \n                        let challenge = "'+challenge+'";\n                        let userVerification = "'+userVerification+'";\n                        let rpId = "'+rpId+'";\n                        let publicKey = {\n                            rpId : rpId,\n                            challenge: base64url.decode(challenge, { loose: true })\n                        };\n                    \n                        let createTimeout = '+createTimeout+';\n                        if (createTimeout !== 0) publicKey.timeout = createTimeout * 1000;\n                    \n                        if (allowCredentials.length) {\n                            publicKey.allowCredentials = allowCredentials;\n                        }\n                    \n                        if (userVerification !== \'not specified\') publicKey.userVerification = userVerification;\n                    \n                        navigator.credentials.get({publicKey})\n                            .then((result) => {\n                                window.result = result;\n                            \n                                let clientDataJSON = result.response.clientDataJSON;\n                                let authenticatorData = result.response.authenticatorData;\n                                let signature = result.response.signature;\n                            \n                                $("#clientDataJSON").val(base64url.encode(new Uint8Array(clientDataJSON), { pad: false }));\n                                $("#authenticatorData").val(base64url.encode(new Uint8Array(authenticatorData), { pad: false }));\n                                $("#signature").val(base64url.encode(new Uint8Array(signature), { pad: false }));\n                                $("#credentialId").val(result.id);\n                                if(result.response.userHandle) {\n                                    $("#userHandle").val(base64url.encode(new Uint8Array(result.response.userHandle), { pad: false }));\n                                }\n                                $("#webauth").submit();\n                            })\n                            .catch((err) => {\n                                $("#error").val(err);\n                                $("#webauth").submit();\n                            })\n                        ;\n                    }\n\n                '}]}).insertScriptTags;return(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){insertScriptTags()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,displayMessage:!messagesPerField.existsError("username"),displayInfo:realm.password&&realm.registrationAllowed&&!registrationDisabled,infoNode:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-registration"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{children:[msg("noAccount")," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",Object.assign({tabIndex:6,href:url.registrationUrl},{children:msg("doRegister")}))]})})),headerNode:msg("webauthn-login-title")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({id:"kc-form-webauthn",className:kcClsx("kcFormClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form",Object.assign({id:"webauth",action:url.loginAction,method:"post"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"hidden",id:"clientDataJSON",name:"clientDataJSON"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"hidden",id:"authenticatorData",name:"authenticatorData"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"hidden",id:"signature",name:"signature"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"hidden",id:"credentialId",name:"credentialId"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"hidden",id:"userHandle",name:"userHandle"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"hidden",id:"error",name:"error"})]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_5__.W)(kcClsx("kcFormGroupClass"),"no-bottom-margin")},{children:[authenticators&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("form",Object.assign({id:"authn_select",className:kcClsx("kcFormClass")},{children:authenticators.authenticators.map((function(authenticator){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"hidden",name:"authn_use_chk",value:authenticator.credentialId})}))})),shouldDisplayAuthenticators&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[authenticators.authenticators.length>1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",Object.assign({className:kcClsx("kcSelectAuthListItemTitle")},{children:msg("webauthn-available-authenticators")})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:kcClsx("kcFormOptionsClass")},{children:authenticators.authenticators.map((function(authenticator,i){var _a,className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({id:"kc-webauthn-authenticator",className:kcClsx("kcSelectAuthListItemClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:kcClsx("kcSelectAuthListItemIconClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_5__.W)((className=kcClsx(authenticator.transports.iconClass),className===authenticator.transports.iconClass?kcClsx("kcWebAuthnDefaultIcon"):className),kcClsx("kcSelectAuthListItemIconPropertyClass"))})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:kcClsx("kcSelectAuthListItemArrowIconClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-webauthn-authenticator-label",className:kcClsx("kcSelectAuthListItemHeadingClass")},{children:advancedMsg(authenticator.label)})),(null===(_a=authenticator.transports.displayNameProperties)||void 0===_a?void 0:_a.length)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-webauthn-authenticator-transport",className:kcClsx("kcSelectAuthListItemDescriptionClass")},{children:authenticator.transports.displayNameProperties.map((function(nameProperty,i,arr){return{nameProperty,hasNext:i!==arr.length-1}})).map((function(_ref){var nameProperty=_ref.nameProperty,hasNext=_ref.hasNext;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:msg(nameProperty)}),hasNext&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:", "})]},nameProperty)}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:kcClsx("kcSelectAuthListItemDescriptionClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",Object.assign({id:"kc-webauthn-authenticator-created-label"},{children:msg("webauthn-createdAt-label")})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",Object.assign({id:"kc-webauthn-authenticator-created"},{children:authenticator.createdAt}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:kcClsx("kcSelectAuthListItemFillClass")})]}))]}),i)}))}))]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-form-buttons",className:kcClsx("kcFormButtonsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{id:"authenticateWebAuthnButton",type:"button",onClick:function onClick(){(0,_tools_assert__WEBPACK_IMPORTED_MODULE_4__.h)("webAuthnAuthenticate"in window),(0,_tools_assert__WEBPACK_IMPORTED_MODULE_4__.h)("function"==typeof window.webAuthnAuthenticate),window.webAuthnAuthenticate()},autoFocus:!0,value:msgStr("webauthn-doAuthenticate"),className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass")})}))]}))]}))}))}}}]);