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

/***/ "./app/client.ts":
/*!***********************!*\
  !*** ./app/client.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var app_development_testInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/development/testInput */ \"./app/development/testInput.ts\");\n\r\n// import { TaskDataBase } from 'app/taskDataBase';\r\nlet dataBase = [];\r\n(0,app_development_testInput__WEBPACK_IMPORTED_MODULE_0__.testInputs)(dataBase);\r\nconsole.log(dataBase);\r\nfunction update() {\r\n    return;\r\n}\r\nsetInterval(update, 1000);\r\n\n\n//# sourceURL=webpack://alttp/./app/client.ts?");

/***/ }),

/***/ "./app/development/testInput.ts":
/*!**************************************!*\
  !*** ./app/development/testInput.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   testInputs: () => (/* binding */ testInputs)\n/* harmony export */ });\n/* harmony import */ var app_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/task */ \"./app/task.ts\");\n// import { TaskDataBase } from 'app/taskDataBase';\r\n\r\n// This file is to make testing easier for the dev\r\n// pushes a bunch of different tasks to the database\r\n// as of current have the function needed for all the process\r\n// but plan to move them to the right location in the future\r\nfunction testInputs(dataBase) {\r\n    const test1 = (0,app_task__WEBPACK_IMPORTED_MODULE_0__.createNewTask)('test1');\r\n    dataBase.push(test1);\r\n    dataBase.push((0,app_task__WEBPACK_IMPORTED_MODULE_0__.createNewTask)('test2', test1));\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/development/testInput.ts?");

/***/ }),

/***/ "./app/task.ts":
/*!*********************!*\
  !*** ./app/task.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewTask: () => (/* binding */ createNewTask)\n/* harmony export */ });\nfunction createNewTask(taskName, dependantTask) {\r\n    const newTask = {\r\n        title: taskName,\r\n        dependancy: dependantTask\r\n    };\r\n    return newTask;\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/task.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/client.ts");
/******/ 	
/******/ })()
;