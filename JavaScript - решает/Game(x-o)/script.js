window.onload = function() {
	for (var i = 0; i < 9; i++) {
		document.getElementById('game').innerHTML += '<div class="block"></div>';
	}
	var step = 0;
	document.getElementById('game').onclick = function(event) {
		console.log(event);
		if (event.target.className == 'block') {
			if (step % 2 == 0) {
				event.target.innerHTML = 'x';
			} else {
				event.target.innerHTML = 'o';
			}
			step++;
			checkWinner();
		}
	}
	function checkWinner() {
		var allBlock = document.getElementsByClassName('block');
		console.log(allBlock);
	}
}