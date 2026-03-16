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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var app_development_testInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/development/testInput */ \"./app/development/testInput.ts\");\n\r\nlet dataBase = {\r\n    content: [],\r\n    subjects: []\r\n};\r\n(0,app_development_testInput__WEBPACK_IMPORTED_MODULE_0__.testInputs)(dataBase);\r\nconsole.log(dataBase);\r\nconsole.log(dataBase.content[0].title);\r\nfunction update() {\r\n    return;\r\n}\r\nsetInterval(update, 1000);\r\n\n\n//# sourceURL=webpack://alttp/./app/client.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scheduleTasks: () => (/* binding */ scheduleTasks),\n/* harmony export */   testInputs: () => (/* binding */ testInputs)\n/* harmony export */ });\n/* harmony import */ var app_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/date */ \"./app/date.ts\");\n/* harmony import */ var app_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/task */ \"./app/task.ts\");\n\r\n\r\n// This file is to make testing easier for the dev\r\n// pushes a bunch of different tasks to the database\r\n// as of current have the function needed for all the process\r\n// but plan to move them to the right location in the future\r\n// what do I need to get straitened with repeats with tasks?\r\n// check if it overlaps with other tasks.\r\n// breaking up repeat into repeat start end and adjusted.\r\n// man the more I think about it the more I think I should just make them individual tasks. I mean what's the point?\r\n// realistically how many tasks in my schedule will I have? 5-10 everyday I guess I can adjust the window to however long I want to.\r\n// how about looking for conflicts?\r\n// function isValid(tasks: Task[]): boolean {\r\n// \tif (task1.due && task2.due && task1.start && task2.start && task1.duration && task2.duration) {\r\n// \t\tif (isOverlapping(task1, task2)) {\r\n// \t\t\tconst totalTime = Math.max(task1.due, task2.due) - Math.min(task1.start, task2.start);\r\n// \t\t\tif (totalTime < (task1.duration + task2.duration)) {\r\n// \t\t\t\treturn false;\r\n// \t\t\t}\r\n// \t\t}\r\n// \t\treturn true;\r\n// \t} else {throw new Error('task due/start/duration undefined');}\r\n// }\r\nfunction scheduleTasks(dataBase, schedule) {\r\n    //repeat bois\r\n    const taskDB = dataBase.content;\r\n    for (let i = 0; i < taskDB.length; i++) {\r\n        const task = taskDB[i];\r\n        if (!task.components && task.due && task.duration) {\r\n            if (task.repeatFreq) {\r\n                if ((0,app_task__WEBPACK_IMPORTED_MODULE_1__.isValid)(task, schedule)) {\r\n                    schedule.content.push(task);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    //event bois\r\n    for (let i = 0; i < taskDB.length; i++) {\r\n        const task = taskDB[i];\r\n        if (!task.components && task.due && task.duration && task.start) {\r\n            if ((0,app_task__WEBPACK_IMPORTED_MODULE_1__.isValid)(task, schedule)) {\r\n                schedule.content.push(task);\r\n            }\r\n        }\r\n    }\r\n    //normy bois(also chanllenging)\r\n    for (let i = 0; i < taskDB.length; i++) {\r\n        const task = taskDB[i];\r\n        if (!task.components && task.due && task.duration) {\r\n            if ((0,app_task__WEBPACK_IMPORTED_MODULE_1__.isValid)(task, schedule)) {\r\n                schedule.content.push(task);\r\n            }\r\n        }\r\n    }\r\n    // \t// don't schedule tasks with components\r\n    // \t// what about tasks with dependancy?\r\n    // \t// check if task has duration and due\r\n    // \t// then schedule repeat\r\n    // \t// then schedule with start\r\n    // \t// then schedule the rest\r\n    // \t// when schedule check if it is valid task scheduling\r\n    // \t\t// first find all tasks that overlap with the task and then see if it's valid\r\n    // \t// if not, bring up reschedule for the task with the smaller priority\r\n    // \t// or bring up a conflict solve request\r\n    // \t// just a reminder this function is baiscally just a filter\r\n    // \t// also, scheduling things without start is going to be challenging.\r\n}\r\nfunction testInputs(taskDB) {\r\n    let task14 = {\r\n        title: 'Random Event',\r\n        priority: 2,\r\n        start: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getTimeStamp)('2026-03-11T16:00'),\r\n        due: (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getTimeStamp)('2026-03-11T19:00'),\r\n        duration: 100,\r\n        owner: 'user',\r\n        subjects: ['randomGuy']\r\n    };\r\n    taskDB.content.push(task14);\r\n}\r\n// let task15: Task = {\r\n// \t\ttitle: 'Random Event2',\r\n// \t\tpriority: 2,\r\n// \t\tstart: getTimeStamp('2026-03-11T17:00'),\r\n// \t\tdue: getTimeStamp('2026-03-11T20:00'),\r\n// \t\tduration: 140,\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['randomGuy']\r\n// \t}\r\n// \tlet task14: Task = {\r\n// \t\ttitle: 'Random Event',\r\n// \t\tpriority: 2,\r\n// \t\tstart: getTimeStamp('2026-03-11T16:00'),\r\n// \t\tdue: getTimeStamp('2026-03-11T19:00'),\r\n// \t\tduration: 100,\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['randomGuy']\r\n// \t}\r\n// \tlet task13: Task = {\r\n// \t\ttitle: 'PHSX 210 Lab',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 7200 + 780,\r\n// \t\tdue: 7200 + 890,\r\n// \t\tduration: 110,\r\n// \t\trepeatFreq: [10080],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['KU']\r\n// \t}\r\n// \tlet task12: Task = {\r\n// \t\ttitle: 'EECS 210 Lab',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 8640 + 990,\r\n// \t\tdue: 8640 + 1110,\r\n// \t\tduration: 120,\r\n// \t\trepeatFreq: [10080],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['KU']\r\n// \t}\r\n// \tlet task11: Task = {\r\n// \t\ttitle: 'ORCH 400 Lab',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 930,\r\n// \t\tdue: 1100,\r\n// \t\tduration: 170,\r\n// \t\trepeatFreq: [7200, 2880],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['KU']\r\n// \t}\r\n// \tlet task10: Task = {\r\n// \t\ttitle: 'EECS 268 Lecture',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 1440 + 600,\r\n// \t\tdue: 1440 + 650,\r\n// \t\tduration: 50,\r\n// \t\trepeatFreq: [4320, 2880, 2880],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['KU']\r\n// \t}\r\n// \tlet task9: Task = {\r\n// \t\ttitle: 'dinner',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 1080,\r\n// \t\tdue: 1260,\r\n// \t\tduration: 40,\r\n// \t\trepeatFreq: [1440],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['userBody']\r\n// \t}\r\n// \tlet task8: Task = {\r\n// \t\ttitle: 'lunch',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 660,\r\n// \t\tdue: 840,\r\n// \t\tduration: 40,\r\n// \t\trepeatFreq: [1440],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['userBody']\r\n// \t}\r\n// \tlet task7: Task = {\r\n// \t\ttitle: 'breakfast',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 420,\r\n// \t\tdue: 600,\r\n// \t\tduration: 40,\r\n// \t\trepeatFreq: [1440],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['userBody']\r\n// \t}\r\n// \tlet task6: Task = {\r\n// \t\ttitle: 'sleep',\r\n// \t\tpriority: 2,\r\n// \t\tstart: 1260,\r\n// \t\tdue: 360,\r\n// \t\tduration: 450,\r\n// \t\trepeatFreq: [1440],\r\n// \t\towner: 'user',\r\n// \t\tsubjects: ['userBody']\r\n// \t}\r\n// \tlet task1: Task = {\r\n// \t\ttitle: \"HW1\",\r\n// \t\tdue: getTimeStamp('2026-04-01'),\r\n// \t\tpriority: 2,\r\n// \t\tduration: 60,\r\n// \t\towner: \"user\",\r\n// \t\tsubjects: [\"KU\"]\r\n// \t}\r\n// \tlet task2: Task = {\r\n// \t\ttitle: \"TestTopics\",\r\n// \t\tpriority: 2,\r\n// \t\tduration: 20,\r\n// \t\towner: \"user\",\r\n// \t\tsubjects: [\"KU\"]\r\n// \t}\r\n// \tlet task3: Task = {\r\n// \t\ttitle: \"Review\",\r\n// \t\tpriority: 2,\r\n// \t\tduration: 30,\r\n// \t\towner: \"user\",\r\n// \t\tsubjects: [\"KU\"]\r\n// \t}\r\n// \tlet task4: Task = {\r\n// \t\ttitle: \"Practice Test\",\r\n// \t\tpriority: 2,\r\n// \t\tduration: 60,\r\n// \t\towner: \"user\",\r\n// \t\tsubjects: [\"KU\"]\r\n// \t}\r\n// \tlet task5: Task = {\r\n// \t\ttitle: \"Exam1\",\r\n// \t\tpriority: 2,\r\n// \t\tdue: getTimeStamp('2026-04-05'),\r\n// \t\tcomponents: [task2, task3, task4],\r\n// \t\towner: \"user\",\r\n// \t\tsubjects: [\"KU\"]\r\n// \t}\r\n// \ttask5.duration = getTotalDuration(task5);\r\n// \ttaskDB.content.push(task1);\r\n// \ttaskDB.content.push(task2);\r\n// \ttaskDB.content.push(task3);\r\n// \ttaskDB.content.push(task4);\r\n// \ttaskDB.content.push(task5);\r\n// \ttaskDB.content.push(task6);\r\n// \ttaskDB.content.push(task7);\r\n// \ttaskDB.content.push(task8);\r\n// \ttaskDB.content.push(task9);\r\n// \ttaskDB.content.push(task10);\r\n// \ttaskDB.content.push(task11);\r\n// \ttaskDB.content.push(task12);\r\n// \ttaskDB.content.push(task13);\r\n// \ttaskDB.content.push(task14);\r\n// \ttaskDB.content.push(task15);\r\n// \tconsole.log(isValid(task14, task15));\r\n\n\n//# sourceURL=webpack://alttp/./app/development/testInput.ts?");

