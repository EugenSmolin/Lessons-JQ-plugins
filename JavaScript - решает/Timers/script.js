window.onload = function() {
	var block = document.getElementById('block');
	var timer = document.getElementById('timer');
	var stop = document.getElementById('stop');

	var left = 0;
	function move() {
		timer.style.left = left + 'px';
		left += 4;
	}
	var start = setInterval(move, 50);
	stop.onclick = function() {
		clearInterval(start);
	}

	// Таймер обратного отчёта
	/*var a = 10;
	function timer() {
		document.getElementById('timer').innerHTML = a;
		a--;
		if (a < 0) {
			clearInterval(time);
			alert('stop');
		}
	}

	var time = setInterval(timer, 1000);*/

}