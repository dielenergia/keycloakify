"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[500],{"./dist/login/pages/UpdateEmail.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>UpdateEmail});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/index.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/login/lib/kcClsx.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function UpdateEmail(props){var kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=props.classes,UserProfileFormFields=props.UserProfileFormFields,doMakeUserConfirmPassword=props.doMakeUserConfirmPassword,kcClsx=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_14__.$)({doUseDefaultCss,classes}).kcClsx,msg=i18n.msg,msgStr=i18n.msgStr,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),2),isFormSubmittable=_useState2[0],setIsFormSubmittable=_useState2[1],url=kcContext.url,messagesPerField=kcContext.messagesPerField,isAppInitiatedAction=kcContext.isAppInitiatedAction;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,displayMessage:messagesPerField.exists("global"),displayRequiredFields:!0,headerNode:msg("updateEmailTitle")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form",Object.assign({id:"kc-update-email-form",className:kcClsx("kcFormClass"),action:url.loginAction,method:"post"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(UserProfileFormFields,{kcContext,i18n,kcClsx,onIsFormSubmittableValueChange:setIsFormSubmittable,doMakeUserConfirmPassword}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({id:"kc-form-options",className:kcClsx("kcFormOptionsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:kcClsx("kcFormOptionsWrapperClass")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(LogoutOtherSessions,{kcClsx,i18n}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",Object.assign({id:"kc-form-buttons",className:kcClsx("kcFormButtonsClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input",{disabled:!isFormSubmittable,className:kcClsx("kcButtonClass","kcButtonPrimaryClass",isAppInitiatedAction&&"kcButtonBlockClass","kcButtonLargeClass"),type:"submit",value:msgStr("doSubmit")}),isAppInitiatedAction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button",Object.assign({className:kcClsx("kcButtonClass","kcButtonDefaultClass","kcButtonLargeClass"),type:"submit",name:"cancel-aia",value:"true"},{children:msg("doCancel")}))]}))]}))]}))}))}function LogoutOtherSessions(props){var kcClsx=props.kcClsx,msg=props.i18n.msg;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({id:"kc-form-options",className:kcClsx("kcFormOptionsClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:kcClsx("kcFormOptionsWrapperClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:"checkbox"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input",{type:"checkbox",id:"logout-sessions",name:"logout-sessions",value:"on",defaultChecked:!0}),msg("logoutOtherSessions")]})}))}))}))}}}]);