// import { testInputs } from 'app/development/testInput';
// import { DataBase } from 'app/dataBase';
// import { taskHandler } from 'app/taskHandler';
// import { scheduleTasks } from 'app/schedule';
import { updateTaskEditWindowDisplay, updateLists } from 'app/ui/display';
// import { taskEditWindow, createNewTask, taskDBList } from 'app/htmlElements';
// import { getCurrentTime, numberToDateString, dateStringToNumber } from 'app/date';
import { initTask } from 'app/task';
import { eventListener } from 'app/ui/eventListener';


localStorage.clear();
let dataBase: DataBase = {
	content: [],
	defaultTask: initTask(),
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

const jsonString = localStorage.getItem("savedData");
if (jsonString) {
	dataBase = JSON.parse(jsonString);
	console.log("data loaded");
}

updateLists(dataBase, currentTaskId);

eventListener(currentTaskId, dataBase);

function update(): void {
	updateTaskEditWindowDisplay();
}

setInterval(update, 20);