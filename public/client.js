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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var app_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/task */ \"./app/task.ts\");\n// import { testInputs } from 'app/development/testInput';\r\n// import { DataBase } from 'app/dataBase';\r\n// import { taskHandler } from 'app/taskHandler';\r\n// import { scheduleTasks } from 'app/schedule';\r\n// import { displayTasks } from 'app/ui';\r\n// import { taskListDiv, scheduleDiv } from 'app/htmlElements';\r\n// import { getCurrentTime, numberToDateString, dateStringToNumber } from 'app/date';\r\n\r\nlet dataBase = {\r\n    content: [],\r\n    subjects: []\r\n};\r\n(0,app_task__WEBPACK_IMPORTED_MODULE_0__.newTask)();\r\nlet schedule = {\r\n    content: []\r\n};\r\nlet taskList = {\r\n    mustDo: [],\r\n    toDo: []\r\n};\r\n// const now = getCurrentTime()\r\n// console.log(now)\r\n// console.log(numberToDateString(now));\r\n// console.log(dateStringToNumber(numberToDateString(now)));\r\n// console.log(numberToDateString(dateStringToNumber(numberToDateString(now)));\r\nfunction update() {\r\n    return;\r\n}\r\nsetInterval(update, 1000);\r\n\n\n//# sourceURL=webpack://alttp/./app/client.ts?");

/***/ }),

/***/ "./app/date.ts":
/*!*********************!*\
  !*** ./app/date.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dateStringToNumber: () => (/* binding */ dateStringToNumber),\n/* harmony export */   getCurrentTime: () => (/* binding */ getCurrentTime),\n/* harmony export */   numberToDateString: () => (/* binding */ numberToDateString)\n/* harmony export */ });\n// store things in terms of YYYY-MM-DDTHH:MM I guess?\r\n// probably not supporting time zones. Only care about what time the user is living in\r\n// so I need to define getting the current time (of user), and then converting string to number and number to string\r\n// when getting time for the user, should I define both string and number, or just number?\r\nfunction getTimeOffset() {\r\n    const date = new Date(Date.now());\r\n    return date.getTimezoneOffset();\r\n}\r\nfunction getCurrentTime() {\r\n    return Math.floor(Date.now() / (1000 * 60)) - getTimeOffset();\r\n}\r\nfunction numberToDateString(timeStamp) {\r\n    const date = new Date(timeStamp * 1000 * 60);\r\n    return date.toISOString().slice(0, -8);\r\n}\r\nfunction dateStringToNumber(dateTime) {\r\n    const date = new Date();\r\n    return Date.parse(dateTime) / (1000 * 60) - getTimeOffset();\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/date.ts?");

/***/ }),

