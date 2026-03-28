// import { testInputs } from 'app/development/testInput';
// import { DataBase } from 'app/dataBase';
// import { taskHandler } from 'app/taskHandler';
// import { scheduleTasks } from 'app/schedule';
// import { displayTasks } from 'app/ui';
// import { taskListDiv, scheduleDiv } from 'app/htmlElements';
// import { getCurrentTime, numberToDateString, dateStringToNumber } from 'app/date';
import { newTask } from 'app/task';

let dataBase: DataBase = {
	content: [],
	subjects: []
}
newTask();
let schedule: Schedule = {
	content: []
}

let taskList: TaskList = {
	mustDo: [],
	toDo: []
}
// const now = getCurrentTime()
// console.log(now)
// console.log(numberToDateString(now));
// console.log(dateStringToNumber(numberToDateString(now)));
// console.log(numberToDateString(dateStringToNumber(numberToDateString(now)));



function update(): void {
	return;
}

setInterval(update, 1000);