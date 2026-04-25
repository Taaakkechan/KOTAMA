// import { testInputs } from 'app/development/testInput';
import { loadDataBase,clearSavedData } from 'app/dataBase';
// import { taskHandler } from 'app/taskHandler';
// import { scheduleTasks } from 'app/schedule';
import { updateTaskEditWindowDisplay } from 'app/ui/display';
// import { mainApp } from 'app/ui/htmlElements';
// import { getCurrentTime, numberToDateTimeString, dateStringToNumber } from 'app/date';
// import { initTask } from 'app/task';
import { eventListeners } from 'app/ui/eventListener';
import { loadInitialState } from 'app/currentState';
// import { retrieveValue } from 'app/ui/taskEdit';

clearSavedData();
loadInitialState();
loadDataBase();

// let schedule: Schedule = {
// 	content: []
// }

// let taskLists: TaskLists = {
// 	mustDo: [],
// 	toDo: []
// }

eventListeners();

function update(): void {
	updateTaskEditWindowDisplay();
}

setInterval(update, 100);