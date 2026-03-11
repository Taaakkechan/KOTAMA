import { TaskDataBase } from 'app/taskDataBase';
import { Schedule } from 'app/schedule';
import { getTimeStamp } from 'app/date';
import { getTotalDuration } from 'app/task';
// import { createNewTask } from 'app/task'

// This file is to make testing easier for the dev

// pushes a bunch of different tasks to the database
// as of current have the function needed for all the process
// but plan to move them to the right location in the future

export function testInputs(taskDB: TaskDataBase): void {

	// let task1: Task = {
	// 	title: string,
	// 	description: string,
	// 	start: number,
	// 	due: number,
	// 	duration: number,
	// 	repeatFreq: number,
	// 	dependancy: Task,
	// 	components: Task[],
	// 	owner: string,
	// 	peopleConcerned: string[]
	// }
	let task15: Task = {
		title: 'Random Event2',
		start: getTimeStamp('2026-03-11T16:00'),
		due: getTimeStamp('2026-03-11T19:00'),
		duration: 100,
		owner: 'user',
		peopleConcerned: ['randomGuy']
	}
	let task14: Task = {
		title: 'Random Event',
		start: getTimeStamp('2026-03-11T16:00'),
		due: getTimeStamp('2026-03-11T19:00'),
		duration: 100,
		owner: 'user',
		peopleConcerned: ['randomGuy']
	}
	let task13: Task = {
		title: 'PHSX 210 Lab',
		start: 7200 + 780,
		due: 7200 + 890,
		duration: 110,
		repeatFreq: [10080],
		owner: 'user',
		peopleConcerned: ['KU']
	}
	let task12: Task = {
		title: 'EECS 210 Lab',
		start: 8640 + 990,
		due: 8640 + 1110,
		duration: 120,
		repeatFreq: [10080],
		owner: 'user',
		peopleConcerned: ['KU']
	}
	let task11: Task = {
		title: 'ORCH 400 Lab',
		start: 930,
		due: 1100,
		duration: 170,
		repeatFreq: [7200, 2880],
		owner: 'user',
		peopleConcerned: ['KU']
	}
	let task10: Task = {
		title: 'EECS 268 Lecture',
		start: 1440 + 600,
		due: 1440 + 650,
		duration: 50,
		repeatFreq: [4320, 2880, 2880],
		owner: 'user',
		peopleConcerned: ['KU']
	}
	let task9: Task = {
		title: 'dinner',
		start: 1080,
		due: 1260,
		duration: 40,
		repeatFreq: [1440],
		owner: 'user',
		peopleConcerned: ['userBody']
	}
	let task8: Task = {
		title: 'lunch',
		start: 660,
		due: 840,
		duration: 40,
		repeatFreq: [1440],
		owner: 'user',
		peopleConcerned: ['userBody']
	}
	let task7: Task = {
		title: 'breakfast',
		start: 420,
		due: 600,
		duration: 40,
		repeatFreq: [1440],
		owner: 'user',
		peopleConcerned: ['userBody']
	}
	let task6: Task = {
		title: 'sleep',
		start: 1260,
		due: 360,
		duration: 450,
		repeatFreq: [1440],
		owner: 'user',
		peopleConcerned: ['userBody']
	}
	let task1: Task = {
		title: "HW1",
		due: getTimeStamp('2026-04-01'),
		duration: 60,
		owner: "user",
		peopleConcerned: ["KU"]
	}
	let task2: Task = {
		title: "TestTopics",
		duration: 20,
		owner: "user",
	}
	let task3: Task = {
		title: "Review",
		duration: 30,
		owner: "user",
	}
	let task4: Task = {
		title: "Practice Test",
		duration: 60,
		owner: "user",
	}
	let task5: Task = {
		title: "Exam1",
		due: getTimeStamp('2026-04-05'),
		components: [task2, task3, task4],
		owner: "user",
		peopleConcerned: ["KU"]
	}

	task5.duration = getTotalDuration(task5);
	
	taskDB.content.push(task1);
	taskDB.content.push(task2);
	taskDB.content.push(task3);
	taskDB.content.push(task4);
	taskDB.content.push(task5);
	taskDB.content.push(task6);
	taskDB.content.push(task7);
	taskDB.content.push(task8);
	taskDB.content.push(task9);
	taskDB.content.push(task10);
	taskDB.content.push(task11);
	taskDB.content.push(task12);
	taskDB.content.push(task13);
	taskDB.content.push(task14);
	taskDB.content.push(task15);
	
	function scheduleTask(task: Task, schedule: Schedule): boolean {
		if (schedule.content.length > 1) {
			for (let i = 0; i > schedule.content.length; i++) {
				return;
			}
		}
	}
}