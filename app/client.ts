import { testInputs } from 'app/development/testInput';
import { DataBase } from 'app/dataBase';

let dataBase: DataBase = {
	content: [],
	subjects: []
};

testInputs(dataBase);
console.log(dataBase);
console.log(dataBase.content[0].title)

function update(): void {
	return;
}

setInterval(update, 1000);