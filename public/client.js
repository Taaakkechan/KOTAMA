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

/***/ "./app/client.ts":
/*!***********************!*\
  !*** ./app/client.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var app_dataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dataBase */ \"./app/dataBase.ts\");\n/* harmony import */ var app_ui_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/ui/display */ \"./app/ui/display.ts\");\n/* harmony import */ var app_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/task */ \"./app/task.ts\");\n/* harmony import */ var app_ui_eventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/ui/eventListener */ \"./app/ui/eventListener.ts\");\n// import { testInputs } from 'app/development/testInput';\r\n\r\n// import { taskHandler } from 'app/taskHandler';\r\n// import { scheduleTasks } from 'app/schedule';\r\n\r\n// import { mainApp } from 'app/ui/htmlElements';\r\n// import { getCurrentTime, numberToDateString, dateStringToNumber } from 'app/date';\r\n\r\n\r\n// import { getTaskValue } from 'app/ui/taskEdit';\r\napp_dataBase__WEBPACK_IMPORTED_MODULE_0__.dataBase = (0,app_dataBase__WEBPACK_IMPORTED_MODULE_0__.getDataBase)();\r\nlet schedule = {\r\n    content: []\r\n};\r\nlet taskList = {\r\n    mustDo: [],\r\n    toDo: []\r\n};\r\nlet currentState = {\r\n    taskId: 0,\r\n    tempTask: (0,app_task__WEBPACK_IMPORTED_MODULE_2__.initTask)()\r\n};\r\n(0,app_ui_display__WEBPACK_IMPORTED_MODULE_1__.updateLists)(app_dataBase__WEBPACK_IMPORTED_MODULE_0__.dataBase);\r\n(0,app_ui_eventListener__WEBPACK_IMPORTED_MODULE_3__.eventListener)(currentState, app_dataBase__WEBPACK_IMPORTED_MODULE_0__.dataBase);\r\nfunction update() {\r\n    (0,app_ui_display__WEBPACK_IMPORTED_MODULE_1__.updateTaskEditWindowDisplay)();\r\n    // if (currentState.taskId < dataBase.nextId) {\r\n    // \tconsole.log(currentState.taskId);\r\n    // }\r\n    // updateLists(dataBase);\r\n    console.log(currentState.tempTask);\r\n}\r\nsetInterval(update, 100);\r\n\n\n//# sourceURL=webpack://alttp/./app/client.ts?");

/***/ }),

/***/ "./app/dataBase.ts":
/*!*************************!*\
  !*** ./app/dataBase.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearSavedData: () => (/* binding */ clearSavedData),\n/* harmony export */   getDataBase: () => (/* binding */ getDataBase),\n/* harmony export */   getTaskById: () => (/* binding */ getTaskById),\n/* harmony export */   getTaskComponents: () => (/* binding */ getTaskComponents),\n/* harmony export */   getTaskDependancies: () => (/* binding */ getTaskDependancies),\n/* harmony export */   getTaskIndexById: () => (/* binding */ getTaskIndexById),\n/* harmony export */   loadDataBase: () => (/* binding */ loadDataBase),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\n/* harmony import */ var app_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/task */ \"./app/task.ts\");\n\r\nlet dataBase;\r\nfunction initializeDataBase() {\r\n    const defaultDataBase = {\r\n        tasks: [],\r\n        taskTemplates: [],\r\n        subjects: [],\r\n        nextId: 1\r\n    };\r\n    return defaultDataBase;\r\n}\r\nfunction loadDataBase() {\r\n    dataBase = initializeDataBase();\r\n    const savedData = localStorage.getItem(\"savedData\");\r\n    if (savedData) {\r\n        dataBase = JSON.parse(savedData);\r\n        console.log(\"data loaded\");\r\n    }\r\n    else {\r\n        console.log(\"initiated data\");\r\n    }\r\n}\r\nfunction clearSavedData() {\r\n    localStorage.removeItem(\"savedData\");\r\n}\r\nfunction getDataBase() {\r\n    return dataBase;\r\n}\r\nfunction getTaskById(id) {\r\n    if (id === 0) {\r\n        return (0,app_task__WEBPACK_IMPORTED_MODULE_0__.initTask)();\r\n    }\r\n    for (let i = 0; i < dataBase.tasks.length; i++) {\r\n        if (id === dataBase.tasks[i].id) {\r\n            return dataBase.tasks[i];\r\n        }\r\n    }\r\n    throw new Error('task not found');\r\n}\r\nfunction getTaskComponents(task) {\r\n    const components = task.components;\r\n    let taskList = [];\r\n    for (let i = 0; i < components.length; i++) {\r\n        taskList.push(getTaskById(components[i]));\r\n    }\r\n    return taskList;\r\n}\r\nfunction getTaskDependancies(task) {\r\n    const dependancies = task.dependancies;\r\n    let taskList = [];\r\n    for (let i = 0; i < dependancies.length; i++) {\r\n        taskList.push(getTaskById(dependancies[i]));\r\n    }\r\n    return taskList;\r\n}\r\nfunction getTaskIndexById(id) {\r\n    if (id <= 0 || id >= dataBase.nextId) {\r\n        throw new Error('invalid id');\r\n    }\r\n    for (let i = 0; i < dataBase.tasks.length; i++) {\r\n        if (id === dataBase.tasks[i].id) {\r\n            return i;\r\n        }\r\n    }\r\n    throw new Error('task not found');\r\n}\r\nfunction saveData() {\r\n    localStorage.setItem(\"savedData\", JSON.stringify(dataBase));\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/dataBase.ts?");

