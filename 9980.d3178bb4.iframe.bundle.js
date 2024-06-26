"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[9980],{"./dist/account/pages/Password.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Password});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/index.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/tools/clsx.js"),_account_lib_kcClsx__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./dist/account/lib/kcClsx.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Password(props){var _a,_b,kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=Object.assign(Object.assign({},props.classes),{kcBodyClass:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_14__.W)(null===(_a=props.classes)||void 0===_a?void 0:_a.kcBodyClass,"password")}),kcClsx=(0,_account_lib_kcClsx__WEBPACK_IMPORTED_MODULE_15__.$)({doUseDefaultCss,classes}).kcClsx,url=kcContext.url,password=kcContext.password,account=kcContext.account,stateChecker=kcContext.stateChecker,msgStr=i18n.msgStr,msg=i18n.msg,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(""),2),currentPassword=_useState2[0],setCurrentPassword=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(""),2),newPassword=_useState4[0],setNewPassword=_useState4[1],_useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(""),2),newPasswordConfirm=_useState6[0],setNewPasswordConfirm=_useState6[1],_useState8=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(""),2),newPasswordError=_useState8[0],setNewPasswordError=_useState8[1],_useState10=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(""),2),newPasswordConfirmError=_useState10[0],setNewPasswordConfirmError=_useState10[1],_useState12=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),2),hasNewPasswordBlurred=_useState12[0],setHasNewPasswordBlurred=_useState12[1],_useState14=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),2),hasNewPasswordConfirmBlurred=_useState14[0],setHasNewPasswordConfirmBlurred=_useState14[1],checkNewPassword=function checkNewPassword(newPassword){password.passwordSet&&setNewPasswordError(newPassword===currentPassword?msgStr("newPasswordSameAsOld"):"")},checkNewPasswordConfirm=function checkNewPasswordConfirm(newPasswordConfirm){""!==newPasswordConfirm&&setNewPasswordConfirmError(newPassword!==newPasswordConfirm?msgStr("passwordConfirmNotMatch"):"")};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(Template,Object.assign({},{kcContext:Object.assign(Object.assign({},kcContext),{message:""!==newPasswordError?{type:"error",summary:newPasswordError}:""!==newPasswordConfirmError?{type:"error",summary:newPasswordConfirmError}:kcContext.message}),i18n,doUseDefaultCss,classes},{active:"password"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",Object.assign({className:"row"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:"col-md-10"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h2",{children:msg("changePasswordHtmlTitle")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:"col-md-2 subtitle"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",Object.assign({className:"subtitle"},{children:msg("allFieldsRequired")}))}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form",Object.assign({action:url.passwordUrl,className:"form-horizontal",method:"post"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input",{type:"text",id:"username",name:"username",value:null!==(_b=account.username)&&void 0!==_b?_b:"",autoComplete:"username",readOnly:!0,style:{display:"none"}}),password.passwordSet&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",Object.assign({className:"form-group"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:"col-sm-2 col-md-2"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("label",Object.assign({htmlFor:"password",className:"control-label"},{children:msg("password")}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:"col-sm-10 col-md-10"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",autoFocus:!0,autoComplete:"current-password",value:currentPassword,onChange:function onChange(event){return setCurrentPassword(event.target.value)}})}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input",{type:"hidden",id:"stateChecker",name:"stateChecker",value:stateChecker}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",Object.assign({className:"form-group"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:"col-sm-2 col-md-2"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("label",Object.assign({htmlFor:"password-new",className:"control-label"},{children:msg("passwordNew")}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:"col-sm-10 col-md-10"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input",{type:"password",className:"form-control",id:"password-new",name:"password-new",autoComplete:"new-password",value:newPassword,onChange:function onChange(event){var newPassword=event.target.value;setNewPassword(newPassword),hasNewPasswordBlurred&&checkNewPassword(newPassword)},onBlur:function onBlur(){setHasNewPasswordBlurred(!0),checkNewPassword(newPassword)}})}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",Object.assign({className:"form-group"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:"col-sm-2 col-md-2"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("label",Object.assign({htmlFor:"password-confirm",className:"control-label two-lines"},{children:msg("passwordConfirm")}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:"col-sm-10 col-md-10"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input",{type:"password",className:"form-control",id:"password-confirm",name:"password-confirm",autoComplete:"new-password",value:newPasswordConfirm,onChange:function onChange(event){var newPasswordConfirm=event.target.value;setNewPasswordConfirm(newPasswordConfirm),hasNewPasswordConfirmBlurred&&checkNewPasswordConfirm(newPasswordConfirm)},onBlur:function onBlur(){setHasNewPasswordConfirmBlurred(!0),checkNewPasswordConfirm(newPasswordConfirm)}})}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:"form-group"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({id:"kc-form-buttons",className:"col-md-offset-2 col-md-10 submit"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button",Object.assign({disabled:""!==newPasswordError||""!==newPasswordConfirmError,type:"submit",className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonLargeClass"),name:"submitAction",value:"Save"},{children:msg("doSave")}))})}))}))]}))]}))}}}]);