/***/ "./app/htmlElements.ts":
/*!*****************************!*\
  !*** ./app/htmlElements.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskDBDiv: () => (/* binding */ taskDBDiv),\n/* harmony export */   taskEditWindow: () => (/* binding */ taskEditWindow),\n/* harmony export */   taskEditWindowDivs: () => (/* binding */ taskEditWindowDivs),\n/* harmony export */   taskEditWindowInputs: () => (/* binding */ taskEditWindowInputs)\n/* harmony export */ });\nfunction requireElementById(id) {\r\n    const element = document.getElementById(id);\r\n    if (!element) {\r\n        throw new Error(`Could not find element with id ${id}`);\r\n    }\r\n    return element;\r\n}\r\n// function getButton(id: string): HTMLButtonElement {\r\n// \treturn requireElementById(id) as HTMLButtonElement;\r\n// }\r\nfunction getDiv(id) {\r\n    return requireElementById(id);\r\n}\r\nfunction getInput(id) {\r\n    return requireElementById(id);\r\n}\r\nconst taskDBDiv = getDiv('taskDBList');\r\n// export const taskListDiv = {\r\n// \tmustDo: getDiv('mustDo'),\r\n// \ttoDo: getDiv('toDo')\r\n// }\r\nconst taskEditWindow = getInput('taskEditWindow');\r\nconst taskEditWindowDivs = {\r\n    schedule: getDiv('taskEditWindow-schedule'),\r\n    repeat: getDiv('taskEditWindow-repeat'),\r\n    dependancyList: getDiv('taskEditWindow-dependancyList'),\r\n    componentList: getDiv('taskEditWindow-componentList'),\r\n    subjectList: getDiv('taskEditWindow-subjectList'),\r\n    ownerList: getDiv('taskEditWindow-ownerList'),\r\n};\r\nconst taskEditWindowInputs = {\r\n    title: getInput('taskEditWindow-taskTitle'),\r\n    isDone: getInput('taskEditWindow-isTaskDone'),\r\n    isEvent: getInput('taskEditWindow-isEvent'),\r\n    isSchedule: getInput('taskEditWindow-isSchedule'),\r\n    isPending: getInput('taskEditWindow-isPending'),\r\n    isNone: getInput('taskEditWindow-isNone'),\r\n    start: getInput('taskEditWindow-start'),\r\n    due: getInput('taskEditWindow-due'),\r\n    isRepeating: getInput('taskEditWindow-isRepeating'),\r\n    repeatFreq: getInput('taskEditWindow-repeatFreq'),\r\n    repeatStart: getInput('taskEditWindow-repeatStartDate'),\r\n    isRepeatEnd: getInput('taskEditWindow-isRepeatEnd'),\r\n    repeatEnd: getInput('taskEditWindow-repeatEndDate'),\r\n    duration: getInput('taskEditWindow-duration'),\r\n    priority: getInput('taskEditWindow-priority'),\r\n    description: getInput('taskEditWindow-description')\r\n};\r\n// export const scheduleDiv = getDiv('schedule');\r\n\n\n//# sourceURL=webpack://alttp/./app/htmlElements.ts?");

/***/ }),

