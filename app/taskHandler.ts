// import { getCurrentUTCTime } from 'app/date';

// export function taskHandler(schedule: Schedule, taskList: TaskList): void {
// 	const now = getCurrentUTCTime();
// 	for (let i = 0; i < schedule.content.length; i++ ) {
// 		const task = schedule.content[i];
// 		let timeRemaining = task.due - now;
// 		let availableTime = timeRemaining
// 		// push to task list for tasks that don't have starts
// 		if (!task.start) {
// 			for (let j = 0; j < schedule.content.length; j++) {
// 				if (schedule.content[j].due <= task.due) {
// 					availableTime -= schedule.content[j].duration;
// 				}
// 			}
// 			if (availableTime < 180 || timeRemaining < 1440) {
// 				taskList.mustDo.push(task);
// 			} else if (availableTime < 1440 || timeRemaining < 10080) {
// 				taskList.toDo.push(task);
// 			}
// 		}
// 	}
// }