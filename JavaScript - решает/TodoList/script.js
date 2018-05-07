window.onload = function() {

	var todoList = [];

	if (localStorage.getItem('todo') != undefined) {
		todoList = JSON.parse(localStorage.getItem('todo'));
		out();
	}

	document.getElementById('btn-add').onclick = function() {
		var textNote = document.getElementById('text_note').value;
		// {todo: Добавить текст, check: false}
		var temp = {
			todo: textNote
		};
		//temp.check = false;
		var arrLength = todoList.length;
		todoList[arrLength] = temp;
		//console.log(todoList);
		out();
		localStorage.setItem('todo', JSON.stringify(todoList));

		document.getElementById('text_note').value = '';
	}

	function out() {
		var out = '';
		for (var key in todoList) {
			out += '<div id="note_block">' + todoList[key].todo + '</div>';
		}
		document.getElementById('list').innerHTML = out;
	}
}