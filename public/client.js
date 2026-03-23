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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var app_development_testInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/development/testInput */ \"./app/development/testInput.ts\");\n/* harmony import */ var app_taskHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/taskHandler */ \"./app/taskHandler.ts\");\n/* harmony import */ var app_schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/schedule */ \"./app/schedule.ts\");\n/* harmony import */ var app_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/ui */ \"./app/ui.ts\");\n/* harmony import */ var app_htmlElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/htmlElements */ \"./app/htmlElements.ts\");\n\r\n// import { DataBase } from 'app/dataBase';\r\n\r\n\r\n\r\n\r\nlet dataBase = {\r\n    content: [],\r\n    subjects: []\r\n};\r\nlet schedule = {\r\n    content: []\r\n};\r\nlet taskList = {\r\n    mustDo: [],\r\n    toDo: []\r\n};\r\n(0,app_development_testInput__WEBPACK_IMPORTED_MODULE_0__.testInputs)(dataBase);\r\n(0,app_schedule__WEBPACK_IMPORTED_MODULE_2__.scheduleTasks)(schedule, dataBase, 1440 * 30);\r\n(0,app_taskHandler__WEBPACK_IMPORTED_MODULE_1__.taskHandler)(schedule, taskList);\r\nconsole.log(dataBase.content);\r\nconsole.log(schedule.content);\r\nconsole.log(taskList.mustDo);\r\nconsole.log(taskList.toDo);\r\n(0,app_ui__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(taskList.mustDo, app_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskListDiv.mustDo);\r\n(0,app_ui__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(taskList.toDo, app_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskListDiv.toDo);\r\n(0,app_ui__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(schedule.content, app_htmlElements__WEBPACK_IMPORTED_MODULE_4__.scheduleDiv);\r\nfunction update() {\r\n    return;\r\n}\r\nsetInterval(update, 1000);\r\n\n\n//# sourceURL=webpack://alttp/./app/client.ts?");

/***/ }),

/***/ "./app/date.ts":
/*!*********************!*\
  !*** ./app/date.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentUTCTime: () => (/* binding */ getCurrentUTCTime),\n/* harmony export */   getLocalTime: () => (/* binding */ getLocalTime),\n/* harmony export */   getUTCTimeStamp: () => (/* binding */ getUTCTimeStamp)\n/* harmony export */ });\n// store everything in terms of minutes\r\nfunction getUTCTimeStamp(localTime) {\r\n    return Date.parse(localTime) / (1000 * 60);\r\n}\r\nfunction getCurrentUTCTime() {\r\n    return Math.floor(Date.now() / (1000 * 60));\r\n}\r\nfunction getLocalTime(timeStamp) {\r\n    const date = new Date(timeStamp * 1000 * 60);\r\n    return date.toString();\r\n}\r\n// need to store local date input as UTC timeStam\r\n// need to display UTC timeStamp as local date\r\n\n\n//# sourceURL=webpack://alttp/./app/date.ts?");

/***/ }),

/***/ "./app/development/testInput.ts":
/*!**************************************!*\
  !*** ./app/development/testInput.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   testInputs: () => (/* binding */ testInputs)\n/* harmony export */ });\n// import { isValid } from 'app/task';\r\n// This file is to make testing easier for the dev\r\n// pushes a bunch of different tasks to the database\r\n// as of current have the function needed for all the process\r\n// but plan to move them to the right location in the future\r\nfunction testInputs(taskDB) {\r\n    return;\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/development/testInput.ts?");

/***/ }),

/***/ "./app/htmlElements.ts":
/*!*****************************!*\
  !*** ./app/htmlElements.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scheduleDiv: () => (/* binding */ scheduleDiv),\n/* harmony export */   taskListDiv: () => (/* binding */ taskListDiv)\n/* harmony export */ });\nfunction requireElementById(id) {\r\n    const element = document.getElementById(id);\r\n    if (!element) {\r\n        throw new Error(`Could not find element with id ${id}`);\r\n    }\r\n    return element;\r\n}\r\n// function getButton(id: string): HTMLButtonElement {\r\n// \treturn requireElementById(id) as HTMLButtonElement;\r\n// }\r\nfunction getDiv(id) {\r\n    return requireElementById(id);\r\n}\r\n// function getInput(id: string): HTMLInputElement {\r\n// \treturn requireElementById(id) as HTMLInputElement;\r\n// }\r\nconst taskListDiv = {\r\n    mustDo: getDiv('mustDo'),\r\n    toDo: getDiv('toDo')\r\n};\r\nconst scheduleDiv = getDiv('schedule');\r\n\n\n//# sourceURL=webpack://alttp/./app/htmlElements.ts?");