/***/ "./app/task.ts":
/*!*********************!*\
  !*** ./app/task.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newTask: () => (/* binding */ newTask)\n/* harmony export */ });\n/* harmony import */ var app_htmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/htmlElements */ \"./app/htmlElements.ts\");\n/* harmony import */ var app_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/date */ \"./app/date.ts\");\n/* harmony import */ var app_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/ui */ \"./app/ui.ts\");\n// export function getTotalDuration(tasks: Task[]): number {\r\n// \tlet duration = 0;\r\n// \tfor (let i = 0; i < tasks.length; i++) {\r\n// \t\tif (tasks[i].duration) {\r\n// \t\t\tduration += tasks[i].duration!;\r\n// \t\t} else {throw new Error('duration undefined');}\r\n// \t}\treturn duration;\r\n// }\r\n// function findOverlappingTasks(tasks: Task[], schedule: Schedule): Task[] {\r\n// \t// get the start and end of the tasks\r\n// \tif (tasks[0].start && tasks[0].due) {\r\n// \t\tlet startTask = tasks[0];\r\n// \t\tlet dueTask = tasks[0];\r\n// \t\tfor (let i=1; i < tasks.length; i++) {\r\n// \t\t\tif (tasks[i].start && tasks[i].due) {\r\n// \t\t\t\tif (tasks[i].start! < startTask.start!) {\r\n// \t\t\t\t\tstartTask = tasks[i];\r\n// \t\t\t\t}\r\n// \t\t\t\tif (tasks[i].due! > dueTask.due!) {\r\n// \t\t\t\t\tdueTask = tasks[i];\r\n// \t\t\t\t}\r\n// \t\t\t}\r\n// \t\t}\r\n// \t\t// compare the start and due with all the other tasks in the schedule\r\n// \t\tconst taskSchedule = schedule.content\r\n// \t\tfor (let i = 0; i < taskSchedule.length; i++) {\r\n// \t\t\tif (taskSchedule[i].start && taskSchedule[i].due) {\r\n// \t\t\t\tif (!((dueTask.due! < taskSchedule[i].start!) || (startTask.start! > taskSchedule[i].due!))) {\r\n// \t\t\t\t\ttasks.push(taskSchedule[i]);\r\n// \t\t\t\t}\r\n// \t\t\t} \r\n// \t\t}\r\n// \t} else {throw new Error('initialTask start/due undefined')}\r\n// \treturn tasks;\r\n// }\r\n// function isValid(task: Task, schedule: Schedule): boolean {\r\n// \t// finds all the chained overlapping tasks.\r\n// \t// maybe able to include it in the findOVerlappingTasks function\r\n// \tlet tasks = [task];\r\n// \tlet initialTasks = tasks;\r\n// \tlet updatedTasks = findOverlappingTasks(initialTasks, schedule);\r\n// \twhile (initialTasks.length != updatedTasks.length) {\r\n// \t\tinitialTasks = updatedTasks;\r\n// \t\tupdatedTasks = findOverlappingTasks(initialTasks, schedule);\r\n// \t}\r\n// \ttasks = updatedTasks;\r\n// \t// gets the start and due for a group of function again. \r\n// \t// could separate it into a function (get start/ get end)\r\n// \tif (tasks[0].start && tasks[0].due) {\r\n// \t\tlet startTask = tasks[0];\r\n// \t\tlet dueTask = tasks[0];\r\n// \t\tfor (let i=1; i < tasks.length; i++) {\r\n// \t\t\tif (tasks[i].start && tasks[i].due) {\r\n// \t\t\t\tif (tasks[i].start! < startTask.start!) {\r\n// \t\t\t\t\tstartTask = tasks[i];\r\n// \t\t\t\t}\r\n// \t\t\t\tif (tasks[i].due! > dueTask.due!) {\r\n// \t\t\t\t\tdueTask = tasks[i];\r\n// \t\t\t\t}\r\n// \t\t\t}\r\n// \t\t}\r\n// \t\t// actually compare the duration and the window\r\n// \t\tconst totalDuration = getTotalDuration(tasks);\r\n// \t\tif (startTask.due! - startTask.start! > totalDuration) {\r\n// \t\t\treturn true;\r\n// \t\t} else {\r\n// \t\t\treturn false;\r\n// \t\t}\r\n// \t} else {throw new Error('initial Task start/due undefined');}\r\n// }\r\n\r\n\r\n\r\nfunction defaultTask() {\r\n    const now = (0,app_date__WEBPACK_IMPORTED_MODULE_1__.getCurrentTime)();\r\n    const times = {\r\n        start: now + 60 - (now % 60),\r\n        due: now + 120 - (now % 60),\r\n        duration: 60\r\n    };\r\n    const newTask = {\r\n        title: '',\r\n        description: '',\r\n        scheduling: times,\r\n        priority: 1,\r\n        dependancies: [],\r\n        components: [],\r\n        subjects: [],\r\n        owner: ['user'],\r\n        completed: false\r\n    };\r\n    return newTask;\r\n}\r\nfunction insertTaskInfo(task) {\r\n    const tewi = app_htmlElements__WEBPACK_IMPORTED_MODULE_0__.taskEditWindowInputs;\r\n    const tewd = app_htmlElements__WEBPACK_IMPORTED_MODULE_0__.taskEditWindowDivs;\r\n    if (task.completed != null) {\r\n        tewi.isDone.checked = task.completed;\r\n    }\r\n    else {\r\n        tewi.isEvent.checked = true;\r\n    }\r\n    tewi.title.value = task.title;\r\n    if (task.scheduling === 'pending') {\r\n        tewi.isPending.checked = true;\r\n    }\r\n    else if (task.scheduling === 'none') {\r\n        tewi.isNone.checked = true;\r\n    }\r\n    else {\r\n        const schedule = task.scheduling;\r\n        tewi.isSchedule.checked = true;\r\n        tewi.start.value = String((0,app_date__WEBPACK_IMPORTED_MODULE_1__.numberToDateString)(schedule.start));\r\n        tewi.due.value = String((0,app_date__WEBPACK_IMPORTED_MODULE_1__.numberToDateString)(schedule.due));\r\n        tewi.duration.value = String(schedule.duration);\r\n        if (schedule.repeating) {\r\n            const repeating = schedule.repeating;\r\n            tewi.isRepeating.checked = true;\r\n            tewi.repeatFreq.value = String(repeating.repeatFreq);\r\n            tewi.repeatStart.value = String(repeating.repeatStart);\r\n            if (repeating.repeatEnd) {\r\n                tewi.isRepeatEnd.checked = true;\r\n                tewi.repeatEnd.value = String(repeating.repeatEnd);\r\n            }\r\n        }\r\n    }\r\n    tewi.priority.value = String(task.priority);\r\n    tewi.description.value = task.description;\r\n    (0,app_ui__WEBPACK_IMPORTED_MODULE_2__.displayTaskList)(task.dependancies, tewd.dependancyList);\r\n    (0,app_ui__WEBPACK_IMPORTED_MODULE_2__.displayTaskList)(task.components, tewd.componentList);\r\n    (0,app_ui__WEBPACK_IMPORTED_MODULE_2__.displayPersonList)(task.subjects, tewd.subjectList);\r\n    (0,app_ui__WEBPACK_IMPORTED_MODULE_2__.displayPersonList)(task.owner, tewd.ownerList);\r\n}\r\nfunction saveTask(task) {\r\n    const tewi = app_htmlElements__WEBPACK_IMPORTED_MODULE_0__.taskEditWindowInputs;\r\n    task.title = tewi.title.value;\r\n    if (!tewi.isEvent.checked) {\r\n        task.completed = tewi.isDone.checked;\r\n    }\r\n    if (tewi.isPending.checked) {\r\n        task.scheduling = 'pending';\r\n    }\r\n    else if (tewi.isNone.checked) {\r\n        task.scheduling = 'none';\r\n    }\r\n    else {\r\n        let repeat = undefined;\r\n        if (tewi.isRepeating.checked) {\r\n            let repeatEnd = undefined;\r\n            let exceptionIn = [];\r\n            let exceptionOut = [];\r\n            if (tewi.isRepeatEnd.checked) {\r\n                repeatEnd = Number(tewi.repeatEnd.value);\r\n            }\r\n            if (task.scheduling != 'pending' && task.scheduling != 'none') {\r\n                if (task.scheduling.repeating) {\r\n                    exceptionIn = task.scheduling.repeating.exceptionIn;\r\n                    exceptionOut = task.scheduling.repeating.exceptionIn;\r\n                }\r\n            }\r\n            repeat = {\r\n                repeatFreq: Number(tewi.repeatFreq.value),\r\n                repeatStart: Number(tewi.repeatStart.value),\r\n                repeatEnd: repeatEnd,\r\n                exceptionIn: exceptionIn,\r\n                exceptionOut: exceptionOut,\r\n            };\r\n        }\r\n        task.scheduling = {\r\n            start: Number(tewi.start.value),\r\n            due: Number(tewi.due.value),\r\n            duration: Number(tewi.duration.value),\r\n            repeating: repeat\r\n        };\r\n    }\r\n    task.priority = Number(tewi.priority.value);\r\n    task.description = tewi.description.value;\r\n}\r\nfunction newTask() {\r\n    insertTaskInfo(defaultTask());\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/task.ts?");

/***/ }),

/***/ "./app/ui.ts":
/*!*******************!*\
  !*** ./app/ui.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayPersonList: () => (/* binding */ displayPersonList),\n/* harmony export */   displayTaskList: () => (/* binding */ displayTaskList)\n/* harmony export */ });\nfunction displayTaskList(list, id) {\r\n    let listHTML = '';\r\n    for (let i = 0; i < list.length; i++) {\r\n        listHTML += '<button>' + list[i].title + '</button>';\r\n    }\r\n    id.innerHTML = listHTML;\r\n}\r\nfunction displayPersonList(list, id) {\r\n    let listHTML = '';\r\n    for (let i = 0; i < list.length; i++) {\r\n        listHTML += '<button>' + list[i] + '</button>';\r\n    }\r\n    id.innerHTML = listHTML;\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/ui.ts?");

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