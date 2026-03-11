interface Task {
	title: string

	description?: string

	//create date interface
	start?: number
	due?: numnber

	duration?: number
	repeatFreq?: number[]
	dependancy?: Task
	components?: Task[]

	//create person type and replace it with these
	owner?: string
	peopleConcerned?: string[]

	// //I have no idea how to implement this. A reference file.
	// reference?: string

	// //make searching easier. also make unique type for this.
	// Category?: string
	// tags?: string
}