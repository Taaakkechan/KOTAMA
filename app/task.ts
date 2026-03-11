export function createNewTask(taskName: string, dependantTask?: Task): Task {
	const newTask: Task = {
		title: taskName,
		dependancy: dependantTask
	}
	return newTask;
}