/***/ }),

/***/ "./app/date.ts":
/*!*********************!*\
  !*** ./app/date.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dateStringToNumber: () => (/* binding */ dateStringToNumber),\n/* harmony export */   getCurrentTime: () => (/* binding */ getCurrentTime),\n/* harmony export */   numberToDateString: () => (/* binding */ numberToDateString)\n/* harmony export */ });\n// store things in terms of YYYY-MM-DDTHH:MM I guess?\r\n// probably not supporting time zones. Only care about what time the user is living in\r\n// so I need to define getting the current time (of user), and then converting string to number and number to string\r\n// when getting time for the user, should I define both string and number, or just number?\r\nfunction getTimeOffset() {\r\n    const date = new Date(Date.now());\r\n    return date.getTimezoneOffset();\r\n}\r\nfunction getCurrentTime() {\r\n    return Math.floor(Date.now() / (1000 * 60)) - getTimeOffset();\r\n}\r\nfunction numberToDateString(timeStamp) {\r\n    const date = new Date(timeStamp * 1000 * 60);\r\n    return date.toISOString().slice(0, -8);\r\n}\r\nfunction dateStringToNumber(dateTime) {\r\n    return Date.parse(dateTime) / (1000 * 60) - getTimeOffset();\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/date.ts?");

/***/ }),

