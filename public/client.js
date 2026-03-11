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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var app_development_testInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/development/testInput */ \"./app/development/testInput.ts\");\n\r\nlet taskDB = {\r\n    content: []\r\n};\r\n(0,app_development_testInput__WEBPACK_IMPORTED_MODULE_0__.testInputs)(taskDB);\r\nconsole.log(taskDB);\r\nconsole.log(taskDB.content[0].title);\r\nfunction update() {\r\n    return;\r\n}\r\nsetInterval(update, 1000);\r\n\n\n//# sourceURL=webpack://alttp/./app/client.ts?");

/***/ }),

/***/ "./app/date.ts":
/*!*********************!*\
  !*** ./app/date.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTimeStamp: () => (/* binding */ getTimeStamp)\n/* harmony export */ });\nfunction getTimeStamp(date) {\r\n    //returns timestamp down to the minute\r\n    return Date.parse(date) / (1000 * 60);\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/date.ts?");

/***/ }),

/***/ "./app/development/testInput.ts":
/*!**************************************!*\
  !*** ./app/development/testInput.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   testInputs: () => (/* binding */ testInputs)\n/* harmony export */ });\n/* harmony import */ var app_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/date */ \"./app/date.ts\");\n/* harmony import */ var app_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/task */ \"./app/task.ts\");\n\r\n\r\n// import { createNewTask } from 'app/task'\r\n// This file is to make testing easier for the dev\r\n// pushes a bunch of different tasks to the database\r\n// as of current have the function needed for all the process\r\n// but plan to move them to the right location in the future\r\nfunction testInputs(taskDB) {\r\n    // let task1: Task = {\r\n    // \ttitle: string,\r\n    // \tdescription: string,\r\n    // \tstart: number,\r\n    // \tdue: number,\r\n    // \tduration: number,\r\n    // \trepeatFreq: number,\r\n    // \tdependancy: Task,\r\n    // \tcomponents: Task[],\r\n    // \towner: string,\r\n    // \tpeopleConcerned: string[]\r\n    // }\r\n    let task15 = {\r\n        title: 'Random Event2',\r\n        start: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getTimeStamp)('2026-03-11T16:00'),\r\n        due: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getTimeStamp)('2026-03-11T19:00'),\r\n        duration: 100,\r\n        owner: 'user',\r\n        peopleConcerned: ['randomGuy']\r\n    };\r\n    let task14 = {\r\n        title: 'Random Event',\r\n        start: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getTimeStamp)('2026-03-11T16:00'),\r\n        due: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getTimeStamp)('2026-03-11T19:00'),\r\n        duration: 100,\r\n        owner: 'user',\r\n        peopleConcerned: ['randomGuy']\r\n    };\r\n    let task13 = {\r\n        title: 'PHSX 210 Lab',\r\n        start: 7200 + 780,\r\n        due: 7200 + 890,\r\n        duration: 110,\r\n        repeatFreq: [10080],\r\n        owner: 'user',\r\n        peopleConcerned: ['KU']\r\n    };\r\n    let task12 = {\r\n        title: 'EECS 210 Lab',\r\n        start: 8640 + 990,\r\n        due: 8640 + 1110,\r\n        duration: 120,\r\n        repeatFreq: [10080],\r\n        owner: 'user',\r\n        peopleConcerned: ['KU']\r\n    };\r\n    let task11 = {\r\n        title: 'ORCH 400 Lab',\r\n        start: 930,\r\n        due: 1100,\r\n        duration: 170,\r\n        repeatFreq: [7200, 2880],\r\n        owner: 'user',\r\n        peopleConcerned: ['KU']\r\n    };\r\n    let task10 = {\r\n        title: 'EECS 268 Lecture',\r\n        start: 1440 + 600,\r\n        due: 1440 + 650,\r\n        duration: 50,\r\n        repeatFreq: [4320, 2880, 2880],\r\n        owner: 'user',\r\n        peopleConcerned: ['KU']\r\n    };\r\n    let task9 = {\r\n        title: 'dinner',\r\n        start: 1080,\r\n        due: 1260,\r\n        duration: 40,\r\n        repeatFreq: [1440],\r\n        owner: 'user',\r\n        peopleConcerned: ['userBody']\r\n    };\r\n    let task8 = {\r\n        title: 'lunch',\r\n        start: 660,\r\n        due: 840,\r\n        duration: 40,\r\n        repeatFreq: [1440],\r\n        owner: 'user',\r\n        peopleConcerned: ['userBody']\r\n    };\r\n    let task7 = {\r\n        title: 'breakfast',\r\n        start: 420,\r\n        due: 600,\r\n        duration: 40,\r\n        repeatFreq: [1440],\r\n        owner: 'user',\r\n        peopleConcerned: ['userBody']\r\n    };\r\n    let task6 = {\r\n        title: 'sleep',\r\n        start: 1260,\r\n        due: 360,\r\n        duration: 450,\r\n        repeatFreq: [1440],\r\n        owner: 'user',\r\n        peopleConcerned: ['userBody']\r\n    };\r\n    let task1 = {\r\n        title: \"HW1\",\r\n        due: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getTimeStamp)('2026-04-01'),\r\n        duration: 60,\r\n        owner: \"user\",\r\n        peopleConcerned: [\"KU\"]\r\n    };\r\n    let task2 = {\r\n        title: \"TestTopics\",\r\n        duration: 20,\r\n        owner: \"user\",\r\n    };\r\n    let task3 = {\r\n        title: \"Review\",\r\n        duration: 30,\r\n        owner: \"user\",\r\n    };\r\n    let task4 = {\r\n        title: \"Practice Test\",\r\n        duration: 60,\r\n        owner: \"user\",\r\n    };\r\n    let task5 = {\r\n        title: \"Exam1\",\r\n        due: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getTimeStamp)('2026-04-05'),\r\n        components: [task2, task3, task4],\r\n        owner: \"user\",\r\n        peopleConcerned: [\"KU\"]\r\n    };\r\n    task5.duration = (0,app_task__WEBPACK_IMPORTED_MODULE_1__.getTotalDuration)(task5);\r\n    taskDB.content.push(task1);\r\n    taskDB.content.push(task2);\r\n    taskDB.content.push(task3);\r\n    taskDB.content.push(task4);\r\n    taskDB.content.push(task5);\r\n    taskDB.content.push(task6);\r\n    taskDB.content.push(task7);\r\n    taskDB.content.push(task8);\r\n    taskDB.content.push(task9);\r\n    taskDB.content.push(task10);\r\n    taskDB.content.push(task11);\r\n    taskDB.content.push(task12);\r\n    taskDB.content.push(task13);\r\n    taskDB.content.push(task14);\r\n    taskDB.content.push(task15);\r\n    function scheduleTask(task, schedule) {\r\n        if (schedule.content.length > 1) {\r\n            for (let i = 0; i > schedule.content.length; i++) {\r\n                return;\r\n            }\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/development/testInput.ts?");

/***/ }),

/***/ "./app/task.ts":
/*!*********************!*\
  !*** ./app/task.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTotalDuration: () => (/* binding */ getTotalDuration)\n/* harmony export */ });\nfunction getTotalDuration(task) {\r\n    if (task.components) {\r\n        let duration = 0;\r\n        for (let i = 0; i < task.components.length; i++) {\r\n            if (task.components[i].duration) {\r\n                duration += task.components[i].duration;\r\n            }\r\n            else {\r\n                throw new Error('duration undefined');\r\n            }\r\n        }\r\n        return duration;\r\n    }\r\n    else {\r\n        throw new Error('components undefined');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/task.ts?");

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