export function displayTasks(list: Task[], id: HTMLElement): void {
	let listHTML = '';
		for (let i = 0; i < list.length; i++) {
			listHTML += '<button>' + list[i].title + '</button>';
		}
	id.innerHTML = listHTML;
}