/***/ "./app/task.ts":
/*!*********************!*\
  !*** ./app/task.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deepCloneTask: () => (/* binding */ deepCloneTask),\n/* harmony export */   initTask: () => (/* binding */ initTask)\n/* harmony export */ });\n/* harmony import */ var app_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/date */ \"./app/date.ts\");\n// export function getTotalDuration(tasks: Task[]): number {\r\n// \tlet duration = 0;\r\n// \tfor (let i = 0; i < tasks.length; i++) {\r\n// \t\tif (tasks[i].duration) {\r\n// \t\t\tduration += tasks[i].duration!;\r\n// \t\t} else {throw new Error('duration undefined');}\r\n// \t}\treturn duration;\r\n// }\r\n// function findOverlappingTasks(tasks: Task[], schedule: Schedule): Task[] {\r\n// \t// get the start and end of the tasks\r\n// \tif (tasks[0].start && tasks[0].due) {\r\n// \t\tlet startTask = tasks[0];\r\n// \t\tlet dueTask = tasks[0];\r\n// \t\tfor (let i=1; i < tasks.length; i++) {\r\n// \t\t\tif (tasks[i].start && tasks[i].due) {\r\n// \t\t\t\tif (tasks[i].start! < startTask.start!) {\r\n// \t\t\t\t\tstartTask = tasks[i];\r\n// \t\t\t\t}\r\n// \t\t\t\tif (tasks[i].due! > dueTask.due!) {\r\n// \t\t\t\t\tdueTask = tasks[i];\r\n// \t\t\t\t}\r\n// \t\t\t}\r\n// \t\t}\r\n// \t\t// compare the start and due with all the other tasks in the schedule\r\n// \t\tconst taskSchedule = schedule.content\r\n// \t\tfor (let i = 0; i < taskSchedule.length; i++) {\r\n// \t\t\tif (taskSchedule[i].start && taskSchedule[i].due) {\r\n// \t\t\t\tif (!((dueTask.due! < taskSchedule[i].start!) || (startTask.start! > taskSchedule[i].due!))) {\r\n// \t\t\t\t\ttasks.push(taskSchedule[i]);\r\n// \t\t\t\t}\r\n// \t\t\t} \r\n// \t\t}\r\n// \t} else {throw new Error('initialTask start/due undefined')}\r\n// \treturn tasks;\r\n// }\r\n// function isValid(task: Task, schedule: Schedule): boolean {\r\n// \t// finds all the chained overlapping tasks.\r\n// \t// maybe able to include it in the findOVerlappingTasks function\r\n// \tlet tasks = [task];\r\n// \tlet initialTasks = tasks;\r\n// \tlet updatedTasks = findOverlappingTasks(initialTasks, schedule);\r\n// \twhile (initialTasks.length != updatedTasks.length) {\r\n// \t\tinitialTasks = updatedTasks;\r\n// \t\tupdatedTasks = findOverlappingTasks(initialTasks, schedule);\r\n// \t}\r\n// \ttasks = updatedTasks;\r\n// \t// gets the start and due for a group of function again. \r\n// \t// could separate it into a function (get start/ get end)\r\n// \tif (tasks[0].start && tasks[0].due) {\r\n// \t\tlet startTask = tasks[0];\r\n// \t\tlet dueTask = tasks[0];\r\n// \t\tfor (let i=1; i < tasks.length; i++) {\r\n// \t\t\tif (tasks[i].start && tasks[i].due) {\r\n// \t\t\t\tif (tasks[i].start! < startTask.start!) {\r\n// \t\t\t\t\tstartTask = tasks[i];\r\n// \t\t\t\t}\r\n// \t\t\t\tif (tasks[i].due! > dueTask.due!) {\r\n// \t\t\t\t\tdueTask = tasks[i];\r\n// \t\t\t\t}\r\n// \t\t\t}\r\n// \t\t}\r\n// \t\t// actually compare the duration and the window\r\n// \t\tconst totalDuration = getTotalDuration(tasks);\r\n// \t\tif (startTask.due! - startTask.start! > totalDuration) {\r\n// \t\t\treturn true;\r\n// \t\t} else {\r\n// \t\t\treturn false;\r\n// \t\t}\r\n// \t} else {throw new Error('initial Task start/due undefined');}\r\n// }\r\n\r\nfunction initTask() {\r\n    const now = (0,app_date__WEBPACK_IMPORTED_MODULE_0__.getCurrentTime)();\r\n    const times = {\r\n        start: now + 60 - (now % 60),\r\n        due: now + 120 - (now % 60),\r\n        duration: 60\r\n    };\r\n    const newTask = {\r\n        id: 0,\r\n        title: '',\r\n        description: '',\r\n        scheduling: times,\r\n        priority: 1,\r\n        dependancies: [],\r\n        components: [],\r\n        subjects: [],\r\n        owner: ['user'],\r\n        completed: false\r\n    };\r\n    return newTask;\r\n}\r\nfunction deepCloneTask(originalTask) {\r\n    return JSON.parse(JSON.stringify(originalTask));\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/task.ts?");

/***/ }),

