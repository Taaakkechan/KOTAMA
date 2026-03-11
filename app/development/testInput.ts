import { Schedule } from 'app/schedule';
import { getTimeStamp } from 'app/date';
import { getTotalDuration } from 'app/task';
// import { createNewTask } from 'app/task'

// This file is to make testing easier for the dev

// pushes a bunch of different tasks to the database
// as of current have the function needed for all the process
// but plan to move them to the right location in the future

export function testInputs(schedule: Schedule): void {

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
	let task13: Task = {
		title: 'PHSX 210 Lab',
		start: 780,
		due: 890,
		duration: 110,
		repeatFreq: [10080],
		owner: 'user',
		peopleConcerned: ['userBody']
	}
	let task12: Task = {
		title: 'EECS 210 Lab',
		start: 990,
		due: 1110,
		duration: 120,
		repeatFreq: [10080],
		owner: 'user',
		peopleConcerned: ['userBody']
	}
	let task11: Task = {
		title: 'ORCH 400 Lab',
		start: 930,
		due: 1100,
		duration: 170,
		repeatFreq: [2880, 7200],
		owner: 'user',
		peopleConcerned: ['userBody']
	}
	let task10: Task = {
		title: 'EECS 268 Lecture',
		start: 600,
		due: 650,
		duration: 50,
		repeatFreq: [2880, 2880, 4320],
		owner: 'user',
		peopleConcerned: ['userBody']
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
	
	schedule.content.push(task1);
	schedule.content.push(task2);
	schedule.content.push(task3);
	schedule.content.push(task4);
	schedule.content.push(task5);
	schedule.content.push(task6);
	schedule.content.push(task7);
	schedule.content.push(task8);
	schedule.content.push(task9);
	schedule.content.push(task10);
	schedule.content.push(task11);
	schedule.content.push(task12);
	schedule.content.push(task13);
}