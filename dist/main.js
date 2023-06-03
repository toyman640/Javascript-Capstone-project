/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: bisque;\\r\\n}\\r\\n\\r\\n.navigation {\\r\\n  display: flex;\\r\\n  margin-bottom: 10px;\\r\\n  justify-content: space-between;\\r\\n  width: 80%;\\r\\n  margin-left: 10%;\\r\\n}\\r\\n\\r\\n.navigation ul {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  width: 30%;\\r\\n  justify-content: space-around;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.navigation a {\\r\\n  text-decoration: none;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n#footer {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  border: 1px solid rgb(4, 66, 46);\\r\\n}\\r\\n\\r\\n.meal-card {\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n.meal-img {\\r\\n  height: 200px;\\r\\n}\\r\\n\\r\\n.meals {\\r\\n  width: 80%;\\r\\n  margin-left: 10%;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  grid-gap: 20px;\\r\\n}\\r\\n\\r\\n.inner-part {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.popup-container {\\r\\n  background: aquamarine;\\r\\n  width: 70%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 20px;\\r\\n  backdrop-filter: blur(10px);\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  overflow: scroll;\\r\\n  overflow-x: hidden;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  align-items: center;\\r\\n  backdrop-filter: blur(15px);\\r\\n}\\r\\n\\r\\n.popImg {\\r\\n  max-width: 85%;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.FoodName {\\r\\n  font-size: 30px;\\r\\n  color: black;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.ingredients {\\r\\n  font-size: 26px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.ingredientC {\\r\\n  font-size: 18px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.commentTitle {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.comments p {\\r\\n  font-size: 17px;\\r\\n}\\r\\n\\r\\n.flexForm {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.username {\\r\\n  width: 30%;\\r\\n  padding: 8px;\\r\\n  margin-top: 20px;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.pop-card {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.likes-icon {\\r\\n  height: 20px;\\r\\n  margin-top: 15px;\\r\\n}\\r\\n\\r\\n.likes-count {\\r\\n  margin-left: 40%;\\r\\n  margin-top: -10px;\\r\\n}\\r\\n\\r\\n.likes-button {\\r\\n  border: 0;\\r\\n  background: inherit;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.closeBtn {\\r\\n  border: 0;\\r\\n  background: inherit;\\r\\n  margin-left: 90%;\\r\\n  margin-bottom: 8px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  position: absolute;\\r\\n  width: 50%;\\r\\n  margin-left: 25%;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n.blur {\\r\\n  filter: blur(8px);\\r\\n}\\r\\n\\r\\n.comment-title {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.hide-div {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_get_meals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/get-meals.js */ \"./src/modules/get-meals.js\");\n/* harmony import */ var _modules_showComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showComments.js */ \"./src/modules/showComments.js\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _asset_icon_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/icon-logo.png */ \"./src/asset/icon-logo.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst iconLogo = document.querySelector('.logo');\r\niconLogo.src = _asset_icon_logo_png__WEBPACK_IMPORTED_MODULE_4__;\r\nconst maindiv = document.querySelector('.meals');\r\n\r\nconst loadPage = async () => {\r\n  const pageLikes = await (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();\r\n  (0,_modules_get_meals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pageLikes);\r\n  (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();\r\n  maindiv.addEventListener('click', (_modules_showComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\r\n  maindiv.addEventListener('click', (_modules_likes_js__WEBPACK_IMPORTED_MODULE_3__.checklike));\r\n};\r\nloadPage();\r\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/addcomment.js":
/*!***********************************!*\
  !*** ./src/modules/addcomment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst keepComment = () => {\n  const name = document.querySelector('#name');\n  const comment = document.querySelector('#msg');\n  const commentId = document.querySelector('#commentId');\n  const nameInput = name.value;\n  const commentInput = comment.value;\n  const commentIdval = commentId.value;\n  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UeRVpttbuH5idOpNpTZz/comments?item_id=${commentIdval}`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: commentIdval,\n      username: nameInput,\n      comment: commentInput,\n    }),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  name.value = '';\n  comment.value = '';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keepComment);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/addcomment.js?");

/***/ }),

/***/ "./src/modules/commentCount.js":
/*!*************************************!*\
  !*** ./src/modules/commentCount.js ***!
  \*************************************/
