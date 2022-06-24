/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://moduletwo/./src/css/index.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _modules_activateNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/activateNavItem */ \"./src/js/modules/activateNavItem.js\");\n/* harmony import */ var _modules_toggleBurger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/toggleBurger */ \"./src/js/modules/toggleBurger.js\");\n/* harmony import */ var _modules_toggleModalForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toggleModalForm */ \"./src/js/modules/toggleModalForm.js\");\n/* harmony import */ var _modules_validationKonsult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validationKonsult */ \"./src/js/modules/validationKonsult.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_toggleBurger__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_activateNavItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_validationKonsult__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_toggleModalForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\n\n//# sourceURL=webpack://moduletwo/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/activateNavItem.js":
/*!*******************************************!*\
  !*** ./src/js/modules/activateNavItem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst activateNavItem = () => {\r\n    let navItem = document.querySelectorAll('.nav__item');\r\n    for (let el of navItem) {\r\n        if (el.href == window.location.href) {\r\n            el.classList.add('nav__item--active');\r\n        } else if (window.location.pathname == '/') {\r\n            document.querySelector('.nav__konsult').classList.add('nav__item--active')\r\n        } else if (window.location.href.indexOf('/trainDesc.html')) {\r\n            document.querySelector('.nav__train').classList.add('nav__item--active');\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateNavItem);\r\n\n\n//# sourceURL=webpack://moduletwo/./src/js/modules/activateNavItem.js?");

/***/ }),

/***/ "./src/js/modules/resetForm.js":
/*!*************************************!*\
  !*** ./src/js/modules/resetForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction resetForm(inputs, sendBtn, sendText, btnText) {\r\n    inputs.forEach(input => {\r\n        input.value = ''\r\n    });\r\n    sendBtn.classList.add('form__btn-error');\r\n    sendBtn.textContent = \"Получить консультацию\"\r\n    sendBtn.classList.remove('form__btn-send');\r\n    sendText.textContent = '';\r\n    sendBtn.nextElementSibling.textContent = 'Ваша заявка успешно отправлена';\r\n    setTimeout(() => {\r\n        sendBtn.nextElementSibling.textContent = '';\r\n    }, 1500);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetForm);\n\n//# sourceURL=webpack://moduletwo/./src/js/modules/resetForm.js?");

/***/ }),

/***/ "./src/js/modules/toggleBurger.js":
/*!****************************************!*\
  !*** ./src/js/modules/toggleBurger.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toggleBurger() {\r\n    let bgMenu = document.querySelector('.burger');\r\n    let openMenu = document.querySelector('.header__door');\r\n    let closeMenu = document.querySelector('.burger__close');\r\n\r\n    function toggleClassMenu(element) {\r\n        element?.addEventListener('click', function () {\r\n            bgMenu?.classList.toggle('burger--notActive');\r\n        })\r\n    }\r\n\r\n    toggleClassMenu(openMenu);\r\n    toggleClassMenu(closeMenu);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleBurger);\n\n//# sourceURL=webpack://moduletwo/./src/js/modules/toggleBurger.js?");

/***/ }),

/***/ "./src/js/modules/toggleModalForm.js":
/*!*******************************************!*\
  !*** ./src/js/modules/toggleModalForm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toggleModalForm() {\r\n    let openModal = document.querySelector('.start__button');\r\n    let modal = document.querySelector('.modal-none');\r\n    let closeModal = document.querySelector('.modalWindow__close')\r\n    openModal?.addEventListener('click', function () {\r\n        modal.classList.add('modalWindow-bg');\r\n        modal.classList.remove('modal-none')\r\n    });\r\n    closeModal?.addEventListener('click', function () {\r\n        modal.classList.remove('modalWindow-bg');\r\n        modal.classList.add('modal-none')\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModalForm);\n\n//# sourceURL=webpack://moduletwo/./src/js/modules/toggleModalForm.js?");

/***/ }),

/***/ "./src/js/modules/validation.js":
/*!**************************************!*\
  !*** ./src/js/modules/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction validateText(elem, sendText) {\r\n    if (elem.value.length <= 0) {\r\n        elem.classList.add('input--error')\r\n        elem.nextElementSibling.textContent = 'поле обязательно';\r\n        sendText.textContent = '';\r\n        return false\r\n    }\r\n    elem.nextElementSibling.textContent = '';\r\n    elem.classList.remove('input--error')\r\n    return true\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateText);\n\n//# sourceURL=webpack://moduletwo/./src/js/modules/validation.js?");

/***/ }),

/***/ "./src/js/modules/validationKonsult.js":
/*!*********************************************!*\
  !*** ./src/js/modules/validationKonsult.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _resetForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetForm */ \"./src/js/modules/resetForm.js\");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ \"./src/js/modules/validation.js\");\n\r\n\r\n\r\nconst validationKonsult = () => {\r\n    let servInput = document.querySelectorAll('.input');\r\n    let servBtn = document.querySelector('.form__btn');\r\n    let sendText = document.querySelector('.send-text');\r\n\r\n    servBtn?.addEventListener('click', function () {\r\n        let isValid = true;\r\n        servInput.forEach(elem => {\r\n            if ((0,_validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elem, sendText) === false) {\r\n                isValid = false\r\n            }\r\n        })\r\n        if (isValid) {\r\n            let btnText = servBtn.textContent;\r\n            servBtn.classList.add('form__btn-send');\r\n            servBtn.classList.remove('form__btn-error');\r\n\r\n            servBtn.textContent = 'идет отправка...'\r\n            setTimeout(() => {\r\n                ;(0,_resetForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(servInput, servBtn, sendText, btnText)\r\n            }, 2000);\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationKonsult);\n\n//# sourceURL=webpack://moduletwo/./src/js/modules/validationKonsult.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;