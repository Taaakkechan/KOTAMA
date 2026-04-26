// import { testInputs } from 'app/development/testInput';
import { clearSavedData } from 'app/dataBase';
// import { taskHandler } from 'app/taskHandler';
// import { scheduleTasks } from 'app/schedule';
import { updateTaskEditWindowDisplay } from 'app/ui/display';
// import { mainApp } from 'app/ui/htmlElements';
// import { getCurrentTime, numberToDateTimeString, dateStringToNumber } from 'app/date';
// import { initTask } from 'app/task';
import { eventListeners } from 'app/ui/eventListener';
// import { retrieveValue } from 'app/ui/taskEdit';
import { initializeProgram } from 'app/initialize';

clearSavedData();
initializeProgram();
eventListeners();

function update(): void {
	updateTaskEditWindowDisplay();
}

setInterval(update, 100);