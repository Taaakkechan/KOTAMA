import { testInputs } from 'app/development/testInput';
// import { DataBase } from 'app/dataBase';
import { taskHandler } from 'app/taskHandler';
import { scheduleTasks } from 'app/schedule';
import { displayTasks } from 'app/ui';
import { taskListDiv, scheduleDiv } from 'app/htmlElements';


let dataBase: DataBase = {
	content: [],
	subjects: []
}

let schedule: Schedule = {
	content: []
}

let taskList: TaskList = {
	mustDo: [],
	toDo: []
}




function update(): void {
	return;
}

setInterval(update, 1000);