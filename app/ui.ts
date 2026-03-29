export function displayTaskList(list: Task[], id: HTMLElement): void {
	let listHTML = '';
		for (let i = 0; i < list.length; i++) {
		let title = list[i].title
			if (title === '') {
				title = '(no title)';
			}
			listHTML += '<br><button>' + title + '</button>';
		}
	id.innerHTML = listHTML;
}

export function displayPersonList(list: string[], id: HTMLElement): void {
	let listHTML = '';
		for (let i = 0; i < list.length; i++) {
			listHTML += '<button>' + list[i] + '</button>';
		}
	id.innerHTML = listHTML;
}