/***/ "./app/ui/display.ts":
/*!***************************!*\
  !*** ./app/ui/display.ts ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: 'import' and 'export' may only appear at the top level (39:4)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     // schinanigins\\n|     return id;\\n>     export function updateLists(dataBase) {\\n|         const task = currentState.tempTask;\\n|         const dependancies = getTaskDependancies(task, dataBase);\");\n\n//# sourceURL=webpack://alttp/./app/ui/display.ts?");

/***/ }),

/***/ "./app/ui/eventListener.ts":
/*!*********************************!*\
  !*** ./app/ui/eventListener.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEventListeners: () => (/* binding */ addEventListeners)\n/* harmony export */ });\n/* harmony import */ var app_dataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dataBase */ \"./app/dataBase.ts\");\n/* harmony import */ var app_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/task */ \"./app/task.ts\");\n/* harmony import */ var app_ui_taskEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/ui/taskEdit */ \"./app/ui/taskEdit.ts\");\n/* harmony import */ var app_ui_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/ui/display */ \"./app/ui/display.ts\");\n/* harmony import */ var app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/ui/htmlElements */ \"./app/ui/htmlElements.ts\");\n\r\n\r\n\r\n\r\n\r\nfunction addEventListeners(currentState, dataBase) {\r\n    app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.createNewTask.onclick = () => {\r\n        currentState.taskId = dataBase.nextId;\r\n        (0,app_ui_taskEdit__WEBPACK_IMPORTED_MODULE_2__.insertTaskValue)(currentState.tempTask);\r\n        (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.divDisplay)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.main, true);\r\n    };\r\n    app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskDBList.onclick = () => {\r\n        const taskIndex = (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.getListIndex)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskDBList);\r\n        if (taskIndex >= 0) {\r\n            const originalTask = dataBase.tasks[taskIndex];\r\n            currentState.taskId = originalTask.id;\r\n            currentState.tempTask = (0,app_task__WEBPACK_IMPORTED_MODULE_1__.deepCloneTask)(originalTask);\r\n            (0,app_ui_taskEdit__WEBPACK_IMPORTED_MODULE_2__.insertTaskValue)(currentState.tempTask);\r\n            (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.divDisplay)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.main, true);\r\n        }\r\n        (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.updateLists)(dataBase);\r\n    };\r\n    // taskEditWindow buttons / divs\r\n    app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.buttons.addDependancy.onclick = () => {\r\n        (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.divDisplay)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.dependancyTaskSearch, true);\r\n    };\r\n    app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.buttons.addComponent.onclick = () => {\r\n        (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.divDisplay)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.componentTaskSearch, true);\r\n    };\r\n    app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.componentTaskSearch.onclick = () => {\r\n        const taskIndex = (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.getListIndex)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.componentTaskSearch);\r\n        if (taskIndex >= 0) {\r\n            currentState.tempTask.components.push(dataBase.tasks[taskIndex].id);\r\n            (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.updateLists)(dataBase);\r\n        }\r\n        (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.divDisplay)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.componentTaskSearch, false);\r\n    };\r\n    app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.dependancyTaskSearch.onclick = () => {\r\n        const taskIndex = (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.getListIndex)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.dependancyTaskSearch);\r\n        if (taskIndex >= 0) {\r\n            currentState.tempTask.dependancies.push(dataBase.tasks[taskIndex].id);\r\n            (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.updateLists)(dataBase);\r\n        }\r\n        (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.divDisplay)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.dependancyTaskSearch, false);\r\n    };\r\n    app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.buttons.saveEdit.onclick = () => {\r\n        (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.divDisplay)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.main, false);\r\n        (0,app_ui_taskEdit__WEBPACK_IMPORTED_MODULE_2__.getTaskValue)(currentState.tempTask);\r\n        (0,app_ui_taskEdit__WEBPACK_IMPORTED_MODULE_2__.saveEdit)(currentState.taskId, dataBase);\r\n        (0,app_dataBase__WEBPACK_IMPORTED_MODULE_0__.saveData)(dataBase);\r\n        (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.updateLists)(dataBase);\r\n    };\r\n    app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.buttons.cancelEdit.onclick = () => {\r\n        (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.divDisplay)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.main, false);\r\n        (0,app_ui_taskEdit__WEBPACK_IMPORTED_MODULE_2__.cancelEdit)(dataBase);\r\n    };\r\n    app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.buttons.deleteTask.onclick = () => {\r\n        (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.divDisplay)(app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_4__.taskEditWindow.divs.main, false);\r\n        (0,app_ui_taskEdit__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(currentState.taskId, dataBase);\r\n        (0,app_dataBase__WEBPACK_IMPORTED_MODULE_0__.saveData)(dataBase);\r\n        (0,app_ui_display__WEBPACK_IMPORTED_MODULE_3__.updateLists)(dataBase);\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/ui/eventListener.ts?");

