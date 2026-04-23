// import { testInputs } from 'app/development/testInput';
import { getDataBase, loadDataBase } from 'app/dataBase';
// import { taskHandler } from 'app/taskHandler';
// import { scheduleTasks } from 'app/schedule';
import { updateTaskEditWindowDisplay } from 'app/ui/display';
// import { mainApp } from 'app/ui/htmlElements';
// import { getCurrentTime, numberToDateString, dateStringToNumber } from 'app/date';
import { initTask } from 'app/task';
import { eventListeners } from 'app/ui/eventListener';
// import { getTaskValue } from 'app/ui/taskEdit';

loadDataBase();

const dataBase = getDataBase();



let schedule: Schedule = {
	content: []
}

let taskLists: TaskLists = {
	mustDo: [],
	toDo: []
}
let currentState: CurrentState = {
	tempTask: initTask()
}


eventListeners();

function update(): void {
	updateTaskEditWindowDisplay();
}

setInterval(update, 100);