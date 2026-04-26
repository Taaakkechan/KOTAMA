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
		
		if (task.scheduling) {
			
			const scheduling = task.scheduling;
			const windowEnd = now + (periodEnd * 1440);
			const windowStart = now + (periodStart * 1440);
			

			// when task repeats
			if (scheduling.repeating) {

				const scheduling = task.scheduling;
				const rep = scheduling.repeating!;

				let startDueDiff = scheduling.due - scheduling.start;
				if (startDueDiff < 0) {
					startDueDiff = scheduling.due + scheduling.start;
				}

				const initialDue = Math.max(rep.start + rep.freq - ((rep.start - scheduling.due) % rep.freq), windowStart);
				let finalDue = windowEnd;
				
				if (rep.end) {
					finalDue = Math.min(rep.end, windowEnd);
				}
				for (let i = initialDue; i < finalDue; i += rep.freq) {
					
					const date = new Date(i * 1000 * 60)
					const newRepeatedTask: ScheduledTask = {
						id: task.id,
						title: task.title,
						subjects: task.subjects,
						priority: task.priority,
						owner: task.owner,

						start: i - startDueDiff + date.getTimezoneOffset(),
						due: i + date.getTimezoneOffset(),
						duration: scheduling.duration,

						dependancies: task.dependancies,
					}
					schedule.tasks.push(newRepeatedTask);
				}
				console.log(schedule.tasks);

			// when task does not repeat
			} else if ((windowEnd > scheduling.due) && (now < scheduling.due)) {
				const newTask: ScheduledTask = {
					id: task.id,
					title: task.title,
					subjects: task.subjects,
					priority: task.priority,
					owner: task.owner,

					start: scheduling.start,
					due: scheduling.due,
					duration: scheduling.duration,

					dependancies: task.dependancies,
				}
				schedule.tasks.push(newTask);
				console.log(schedule.tasks);
			}
		}
	}
}