/***/ }),

/***/ "./app/schedule.ts":
/*!*************************!*\
  !*** ./app/schedule.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scheduleTasks: () => (/* binding */ scheduleTasks)\n/* harmony export */ });\n/* harmony import */ var app_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/date */ \"./app/date.ts\");\n\r\n// so schedule task just pushes tasks to schedule\r\n// Let's think about validness after we do the MVP\r\nfunction scheduleTasks(schedule, dataBase, period) {\r\n    const now = (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getCurrentUTCTime)();\r\n    const windowEnd = now + period;\r\n    const taskDB = dataBase.content;\r\n    for (let i = 0; i < taskDB.length; i++) {\r\n        const task = taskDB[i];\r\n        if (!task.components && task.due && task.duration) {\r\n            if (task.repeatFreq && task.start) {\r\n                // initialize repeat variables\r\n                let freq = 0;\r\n                let startDueDiff = task.due - task.start;\r\n                // get each value\r\n                for (let i = 0; i < task.repeatFreq.length; i++) {\r\n                    freq += task.repeatFreq[i];\r\n                }\r\n                if (startDueDiff < 0) {\r\n                    startDueDiff = task.due + task.start;\r\n                }\r\n                const initialDue = now + freq - ((now - task.due) % freq);\r\n                for (let i = initialDue; i < windowEnd; i += freq) {\r\n                    const date = new Date(i * 1000 * 60);\r\n                    const newRepeatedTask = {\r\n                        title: task.title,\r\n                        subjects: task.subjects,\r\n                        priority: task.priority,\r\n                        owner: task.owner,\r\n                        description: task.description,\r\n                        start: i - startDueDiff + date.getTimezoneOffset(),\r\n                        due: i + date.getTimezoneOffset(),\r\n                        duration: task.duration,\r\n                        dependancy: task.dependancy,\r\n                    };\r\n                    schedule.content.push(newRepeatedTask);\r\n                }\r\n            }\r\n            else if ((windowEnd > task.due) && (now < task.due)) {\r\n                const newTask = {\r\n                    title: task.title,\r\n                    subjects: task.subjects,\r\n                    priority: task.priority,\r\n                    owner: task.owner,\r\n                    description: task.description,\r\n                    start: task.start,\r\n                    due: task.due,\r\n                    duration: task.duration,\r\n                    dependancy: task.dependancy,\r\n                };\r\n                schedule.content.push(newTask);\r\n            }\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/schedule.ts?");

/***/ }),

/***/ "./app/taskHandler.ts":
/*!****************************!*\
  !*** ./app/taskHandler.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskHandler: () => (/* binding */ taskHandler)\n/* harmony export */ });\n/* harmony import */ var app_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/date */ \"./app/date.ts\");\n\r\nfunction taskHandler(schedule, taskList) {\r\n    const now = (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getCurrentUTCTime)();\r\n    for (let i = 0; i < schedule.content.length; i++) {\r\n        const task = schedule.content[i];\r\n        let timeRemaining = task.due - now;\r\n        let availableTime = timeRemaining;\r\n        // push to task list for tasks that don't have starts\r\n        if (!task.start) {\r\n            for (let j = 0; j < schedule.content.length; j++) {\r\n                if (schedule.content[j].due <= task.due) {\r\n                    availableTime -= schedule.content[j].duration;\r\n                }\r\n            }\r\n            if (availableTime < 180 || timeRemaining < 1440) {\r\n                taskList.mustDo.push(task);\r\n            }\r\n            else if (availableTime < 1440 || timeRemaining < 10080) {\r\n                taskList.toDo.push(task);\r\n            }\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/taskHandler.ts?");

/***/ }),

/***/ "./app/ui.ts":
/*!*******************!*\
  !*** ./app/ui.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks)\n/* harmony export */ });\nfunction displayTasks(list, id) {\r\n    let listHTML = '';\r\n    for (let i = 0; i < list.length; i++) {\r\n        listHTML += '<div>' + list[i].title + '</div>';\r\n    }\r\n    id.innerHTML = listHTML;\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/ui.ts?");

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