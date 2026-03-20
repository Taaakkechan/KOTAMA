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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var app_development_testInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/development/testInput */ \"./app/development/testInput.ts\");\n/* harmony import */ var app_taskHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/taskHandler */ \"./app/taskHandler.ts\");\n/* harmony import */ var app_schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/schedule */ \"./app/schedule.ts\");\n\r\n// import { DataBase } from 'app/dataBase';\r\n\r\n\r\nlet dataBase = {\r\n    content: [],\r\n    subjects: []\r\n};\r\nlet schedule = {\r\n    content: []\r\n};\r\nlet taskList = {\r\n    mustDo: [],\r\n    toDo: []\r\n};\r\n(0,app_development_testInput__WEBPACK_IMPORTED_MODULE_0__.testInputs)(dataBase);\r\n(0,app_schedule__WEBPACK_IMPORTED_MODULE_2__.scheduleTasks)(schedule, dataBase, 1440 * 30);\r\n(0,app_taskHandler__WEBPACK_IMPORTED_MODULE_1__.taskHandler)(schedule, taskList);\r\nconsole.log(dataBase.content);\r\nconsole.log(schedule.content);\r\nconsole.log(taskList.mustDo);\r\nconsole.log(taskList.toDo);\r\nfunction update() {\r\n    return;\r\n}\r\nsetInterval(update, 1000);\r\n\n\n//# sourceURL=webpack://alttp/./app/client.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   testInputs: () => (/* binding */ testInputs)\n/* harmony export */ });\n/* harmony import */ var app_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/date */ \"./app/date.ts\");\n\r\n// import { isValid } from 'app/task';\r\n// This file is to make testing easier for the dev\r\n// pushes a bunch of different tasks to the database\r\n// as of current have the function needed for all the process\r\n// but plan to move them to the right location in the future\r\nfunction testInputs(taskDB) {\r\n    // title: string\r\n    // subjects: string[]\r\n    // priority: number\r\n    // owner: string\r\n    // description: string\r\n    // start: number\r\n    // due: number\r\n    // duration: number\r\n    // repeatFreq: number[]\r\n    // repeatStart: number\r\n    // repeatEnd: number\r\n    // dependancy: Task\r\n    // components: Task[]\r\n    let phsxLab = {\r\n        title: 'PHSX 210 Lab',\r\n        priority: 2,\r\n        start: 7200 + 780,\r\n        due: 7200 + 890,\r\n        duration: 110,\r\n        repeatFreq: [10080],\r\n        owner: 'user',\r\n        subjects: ['KU']\r\n    };\r\n    let sleep = {\r\n        title: 'sleep',\r\n        priority: 2,\r\n        start: 1260,\r\n        due: 360,\r\n        duration: 450,\r\n        repeatFreq: [1440],\r\n        owner: 'user',\r\n        subjects: ['userBody']\r\n    };\r\n    let testTopics = {\r\n        title: \"TestTopics\",\r\n        priority: 2,\r\n        due: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getUTCTimeStamp)('2026-03-21T12:00'),\r\n        duration: 20,\r\n        owner: \"user\",\r\n        subjects: [\"KU\"]\r\n    };\r\n    let review = {\r\n        title: \"Review\",\r\n        priority: 2,\r\n        due: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getUTCTimeStamp)('2026-03-21T12:00'),\r\n        duration: 30,\r\n        owner: \"user\",\r\n        subjects: [\"KU\"]\r\n    };\r\n    let practiceTest = {\r\n        title: \"Practice Test\",\r\n        priority: 2,\r\n        due: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getUTCTimeStamp)('2026-03-21T12:00'),\r\n        duration: 60,\r\n        owner: \"user\",\r\n        subjects: [\"KU\"]\r\n    };\r\n    let Exam1 = {\r\n        title: \"Exam1\",\r\n        priority: 2,\r\n        due: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getUTCTimeStamp)('2026-03-21T12:00'),\r\n        components: [testTopics, review, practiceTest],\r\n        owner: \"user\",\r\n        subjects: [\"KU\"]\r\n    };\r\n    let randomEvent = {\r\n        title: 'Random Event',\r\n        priority: 2,\r\n        start: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getUTCTimeStamp)('2026-03-20T16:00'),\r\n        due: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getUTCTimeStamp)('2026-03-20T19:00'),\r\n        duration: 100,\r\n        owner: 'user',\r\n        subjects: ['randomGuy']\r\n    };\r\n    taskDB.content.push(phsxLab);\r\n    taskDB.content.push(sleep);\r\n    taskDB.content.push(testTopics);\r\n    taskDB.content.push(review);\r\n    taskDB.content.push(practiceTest);\r\n    taskDB.content.push(Exam1);\r\n    taskDB.content.push(randomEvent);\r\n}\r\n// end\r\n// let task15: Task = {\r\n// \t\ttitle: 'Random Event2',\r\n// \t\tpriority: 2,\r\n// \t\tstart: getTimeStamp('2026-03-11T17:00'),\r\n// \t\tdue: getTimeStamp('2026-03-11T20:00'),\r\n// \t\tduration: 140,\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['randomGuy']\r\n// \t}\r\n// \tlet task14: Task = {\r\n// \t\ttitle: 'Random Event',\r\n// \t\tpriority: 2,\r\n// \t\tstart: getTimeStamp('2026-03-11T16:00'),\r\n// \t\tdue: getTimeStamp('2026-03-11T19:00'),\r\n// \t\tduration: 100,\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['randomGuy']\r\n// \t}\r\n// \tlet task13: Task = {\r\n// \t\ttitle: 'PHSX 210 Lab',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 7200 + 780,\r\n// \t\tdue: 7200 + 890,\r\n// \t\tduration: 110,\r\n// \t\trepeatFreq: [10080],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['KU']\r\n// \t}\r\n// \tlet task12: Task = {\r\n// \t\ttitle: 'EECS 210 Lab',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 8640 + 990,\r\n// \t\tdue: 8640 + 1110,\r\n// \t\tduration: 120,\r\n// \t\trepeatFreq: [10080],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['KU']\r\n// \t}\r\n// \tlet task11: Task = {\r\n// \t\ttitle: 'ORCH 400 Lab',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 930,\r\n// \t\tdue: 1100,\r\n// \t\tduration: 170,\r\n// \t\trepeatFreq: [7200, 2880],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['KU']\r\n// \t}\r\n// \tlet task10: Task = {\r\n// \t\ttitle: 'EECS 268 Lecture',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 1440 + 600,\r\n// \t\tdue: 1440 + 650,\r\n// \t\tduration: 50,\r\n// \t\trepeatFreq: [4320, 2880, 2880],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['KU']\r\n// \t}\r\n// \tlet task9: Task = {\r\n// \t\ttitle: 'dinner',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 1080,\r\n// \t\tdue: 1260,\r\n// \t\tduration: 40,\r\n// \t\trepeatFreq: [1440],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['userBody']\r\n// \t}\r\n// \tlet task8: Task = {\r\n// \t\ttitle: 'lunch',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 660,\r\n// \t\tdue: 840,\r\n// \t\tduration: 40,\r\n// \t\trepeatFreq: [1440],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['userBody']\r\n// \t}\r\n// \tlet task7: Task = {\r\n// \t\ttitle: 'breakfast',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 420,\r\n// \t\tdue: 600,\r\n// \t\tduration: 40,\r\n// \t\trepeatFreq: [1440],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['userBody']\r\n// \t}\r\n// \tlet task1: Task = {\r\n// \t\ttitle: \"HW1\",\r\n// \t\tdue: getTimeStamp('2026-04-01'),\r\n// \t\tpriority: 2,\r\n// \t\tduration: 60,\r\n// \t\towner: \"user\",\r\n// \t\tsubjects: [\"KU\"]\r\n// \t}\r\n// \tlet task2: Task = {\r\n// \t\ttitle: \"TestTopics\",\r\n// \t\tpriority: 2,\r\n// \t\tduration: 20,\r\n// \t\towner: \"user\",\r\n// \t\tsubjects: [\"KU\"]\r\n// \t}\r\n// \tlet task3: Task = {\r\n// \t\ttitle: \"Review\",\r\n// \t\tpriority: 2,\r\n// \t\tduration: 30,\r\n// \t\towner: \"user\",\r\n// \t\tsubjects: [\"KU\"]\r\n// \t}\r\n// \tlet task4: Task = {\r\n// \t\ttitle: \"Practice Test\",\r\n// \t\tpriority: 2,\r\n// \t\tduration: 60,\r\n// \t\towner: \"user\",\r\n// \t\tsubjects: [\"KU\"]\r\n// \t}\r\n// \tlet task5: Task = {\r\n// \t\ttitle: \"Exam1\",\r\n// \t\tpriority: 2,\r\n// \t\tdue: getTimeStamp('2026-03-21T12:00'),\r\n// \t\tcomponents: [task2, task3, task4],\r\n// \t\towner: \"user\",\r\n// \t\tsubjects: [\"KU\"]\r\n// \t}\r\n// \ttask5.duration = getTotalDuration(task5);\r\n// \ttaskDB.content.push(task1);\r\n// \ttaskDB.content.push(task2);\r\n// \ttaskDB.content.push(task3);\r\n// \ttaskDB.content.push(task4);\r\n// \ttaskDB.content.push(task5);\r\n// \ttaskDB.content.push(task6);\r\n// \ttaskDB.content.push(task7);\r\n// \ttaskDB.content.push(task8);\r\n// \ttaskDB.content.push(task9);\r\n// \ttaskDB.content.push(task10);\r\n// \ttaskDB.content.push(task11);\r\n// \ttaskDB.content.push(task12);\r\n// \ttaskDB.content.push(task13);\r\n// \ttaskDB.content.push(task14);\r\n// \ttaskDB.content.push(task15);\r\n// \tconsole.log(isValid(task14, task15));\r\n\n\n//# sourceURL=webpack://alttp/./app/development/testInput.ts?");

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