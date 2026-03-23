export function displayTasks(list: Task[], id: HTMLElement): void {
	let listHTML = '';
		for (let i = 0; i < list.length; i++) {
			listHTML += '<div>' + list[i].title + '</div>';
		}
	id.innerHTML = listHTML;
}