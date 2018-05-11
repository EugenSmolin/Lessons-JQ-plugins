window.onload = function() {
	//var block = document.getElementById('out');

	/*block.onclick = function() {
		this.style.background = 'green';
	}*/
	// правый клик мыши
	/*block.oncontextmenu = function() {
		this.style.background = 'red';
		return false; // запретить вызов контекстного меню на блоке
	}*/
	// движение мыши
	/*var num = 0;
	block.onmousemove = function() {
		this.style.width = 150 + num + 'px';
		num++;
	}*/
	// 
	/*block.onmousedown = function() {
		this.style.background = 'blue';
	}
	block.onmouseup = function() {
		this.style.background = 'pink';
	}*/

	// =====
	document.onmousemove = function() {
		document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/cat-alt-48.png" id="cat">');
		var cat = document.getElementById('cat');
		document.onmousemove = function(event) {
			cat.style.position = 'fixed';
			cat.style.left = event.clientX + 20 + 'px';
			cat.style.top = event.clientY + 20 + 'px';
		}
	}
}