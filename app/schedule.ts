// import { getCurrentUTCTime } from 'app/date';

// // so schedule task just pushes tasks to schedule
// // Let's think about validness after we do the MVP
// export function scheduleTasks(schedule: Schedule, dataBase: DataBase, period: number): void {
// 	const now = getCurrentUTCTime();
// 	const windowEnd = now + period;
// 	const taskDB = dataBase.tasks
// 	for (let i = 0; i < taskDB.length; i++) {
// 		const task = taskDB[i]
// 		if (!task.components && task.due && task.duration) {
// 			if (task.repeatFreq && task.start) {

// 				// initialize repeat variables
// 				let freq = 0;
// 				let startDueDiff = task.due - task.start;

// 				// get each value
// 				for (let i = 0; i < task.repeatFreq.length; i++) {
// 					freq += task.repeatFreq[i];
// 				}
// 				if (startDueDiff < 0) {
// 					startDueDiff = task.due + task.start;
// 				}

// 				const initialDue = now + freq - ((now - task.due) % freq)
// 				for (let i = initialDue; i < windowEnd; i += freq) {
// 					const date = new Date(i * 1000 * 60)
// 					const newRepeatedTask: ScheduledTask = {
// 						title: task.title,
// 						subjects: task.subjects,
// 						priority: task.priority,
// 						owner: task.owner,

// 						description: task.description,

// 						start: i - startDueDiff + date.getTimezoneOffset(),
// 						due: i + date.getTimezoneOffset(),
// 						duration: task.duration,

// 						dependancy: task.dependancy,
// 					}
// 					schedule.content.push(newRepeatedTask);
// 				}
				
// 			} else if ((windowEnd > task.due) && (now < task.due)) {
// 				const newTask: ScheduledTask = {
// 					title: task.title,
// 					subjects: task.subjects,
// 					priority: task.priority,
// 					owner: task.owner,

// 					description: task.description,

// 					start: task.start,
// 					due: task.due,
// 					duration: task.duration,

// 					dependancy: task.dependancy,
// 				}
// 				schedule.content.push(newTask);
// 			}
// 		}
// 	}
// }