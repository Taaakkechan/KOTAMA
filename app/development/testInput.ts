import { DataBase } from 'app/dataBase';
import { getTimeStamp } from 'app/date';
import { isValid } from 'app/task';

// This file is to make testing easier for the dev

// pushes a bunch of different tasks to the database
// as of current have the function needed for all the process
// but plan to move them to the right location in the future






// what do I need to get straitened with repeats with tasks?
// check if it overlaps with other tasks.
// breaking up repeat into repeat start end and adjusted.
// man the more I think about it the more I think I should just make them individual tasks. I mean what's the point?
// realistically how many tasks in my schedule will I have? 5-10 everyday I guess I can adjust the window to however long I want to.
// how about looking for conflicts?

// function isValid(tasks: Task[]): boolean {
// 	if (task1.due && task2.due && task1.start && task2.start && task1.duration && task2.duration) {
// 		if (isOverlapping(task1, task2)) {
// 			const totalTime = Math.max(task1.due, task2.due) - Math.min(task1.start, task2.start);
// 			if (totalTime < (task1.duration + task2.duration)) {
// 				return false;
// 			}
// 		}
// 		return true;
// 	} else {throw new Error('task due/start/duration undefined');}
// }



export function scheduleTasks(dataBase: DataBase, schedule: Schedule): void {
	//repeat bois
	const taskDB = dataBase.content
	for (let i = 0; i < taskDB.length; i++) {
		const task = taskDB[i]
		if (!task.components && task.due && task.duration) {
			if (task.repeatFreq) {
				if (isValid(task, schedule)) {
					schedule.content.push(task)
				}
			}
		}
	}
	//event bois
	for (let i = 0; i < taskDB.length; i++) {
		const task = taskDB[i]
		if (!task.components && task.due && task.duration && task.start) {
			if (isValid(task, schedule)) {
				schedule.content.push(task)
			}	
		}
	}
	//normy bois(also chanllenging)
	for (let i = 0; i < taskDB.length; i++) {
		const task = taskDB[i]
		if (!task.components && task.due && task.duration) {
			if (isValid(task, schedule)) {
				schedule.content.push(task)
			}	
		}
	}
// 	// don't schedule tasks with components
// 	// what about tasks with dependancy?
// 	// check if task has duration and due
// 	// then schedule repeat
// 	// then schedule with start
// 	// then schedule the rest
// 	// when schedule check if it is valid task scheduling
// 		// first find all tasks that overlap with the task and then see if it's valid
// 	// if not, bring up reschedule for the task with the smaller priority
// 	// or bring up a conflict solve request
// 	// just a reminder this function is baiscally just a filter
// 	// also, scheduling things without start is going to be challenging.
}