/***/ ((module) => {

eval("const countComment = (array) => array.length;\r\n\r\nmodule.exports = countComment;\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/commentCount.js?");

/***/ }),

/***/ "./src/modules/get-meals.js":
/*!**********************************!*\
  !*** ./src/modules/get-meals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _love_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./love.png */ \"./src/modules/love.png\");\n/* harmony import */ var _items_count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-count.js */ \"./src/modules/items-count.js\");\n/* harmony import */ var _items_count_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_items_count_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';\nconst maindiv = document.querySelector('.meals');\nconst mealsNum = document.querySelector('.meals-count');\n\nconst viewData = (pageLikes) => {\n  fetch(url, { mode: 'cors' }, {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  })\n    .then((response) => response.json())\n    .then((data) => {\n      const mealStore = [];\n      let counter = 0;\n      data.meals.forEach((info) => {\n        if (counter < 6) {\n          mealStore.push(info);\n          counter += 1;\n        }\n      });\n      const mealCounter = _items_count_js__WEBPACK_IMPORTED_MODULE_1___default()(mealStore);\n      mealsNum.innerHTML = `(${mealCounter})`;\n      mealStore.forEach((element) => {\n        const id = element.idMeal;\n        const mealLikes = pageLikes.find((like) => like.item_id === id);\n        const mealsDiv = document.createElement('div');\n        mealsDiv.classList.add('meals-div');\n        mealsDiv.innerHTML = `\n        <div class=\"meal-card\">\n          <img class=\"meal-img\" src=${element.strMealThumb}>\n          <div class=\"inner-part\">\n            <p>${element.strMeal}</p>\n            <button  class=\"likes-button\"><img id=\"${element.idMeal}\" alt=\"likes\" class=\"likes-icon\" src=\"${_love_png__WEBPACK_IMPORTED_MODULE_0__}\"></button>\n          </div>\n          <p id=\"likes-count-${element.idMeal}\" class=\"likes-count\" >${mealLikes ? mealLikes.likes : 0} Likes</p>\n          <button id= \"${element.idMeal}\" class=\"buttons\" > Comments </button>\n        </div>\n        `;\n        maindiv.appendChild(mealsDiv);\n      });\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewData);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/get-meals.js?");

/***/ }),

/***/ "./src/modules/getcomment.js":
/*!***********************************!*\
  !*** ./src/modules/getcomment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCount.js */ \"./src/modules/commentCount.js\");\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commentCount_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst getComment = async () => {\r\n  const commentId1 = document.querySelector('.idMeal');\r\n  const commentIdval = commentId1.innerHTML;\r\n  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UeRVpttbuH5idOpNpTZz/comments?item_id=${commentIdval}`, { mode: 'cors' }, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      const commentDiv = document.querySelector('.comments');\r\n      commentDiv.innerHTML = '';\r\n      if (data.length === undefined) {\r\n        commentDiv.innerHTML = 'no comments';\r\n      } else {\r\n        const commentNum = _commentCount_js__WEBPACK_IMPORTED_MODULE_0___default()(data);\r\n        const comCount = document.createElement('h3');\r\n        comCount.classList.add('comment-title');\r\n        comCount.innerHTML = `Comments (${commentNum})`;\r\n        commentDiv.appendChild(comCount);\r\n        data.forEach((det) => {\r\n          const para = document.createElement('p');\r\n          para.innerHTML = `${det.creation_date} ${det.username} : ${det.comment}`;\r\n\r\n          commentDiv.appendChild(para);\r\n        });\r\n      }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComment);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getcomment.js?");

/***/ }),

/***/ "./src/modules/items-count.js":
/*!************************************!*\
  !*** ./src/modules/items-count.js ***!
  \************************************/
