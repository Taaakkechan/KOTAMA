// import { testInputs } from 'app/development/testInput';
// import { DataBase } from 'app/dataBase';
// import { taskHandler } from 'app/taskHandler';
// import { scheduleTasks } from 'app/schedule';
import { displayTaskList } from 'app/ui';
import { taskEditWindow, createNewTask, taskDBList } from 'app/htmlElements';
import { getCurrentTime, numberToDateString, dateStringToNumber } from 'app/date';
import { initTask, insertTaskValue, getTaskValue, getTaskById, getTaskIndexById } from 'app/task';

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

function hideTaskEditWindow(): void {
	taskEditWindow.divs.main.style.display = 'none';
}

function showTaskEditWindow(): void {
	taskEditWindow.divs.main.style.display = 'block';
}


createNewTask.onclick = ()=> {
	const newTask = initTask();
	currentTaskId = newTask.id;
	insertTaskValue(newTask);
	showTaskEditWindow();
}

taskDBList.onclick = ()=> {
	
	let taskIndex = [...taskDBList.children].indexOf(event?.target as Element);
	// schinanigins
	taskIndex = (taskIndex - 1) / 2;
	console.log(taskIndex);
	currentTaskId = dataBase.content[taskIndex].id;
	console.log(dataBase.content[taskIndex]);
	insertTaskValue(dataBase.content[taskIndex]);
	showTaskEditWindow();
}

taskEditWindow.buttons.save.onclick = ()=> {
	hideTaskEditWindow();
	const task = getTaskValue(getTaskById(currentTaskId, dataBase));
	if (currentTaskId === 0) {
		task.id = dataBase.nextId;
		dataBase.nextId++;
		dataBase.content.push(task);
	} else {
		dataBase.content[getTaskIndexById(currentTaskId, dataBase)] = task;
	}
	updateTaskDBDisplay();
}
taskEditWindow.buttons.cancel.onclick = ()=> {
	hideTaskEditWindow();
}
taskEditWindow.buttons.delete.onclick = ()=> {
	hideTaskEditWindow();
	if (currentTaskId > 0) {
		dataBase.content.splice(getTaskIndexById(currentTaskId, dataBase));
	}
	updateTaskDBDisplay();
}


function updateTaskDBDisplay(): void {
	displayTaskList(dataBase.content, taskDBList);
}

function updateTaskEditWindowDisplay(): void {
	const tewi = taskEditWindow.inputs;
	const tewd = taskEditWindow.divs;

	// fix so we change value of container instead of input itself
	if (tewi.isEvent.checked) {
		tewi.isDone.style.display = 'none';
	} else {
		tewi.isDone.style.display = 'block';
	}

	if (tewi.isSchedule.checked) {
		tewd.schedule.style.display = 'block';

		if (tewi.isRepeating.checked) {
			tewd.repeat.style.display = 'block';

			if (tewi.isRepeatEnd.checked) {
				tewi.repeatEnd.style.display = 'block';
			} else {
				tewi.repeatEnd.style.display = 'none';
			}
		} else {
			tewd.repeat.style.display = 'none';
		}
	} else {
		tewd.schedule.style.display = 'none';
	}

}



function update(): void {
	updateTaskEditWindowDisplay();
}

setInterval(update, 20);