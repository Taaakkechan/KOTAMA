import { getCurrentTime } from 'app/date';
import { dataBase } from 'app/dataBase';


// so schedule task just pushes tasks to schedule
// Let's think about validness after we do the MVP
export let schedule: Schedule;

export function initializeSchedule(): void {
	schedule = {
		tasks: []
	}
}

export function scheduleTasks(periodStart: number, periodEnd: number): void {

	schedule.tasks = [];

	const now = getCurrentTime();

	for (const task of dataBase.tasks) {
		
		if (task.occurrences.length != 0) {
			
			const windowEnd = now + (periodEnd * 1440);
			const windowStart = now + (periodStart * 1440);
			
			for (const occurrence of task.occurrences) {

				// when task repeats
				if (occurrence.repeating) {

					const rep = occurrence.repeating!;


					let startDueDiff = occurrence.due - occurrence.start;

					// defining initial and final due
					const initialDue = Math.max(occurrence.start + rep.freq - ((occurrence.start - occurrence.due) % rep.freq), windowStart);
					
					let finalDue = windowEnd;
					
					if (rep.end) {
						finalDue = Math.min(rep.end, windowEnd);
					}

					// copying tasks
					for (let i = initialDue; i < finalDue; i += rep.freq) {
						
						const date = new Date(i * 1000 * 60)
						const newRepeatingTask: ScheduledTask = {
							occurrenceID: occurrence.id,
							start: i - startDueDiff + date.getTimezoneOffset(),
							due: i + date.getTimezoneOffset(),
						}
						schedule.tasks.push(newRepeatingTask);
					}

				// when task does not repeat
				} else if ((windowEnd > occurrence.due) && (now < occurrence.due)) {
					const newTask: ScheduledTask = {
						occurrenceID: occurrence.id,
						start: occurrence.start,
						due: occurrence.due,
					}
					schedule.tasks.push(newTask);
					console.log(schedule.tasks);
				}
			}
		}
	}
}