/***/ ((module) => {

eval("const countItems = (array) => array.length;\n\nmodule.exports = countItems;\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/items-count.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checklike: () => (/* binding */ checklike),\n/* harmony export */   getLikes: () => (/* binding */ getLikes)\n/* harmony export */ });\nconst likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UeRVpttbuH5idOpNpTZz/likes';\n\nconst likePost = (likesId) => {\n  const likesCount = document.getElementById(`likes-count-${likesId}`);\n  if (likesCount) {\n    const currentLikes = parseInt(likesCount.textContent, 10);\n    const newLikes = currentLikes + 1;\n    likesCount.textContent = `${newLikes} Likes`;\n  }\n  fetch(likesUrl, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: likesId,\n    }),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n};\n\nconst checklike = (event) => {\n  if (event.target.classList.contains('likes-icon')) {\n    const likesId = event.target.getAttribute('id');\n    likePost(likesId);\n  }\n};\n\nconst getLikes = async () => {\n  try {\n    const result = await fetch(likesUrl, {\n      method: 'GET',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n    return result.json();\n  } catch (error) {\n    return [];\n  }\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/showComments.js":
/*!*************************************!*\
  !*** ./src/modules/showComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addcomment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcomment.js */ \"./src/modules/addcomment.js\");\n/* harmony import */ var _getcomment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getcomment.js */ \"./src/modules/getcomment.js\");\n\n\n\nconst popCard = document.querySelector('.pop-card');\nconst mealsDiv = document.querySelector('.meals');\n\nconst showPop = (buttonId) => {\n  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${buttonId}`)\n    .then((res) => res.json())\n    .then((data) => {\n      popCard.innerHTML = `\n      <div class=\"card\">\n      \n      <div class=\"popup-container\">\n      <button class=\"closeBtn\"><img class=\"close\" src=\"https://static.vecteezy.com/system/resources/thumbnails/020/048/793/small/x-transparent-background-free-png.png\"></button>\n      <img class=\"popImg\" src=\"${data.meals[0].strMealThumb}\">\n      <h3 class=\"FoodName\">${data.meals[0].strMeal}</h3>\n      <p class=\"ingredients\">\n      The Ingredients\n      </p>\n      <div class=\"ingredientC\">\n      ${data.meals[0].strIngredient1},\n      ${data.meals[0].strIngredient2},\n      ${data.meals[0].strIngredient3},\n      ${data.meals[0].strIngredient4},\n      ${data.meals[0].strIngredient5},\n      ${data.meals[0].strIngredient6},\n      ${data.meals[0].strIngredient7},\n      ${data.meals[0].strIngredient8},\n      </div>\n      <div class=\"comments\">\n      </div><br>\n      <form class=\"flexForm\">\n      <div class=\"commentTitle\" align=\"center\">\n      Add comment\n      </div>\n      <input type=\"hidden\" id=\"commentId\" class=\"username\" value=\"${data.meals[0].idMeal}\"><br>\n      <input type=\"text\" id=\"name\" class=\"username\" placeholder=\"username\"><br>\n      <textarea id=\"msg\" name=\"user_message\" placeholder=\"Your insight\" required maxlength=\"500\"></textarea><br>\n      <button id=\"commentBtn\" class=\"submit\" type=\"button\">Comment</button>\n      <div class=\"idMeal hide-div\">${data.meals[0].idMeal}</div>\n      </form>\n      </div>\n      </div>\n      `;\n      const closeBtn = document.querySelector('.closeBtn');\n      const closePop = () => {\n        popCard.classList.toggle('pop-card');\n        mealsDiv.classList.toggle('blur');\n      };\n      closeBtn.addEventListener('click', closePop);\n      const commentButton = document.getElementById('commentBtn');\n      commentButton.addEventListener('click', async () => {\n        (0,_addcomment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        setTimeout(_getcomment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 3000);\n      });\n      (0,_getcomment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n  popCard.classList.toggle('pop-card');\n  mealsDiv.classList.toggle('blur');\n};\n\nconst checkbtn = (event) => {\n  if (event.target.classList.contains('buttons')) {\n    const buttonId = event.target.id;\n    showPop(buttonId);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkbtn);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/showComments.js?");

/***/ }),

/***/ "./src/asset/icon-logo.png":
/*!*********************************!*\
  !*** ./src/asset/icon-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"31288bc93855ea7b7e9d.png\";\n\n//# sourceURL=webpack://javascript-capstone-project/./src/asset/icon-logo.png?");

/***/ }),

/***/ "./src/modules/love.png":
/*!******************************!*\
  !*** ./src/modules/love.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e861006c9a3ce14a4cec.png\";\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/love.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;