/***/ }),

/***/ "./app/task.ts":
/*!*********************!*\
  !*** ./app/task.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTotalDuration: () => (/* binding */ getTotalDuration),\n/* harmony export */   isValid: () => (/* binding */ isValid)\n/* harmony export */ });\nfunction getTotalDuration(tasks) {\r\n    let duration = 0;\r\n    for (let i = 0; i < tasks.length; i++) {\r\n        if (tasks[i].duration) {\r\n            duration += tasks[i].duration;\r\n        }\r\n        else {\r\n            throw new Error('duration undefined');\r\n        }\r\n    }\r\n    return duration;\r\n}\r\n// function isOverlapping(task1: Task, task2: Task): boolean {\r\n// \tif (task1.due && task2.due && task1.start && task2.start) {\r\n// \t\tif (!((task1.start > task2.due) || (task2.start > task1.due))) {\r\n// \t\t\treturn true;\r\n// \t\t} \r\n// \t\treturn false;\r\n// \t} else {throw new Error('task due/start undefined');}\r\n// }\r\nfunction findOverlappingTasks(tasks, schedule) {\r\n    // get the start and end of the tasks\r\n    if (tasks[0].start && tasks[0].due) {\r\n        let startTask = tasks[0];\r\n        let dueTask = tasks[0];\r\n        for (let i = 1; i < tasks.length; i++) {\r\n            if (tasks[i].start && tasks[i].due) {\r\n                if (tasks[i].start < startTask.start) {\r\n                    startTask = tasks[i];\r\n                }\r\n                if (tasks[i].due > dueTask.due) {\r\n                    dueTask = tasks[i];\r\n                }\r\n            }\r\n        }\r\n        // compare the start and due with all the other tasks in the schedule\r\n        const taskSchedule = schedule.content;\r\n        for (let i = 0; i < taskSchedule.length; i++) {\r\n            if (taskSchedule[i].start && taskSchedule[i].due) {\r\n                if (!((dueTask.due < taskSchedule[i].start) || (startTask.start > taskSchedule[i].due))) {\r\n                    tasks.push(taskSchedule[i]);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    else {\r\n        throw new Error('initialTask start/due undefined');\r\n    }\r\n    return tasks;\r\n}\r\nfunction isValid(task, schedule) {\r\n    // finds all the chained overlapping tasks.\r\n    // maybe able to include it in the findOVerlappingTasks function\r\n    let tasks = [task];\r\n    let initialTasks = tasks;\r\n    let updatedTasks = findOverlappingTasks(initialTasks, schedule);\r\n    while (initialTasks.length != updatedTasks.length) {\r\n        initialTasks = updatedTasks;\r\n        updatedTasks = findOverlappingTasks(initialTasks, schedule);\r\n    }\r\n    tasks = updatedTasks;\r\n    // gets the start and due for a group of function again. \r\n    // could separate it into a function (get start/ get end)\r\n    if (tasks[0].start && tasks[0].due) {\r\n        let startTask = tasks[0];\r\n        let dueTask = tasks[0];\r\n        for (let i = 1; i < tasks.length; i++) {\r\n            if (tasks[i].start && tasks[i].due) {\r\n                if (tasks[i].start < startTask.start) {\r\n                    startTask = tasks[i];\r\n                }\r\n                if (tasks[i].due > dueTask.due) {\r\n                    dueTask = tasks[i];\r\n                }\r\n            }\r\n        }\r\n        // actually compare the duration and the window\r\n        const totalDuration = getTotalDuration(tasks);\r\n        if (startTask.due - startTask.start > totalDuration) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    }\r\n    else {\r\n        throw new Error('initial Task start/due undefined');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/task.ts?");

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