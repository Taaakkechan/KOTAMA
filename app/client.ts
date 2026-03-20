import { testInputs } from 'app/development/testInput';
// import { DataBase } from 'app/dataBase';
import { taskHandler } from 'app/taskHandler';
import { scheduleTasks } from 'app/schedule';


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
testInputs(dataBase);
scheduleTasks(schedule, dataBase, 1440 * 30);
taskHandler(schedule, taskList);
console.log(dataBase.content);
console.log(schedule.content);
console.log(taskList.mustDo);
console.log(taskList.toDo);



function update(): void {
	return;
}

setInterval(update, 1000);