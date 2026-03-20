interface Task {
	title: string
	subjects: string[]	//Subject[]
	priority: number
	owner?: string

	description?: string

	//create date interface
	start?: number
	due?: number
	duration?: number

	repeatFreq?: number[]
	repeatStart?: number
	repeatEnd?: number

	dependancy?: Task
	components?: Task[]

	//create person type and replace it with these



	// //I have no idea how to implement this. A reference file.
	// reference?: string

	// //make searching easier. also make unique type for this.
	// Category?: string
	// tags?: string
}
interface ScheduledTask {
	title: string
	subjects: string[]	//Subject[]
	priority: number
	owner?: string

	description?: string

	//create date interface
	start?: number
	due: number
	duration: number

	dependancy?: Task
}