export function testInputs(taskDB: DataBase): void {
	let task14: Task = {
		title: 'Random Event',
		priority: 2,
		start: getTimeStamp('2026-03-11T16:00'),
		due: getTimeStamp('2026-03-11T19:00'),
		duration: 100,
		owner: 'user',
		subjects: ['randomGuy']
	}
	taskDB.content.push(task14);
}
// let task15: Task = {
// 		title: 'Random Event2',
// 		priority: 2,
// 		start: getTimeStamp('2026-03-11T17:00'),
// 		due: getTimeStamp('2026-03-11T20:00'),
// 		duration: 140,
// 		owner: 'user',
// 		subjects: ['randomGuy']
// 	}
// 	let task14: Task = {
// 		title: 'Random Event',
// 		priority: 2,
// 		start: getTimeStamp('2026-03-11T16:00'),
// 		due: getTimeStamp('2026-03-11T19:00'),
// 		duration: 100,
// 		owner: 'user',
// 		subjects: ['randomGuy']
// 	}
// 	let task13: Task = {
// 		title: 'PHSX 210 Lab',
// 		priority: 2,
// 		start: 7200 + 780,
// 		due: 7200 + 890,
// 		duration: 110,
// 		repeatFreq: [10080],
// 		owner: 'user',
// 		subjects: ['KU']
// 	}
// 	let task12: Task = {
// 		title: 'EECS 210 Lab',
// 		priority: 2,
// 		start: 8640 + 990,
// 		due: 8640 + 1110,
// 		duration: 120,
// 		repeatFreq: [10080],
// 		owner: 'user',
// 		subjects: ['KU']
// 	}
// 	let task11: Task = {
// 		title: 'ORCH 400 Lab',
// 		priority: 2,
// 		start: 930,
// 		due: 1100,
// 		duration: 170,
// 		repeatFreq: [7200, 2880],
// 		owner: 'user',
// 		subjects: ['KU']
// 	}
// 	let task10: Task = {
// 		title: 'EECS 268 Lecture',
// 		priority: 2,
// 		start: 1440 + 600,
// 		due: 1440 + 650,
// 		duration: 50,
// 		repeatFreq: [4320, 2880, 2880],
// 		owner: 'user',
// 		subjects: ['KU']
// 	}
// 	let task9: Task = {
// 		title: 'dinner',
// 		priority: 2,
// 		start: 1080,
// 		due: 1260,
// 		duration: 40,
// 		repeatFreq: [1440],
// 		owner: 'user',
// 		subjects: ['userBody']
// 	}
// 	let task8: Task = {
// 		title: 'lunch',
// 		priority: 2,
// 		start: 660,
// 		due: 840,
// 		duration: 40,
// 		repeatFreq: [1440],
// 		owner: 'user',
// 		subjects: ['userBody']
// 	}
// 	let task7: Task = {
// 		title: 'breakfast',
// 		priority: 2,
// 		start: 420,
// 		due: 600,
// 		duration: 40,
// 		repeatFreq: [1440],
// 		owner: 'user',
// 		subjects: ['userBody']
// 	}
// 	let task6: Task = {
// 		title: 'sleep',
// 		priority: 2,
// 		start: 1260,
// 		due: 360,
// 		duration: 450,
// 		repeatFreq: [1440],
// 		owner: 'user',
// 		subjects: ['userBody']
// 	}
// 	let task1: Task = {
// 		title: "HW1",
// 		due: getTimeStamp('2026-04-01'),
// 		priority: 2,
// 		duration: 60,
// 		owner: "user",
// 		subjects: ["KU"]
// 	}
// 	let task2: Task = {
// 		title: "TestTopics",
// 		priority: 2,
// 		duration: 20,
// 		owner: "user",
// 		subjects: ["KU"]
// 	}
// 	let task3: Task = {
// 		title: "Review",
// 		priority: 2,
// 		duration: 30,
// 		owner: "user",
// 		subjects: ["KU"]
// 	}
// 	let task4: Task = {
// 		title: "Practice Test",
// 		priority: 2,
// 		duration: 60,
// 		owner: "user",
// 		subjects: ["KU"]
// 	}
// 	let task5: Task = {
// 		title: "Exam1",
// 		priority: 2,
// 		due: getTimeStamp('2026-04-05'),
// 		components: [task2, task3, task4],
// 		owner: "user",
// 		subjects: ["KU"]
// 	}

// 	task5.duration = getTotalDuration(task5);
	
// 	taskDB.content.push(task1);
// 	taskDB.content.push(task2);
// 	taskDB.content.push(task3);
// 	taskDB.content.push(task4);
// 	taskDB.content.push(task5);
// 	taskDB.content.push(task6);
// 	taskDB.content.push(task7);
// 	taskDB.content.push(task8);
// 	taskDB.content.push(task9);
// 	taskDB.content.push(task10);
// 	taskDB.content.push(task11);
// 	taskDB.content.push(task12);
// 	taskDB.content.push(task13);
// 	taskDB.content.push(task14);
// 	taskDB.content.push(task15);
// 	console.log(isValid(task14, task15));