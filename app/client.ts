// import { testInputs } from 'app/development/testInput';
import { getTaskById, getDataBase, dataBase } from 'app/dataBase';
// import { taskHandler } from 'app/taskHandler';
// import { scheduleTasks } from 'app/schedule';
import { updateTaskEditWindowDisplay, updateLists } from 'app/ui/display';
// import { mainApp } from 'app/ui/htmlElements';
// import { getCurrentTime, numberToDateString, dateStringToNumber } from 'app/date';
import { initTask } from 'app/task';
import { eventListener } from 'app/ui/eventListener';
// import { getTaskValue } from 'app/ui/taskEdit';

dataBase = getDataBase();



let schedule: Schedule = {
	content: []
}

let taskList: TaskList = {
	mustDo: [],
	toDo: []
}
let currentState: CurrentState = {
	taskId: 0
	tempTask: initTask();
}



updateLists(dataBase);

eventListener(currentState, dataBase);

function update(): void {
	updateTaskEditWindowDisplay();
		// if (currentState.taskId < dataBase.nextId) {
		// 	console.log(currentState.taskId);
		// }
	// updateLists(dataBase);
	console.log(currentState.tempTask);
}

setInterval(update, 100);