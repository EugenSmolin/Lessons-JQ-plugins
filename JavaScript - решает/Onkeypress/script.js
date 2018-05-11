window.onload = function() {
	var left = 290;
	document.getElementById('test').onwheel = function(event) {
		var line = event.deltaY;
		left += 0.2 * line;
		document.getElementById('test2').style.left = left + 'px';
		return false;
	}

	// ==========
	document.onwheel = function(event) {
		console.log(event);
		if (event.deltaY > 0) {
			document.getElementById('line').innerHTML = 'down';
		} else {
			document.getElementById('line').innerHTML = 'up';
		}
		var speed = event.deltaY;
		speed = Math.abs(speed);
		if (speed < 100) {
			document.getElementById('speed').innerHTML = 'низкая';
		} else if (speed < 150) {
			document.getElementById('speed').innerHTML = 'средняя';
		} else if (speed < 250) {
			document.getElementById('speed').innerHTML = 'высокая';
		} else {
			document.getElementById('speed').innerHTML = 'очень высокая';
		}
	}

	// ==========
	/*var block = document.getElementById('block');
	var left = 0;
	var top = 0;

	document.onkeydown = function(event) {
		console.log(event);
		if (event.key == 'ArrowRight') {
			block.style.left = left + 'px';
			left += 5;
		}
		if (event.key == 'ArrowDown') {
			block.style.top = top + 'px';
			top += 5;
		}
	}*/

	// ========== ?????
	/*var block = document.getElementById('block');
	var top = 0;
	var right = 0;
	var bottom = 0;
	var left = 0;
	document.onkeypress = function(event) {
		console.log(event);
		if (event.charCode == 119) { // вверх
			block.style.marginBottom = bottom + 'px';
			bottom += 5;
		}
		if (event.charCode == 100) { // вправо
			block.style.marginLeft = left + 'px';
			left += 5;
		}
		if (event.charCode == 115) { // вниз
			block.style.marginTop = top + 'px';
			top += 5;
		}
		if (event.charCode == 97) { // влево
			block.style.marginRight = right + 'px';
			right += 5;
		}
	}*/
}