"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[9284],{"./dist/login/pages/WebauthnError.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>WebauthnError});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/login/lib/kcClsx.js");function WebauthnError(props){var kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=props.classes,url=kcContext.url,isAppInitiatedAction=kcContext.isAppInitiatedAction,msg=i18n.msg,msgStr=i18n.msgStr,kcClsx=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_2__.$)({doUseDefaultCss,classes}).kcClsx;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,displayMessage:!0,headerNode:msg("webauthn-error-title")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form",Object.assign({id:"kc-error-credential-form",className:kcClsx("kcFormClass"),action:url.loginAction,method:"post"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"hidden",id:"executionValue",name:"authenticationExecution"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"hidden",id:"isSetRetry",name:"isSetRetry"})]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{tabIndex:4,onClick:function onClick(){document.getElementById("isSetRetry").value="retry",document.getElementById("executionValue").value="${execution}",document.getElementById("kc-error-credential-form").submit()},type:"button",className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),name:"try-again",id:"kc-try-again",value:msgStr("doTryAgain")}),isAppInitiatedAction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("form",Object.assign({action:url.loginAction,className:kcClsx("kcFormClass"),id:"kc-webauthn-settings-form",method:"post"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",Object.assign({type:"submit",className:kcClsx("kcButtonClass","kcButtonDefaultClass","kcButtonBlockClass","kcButtonLargeClass"),id:"cancelWebAuthnAIA",name:"cancel-aia",value:"true"},{children:msgStr("doCancel")}))}))]}))}}}]);