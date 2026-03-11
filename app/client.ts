import { testInputs } from 'app/development/testInput';
import { Schedule } from 'app/schedule';

let schedule: Schedule = {
	content: []
};

testInputs(schedule);
console.log(schedule);
console.log(schedule.content[0].title)

function update(): void {
return;
}
setInterval(update, 1000);