/***/ }),

/***/ "./app/ui/htmlElements.ts":
/*!********************************!*\
  !*** ./app/ui/htmlElements.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewTask: () => (/* binding */ createNewTask),\n/* harmony export */   mainApp: () => (/* binding */ mainApp),\n/* harmony export */   taskDBList: () => (/* binding */ taskDBList),\n/* harmony export */   taskEditWindow: () => (/* binding */ taskEditWindow)\n/* harmony export */ });\nfunction requireElementById(id) {\r\n    const element = document.getElementById(id);\r\n    if (!element) {\r\n        throw new Error(`Could not find element with id ${id}`);\r\n    }\r\n    return element;\r\n}\r\nfunction getButton(id) {\r\n    return requireElementById(id);\r\n}\r\nfunction getDiv(id) {\r\n    return requireElementById(id);\r\n}\r\nfunction getInput(id) {\r\n    return requireElementById(id);\r\n}\r\nconst taskDBList = getDiv('taskDBList');\r\n// export const taskListDiv = {\r\n// \tmustDo: getDiv('mustDo'),\r\n// \ttoDo: getDiv('toDo')\r\n// }\r\nconst mainApp = getDiv('main');\r\nconst createNewTask = getButton('createNewTask');\r\nconst taskEditWindow = {\r\n    divs: {\r\n        main: getDiv('taskEditWindow'),\r\n        schedule: getDiv('taskEditWindow-schedule'),\r\n        repeat: getDiv('taskEditWindow-repeat'),\r\n        dependancyList: getDiv('taskEditWindow-dependancyList'),\r\n        componentList: getDiv('taskEditWindow-componentList'),\r\n        subjectList: getDiv('taskEditWindow-subjectList'),\r\n        ownerList: getDiv('taskEditWindow-ownerList'),\r\n        componentTaskSearch: getDiv('taskEditWindow-component-taskSearch'),\r\n        dependancyTaskSearch: getDiv('taskEditWindow-dependancy-taskSearch'),\r\n    },\r\n    buttons: {\r\n        saveEdit: getButton('taskEditWindow-saveEdit'),\r\n        cancelEdit: getButton('taskEditWindow-cancelEdit'),\r\n        deleteTask: getButton('taskEditWindow-deleteTask'),\r\n        addDependancy: getButton('taskEditWindow-addDependancy'),\r\n        addComponent: getButton('taskEditWindow-addComponent')\r\n    },\r\n    inputs: {\r\n        title: getInput('taskEditWindow-taskTitle'),\r\n        isDone: getInput('taskEditWindow-isTaskDone'),\r\n        isEvent: getInput('taskEditWindow-isEvent'),\r\n        isSchedule: getInput('taskEditWindow-isSchedule'),\r\n        isPending: getInput('taskEditWindow-isPending'),\r\n        isNone: getInput('taskEditWindow-isNone'),\r\n        start: getInput('taskEditWindow-start'),\r\n        due: getInput('taskEditWindow-due'),\r\n        isRepeating: getInput('taskEditWindow-isRepeating'),\r\n        repeatFreq: getInput('taskEditWindow-repeatFreq'),\r\n        repeatStart: getInput('taskEditWindow-repeatStartDate'),\r\n        isRepeatEnd: getInput('taskEditWindow-isRepeatEnd'),\r\n        repeatEnd: getInput('taskEditWindow-repeatEndDate'),\r\n        duration: getInput('taskEditWindow-duration'),\r\n        priority: getInput('taskEditWindow-priority'),\r\n        description: getInput('taskEditWindow-description')\r\n    }\r\n};\r\n// export const scheduleDiv = getDiv('schedule');\r\n\n\n//# sourceURL=webpack://alttp/./app/ui/htmlElements.ts?");

