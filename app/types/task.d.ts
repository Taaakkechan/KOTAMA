interface RepeatingItem {
	repeatFreq: number
	repeatStart: number
	repeatEnd?: number
	exceptionIn: ScheduledTask[]
	exceptionOut: ScheduledTask[]
}


interface ScheduleItem {
	due: number
	start: number
	duration: number
	repeating?: RepeatingItem
}

type Scheduling = ScheduleItem | 'pending' | 'none';

interface Task {
	id: number
	title: string
	description: string
	scheduling: Scheduling

	subjects: string[]
	priority: number
	owner: string[]

	dependancies: number[]
	components: number[]

	completed?: boolean
}

interface ScheduledTask {
	title: string
	//create date interface
	start: number
	due: number
	duration: number
	priority: number
	taskId: number
}

// the thing that represents the task with only title
interface TaskBox {
	title: string
	dimensions: Rect
	color: string
}