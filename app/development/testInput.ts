// import { TaskDataBase } from 'app/taskDataBase';
import { createNewTask } from 'app/task'

// This file is to make testing easier for the dev

// pushes a bunch of different tasks to the database
// as of current have the function needed for all the process
// but plan to move them to the right location in the future

export function testInputs(dataBase: Task[]): void {

	const test1 = createNewTask('test1')
	dataBase.push(test1);
	dataBase.push(createNewTask('test2', test1))
}