import { testInputs } from 'app/development/testInput';
// import { TaskDataBase } from 'app/taskDataBase';

let dataBase: Task[] = [];

testInputs(dataBase);
console.log(dataBase);

function update(): void {
return;
}
setInterval(update, 1000);