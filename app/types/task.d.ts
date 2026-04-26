interface RepeatingItem {
	freq: number
	start: number
	end?: number
	exceptionIn: ScheduledTask[]
	exceptionOut: ScheduledTask[]
}


interface ScheduleItem {
	due: number
	start: number
	duration: number
	repeating?: RepeatingItem
}

type Status = 'scheduled' | 'pending' | 'none';

interface Task {
	id: number
	title: string
	description: string
	status: Status
	scheduling?: ScheduleItem


	subjects: string[]
	priority: number
	owner: string[]

	dependancies: number[]
	components: number[]

	completed?: boolean
}

interface ScheduledTask {
	id: number
	title: string
	//create date interface
	start: number
	due: number
	duration: number
	priority: number

	subjects: string[]
	priority: number
	owner: string[]

	dependancies: number[]
}
