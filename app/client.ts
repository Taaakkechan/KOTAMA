import { testInputs } from 'app/development/testInput';
import { TaskDataBase } from 'app/taskDataBase';

let taskDB: TaskDataBase = {
	content: []
};

testInputs(taskDB);
console.log(taskDB);
console.log(taskDB.content[0].title)

function update(): void {
return;
}
setInterval(update, 1000);