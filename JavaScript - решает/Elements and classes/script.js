window.onload = function() {
	// всегда обращаясь к элементу по имени тега мы получаем массив!
	var p = document.getElementsByTagName('p');
	var bold = document.getElementsByClassName('bold');
	console.log(p);
	for (var i = 0; i < p.length; i++) {
		p[i].onclick = fun;
	}
	for (var i = 0; i < bold.length; i++) {
		bold[i].onclick = funBold;
	}

	function fun() {
		console.log(this); // тот элемент на котором произошло событие
		this.style.backgroundColor = 'red';
	}
	function funBold() {
		this.style.fontWeight = 'bold';
	}
}