// import { testInputs } from 'app/development/testInput';
// import { DataBase } from 'app/dataBase';
// import { taskHandler } from 'app/taskHandler';
// import { scheduleTasks } from 'app/schedule';
import { updateTaskEditWindowDisplay } from 'app/display';
// import { taskEditWindow, createNewTask, taskDBList } from 'app/htmlElements';
import { getCurrentTime, numberToDateString, dateStringToNumber } from 'app/date';
// import { initTask, insertTaskValue, getTaskValue, getTaskById, getTaskIndexById } from 'app/task';
import { eventListener } from 'app/eventListener';

let dataBase: DataBase = {
	content: [],
	subjects: [],
	nextId: 1
}
let schedule: Schedule = {
	content: []
}

let taskList: TaskList = {
	mustDo: [],
	toDo: []
}
let currentTaskId = 0;
const now = getCurrentTime()
console.log(now)
console.log(numberToDateString(now));
console.log(dateStringToNumber(numberToDateString(now)));
console.log(numberToDateString(dateStringToNumber(numberToDateString(now))));

eventListener(currentTaskId, dataBase);

function update(): void {
	updateTaskEditWindowDisplay();
}

setInterval(update, 20);