/***/ }),

/***/ "./app/ui/taskEdit.ts":
/*!****************************!*\
  !*** ./app/ui/taskEdit.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancelEdit: () => (/* binding */ cancelEdit),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   getTaskValue: () => (/* binding */ getTaskValue),\n/* harmony export */   insertTaskValue: () => (/* binding */ insertTaskValue),\n/* harmony export */   saveEdit: () => (/* binding */ saveEdit)\n/* harmony export */ });\n/* harmony import */ var app_dataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/dataBase */ \"./app/dataBase.ts\");\n/* harmony import */ var app_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/task */ \"./app/task.ts\");\n/* harmony import */ var app_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/date */ \"./app/date.ts\");\n/* harmony import */ var app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/ui/htmlElements */ \"./app/ui/htmlElements.ts\");\n\r\n\r\n\r\n\r\nfunction insertTaskValue(task) {\r\n    const tewi = app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_3__.taskEditWindow.inputs;\r\n    // const tewd = taskEditWindow.divs;\r\n    if (task.completed != null) {\r\n        tewi.isDone.checked = task.completed;\r\n    }\r\n    else {\r\n        tewi.isEvent.checked = true;\r\n    }\r\n    tewi.title.value = task.title;\r\n    if (task.scheduling === 'pending') {\r\n        tewi.isPending.checked = true;\r\n    }\r\n    else if (task.scheduling === 'none') {\r\n        tewi.isNone.checked = true;\r\n    }\r\n    else {\r\n        const schedule = task.scheduling;\r\n        tewi.isSchedule.checked = true;\r\n        tewi.start.value = String((0,app_date__WEBPACK_IMPORTED_MODULE_2__.numberToDateString)(schedule.start));\r\n        tewi.due.value = String((0,app_date__WEBPACK_IMPORTED_MODULE_2__.numberToDateString)(schedule.due));\r\n        tewi.duration.value = String(schedule.duration);\r\n        if (schedule.repeating) {\r\n            const repeating = schedule.repeating;\r\n            tewi.isRepeating.checked = true;\r\n            tewi.repeatFreq.value = String(repeating.repeatFreq);\r\n            tewi.repeatStart.value = String(repeating.repeatStart);\r\n            if (repeating.repeatEnd) {\r\n                tewi.isRepeatEnd.checked = true;\r\n                tewi.repeatEnd.value = String(repeating.repeatEnd);\r\n            }\r\n        }\r\n    }\r\n    tewi.priority.value = String(task.priority);\r\n    tewi.description.value = task.description;\r\n    // displayTaskList(task.dependancies, tewd.dependancyList);\r\n    // displayTaskList(task.components, tewd.componentList);\r\n    // displayPersonList(task.subjects, tewd.subjectList);\r\n    // displayPersonList(task.owner, tewd.ownerList);\r\n}\r\nfunction getTaskValue(task) {\r\n    const tewi = app_ui_htmlElements__WEBPACK_IMPORTED_MODULE_3__.taskEditWindow.inputs;\r\n    task.completed = undefined;\r\n    task.title = tewi.title.value;\r\n    if (!tewi.isEvent.checked) {\r\n        task.completed = tewi.isDone.checked;\r\n    }\r\n    if (tewi.isPending.checked) {\r\n        task.scheduling = 'pending';\r\n    }\r\n    else if (tewi.isNone.checked) {\r\n        task.scheduling = 'none';\r\n    }\r\n    else {\r\n        let repeat = undefined;\r\n        if (tewi.isRepeating.checked) {\r\n            let repeatEnd = undefined;\r\n            let exceptionIn = [];\r\n            let exceptionOut = [];\r\n            if (tewi.isRepeatEnd.checked) {\r\n                repeatEnd = (0,app_date__WEBPACK_IMPORTED_MODULE_2__.dateStringToNumber)(tewi.repeatEnd.value);\r\n            }\r\n            if (task.scheduling != 'pending' && task.scheduling != 'none') {\r\n                if (task.scheduling.repeating) {\r\n                    exceptionIn = task.scheduling.repeating.exceptionIn;\r\n                    exceptionOut = task.scheduling.repeating.exceptionIn;\r\n                }\r\n            }\r\n            repeat = {\r\n                repeatFreq: (0,app_date__WEBPACK_IMPORTED_MODULE_2__.dateStringToNumber)(tewi.repeatFreq.value),\r\n                repeatStart: (0,app_date__WEBPACK_IMPORTED_MODULE_2__.dateStringToNumber)(tewi.repeatStart.value),\r\n                repeatEnd: repeatEnd,\r\n                exceptionIn: exceptionIn,\r\n                exceptionOut: exceptionOut,\r\n            };\r\n        }\r\n        task.scheduling = {\r\n            start: (0,app_date__WEBPACK_IMPORTED_MODULE_2__.dateStringToNumber)(tewi.start.value),\r\n            due: (0,app_date__WEBPACK_IMPORTED_MODULE_2__.dateStringToNumber)(tewi.due.value),\r\n            duration: Number(tewi.duration.value),\r\n            repeating: repeat\r\n        };\r\n    }\r\n    task.priority = Number(tewi.priority.value);\r\n    task.description = tewi.description.value;\r\n    return task;\r\n}\r\n// function resetTaskEditWindow(dataBase: DataBase, currentState: CurrentState): void {\r\n// \tcurrentState.tempTask = initTask();\r\n// \tcurretState.taskId = 0;\r\n// }\r\nfunction saveEdit(currentTaskId, dataBase) {\r\n    const editedTask = currentState.tempTask;\r\n    editedTask.id = currentTaskId;\r\n    if (currentTaskId === dataBase.nextId) {\r\n        dataBase.tasks.push(editedTask);\r\n        dataBase.nextId++;\r\n    }\r\n    else {\r\n        dataBase.tasks[(0,app_dataBase__WEBPACK_IMPORTED_MODULE_0__.getTaskIndexById)(currentTaskId, dataBase)] = editedTask;\r\n    }\r\n    currentState.tempTask = (0,app_task__WEBPACK_IMPORTED_MODULE_1__.initTask)();\r\n}\r\nfunction cancelEdit(dataBase) {\r\n    currentState.tempTask = (0,app_task__WEBPACK_IMPORTED_MODULE_1__.initTask)();\r\n}\r\nfunction deleteTask(id, dataBase) {\r\n    const task = (0,app_dataBase__WEBPACK_IMPORTED_MODULE_0__.getTaskIndexById)(id, dataBase);\r\n    const tasks = dataBase.tasks;\r\n    if (id > 0) {\r\n        tasks.splice(task, 1);\r\n        console.log('task deleted. id: ' + id);\r\n        console.log('task deleted. name: ' + id);\r\n        for (let i = 0; i < tasks.length; i++) {\r\n            if (tasks[i].components.length > 0) {\r\n                console.log('finding deleted task');\r\n                for (let j = 0; j < tasks[i].components.length; j++) {\r\n                    console.log('checking compoents');\r\n                    if (id === tasks[i].components[j]) {\r\n                        tasks[i].components.splice(j, 1);\r\n                        console.log(tasks[i]);\r\n                        console.log('component deleted');\r\n                    }\r\n                }\r\n                for (let j = 0; j < tasks[i].dependancies.length; j++) {\r\n                    console.log('checking compoents');\r\n                    if (id === tasks[i].dependancies[j]) {\r\n                        tasks[i].dependancies.splice(j, 1);\r\n                        console.log(tasks[i]);\r\n                        console.log('dependancy deleted');\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    currentState.tempTask = (0,app_task__WEBPACK_IMPORTED_MODULE_1__.initTask)();\r\n}\r\n\n\n//# sourceURL=webpack://alttp/./app/ui/taskEdit.ts?");

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