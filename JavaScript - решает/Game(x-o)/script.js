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
		//console.log(allBlock);
		if (allBlock[0].innerHTML == 'x' && allBlock[1].innerHTML == 'x' && allBlock[2].innerHTML == 'x') {alert('Выиграли крестики!'); location.reload()};
		if (allBlock[3].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[5].innerHTML == 'x') {alert('Выиграли крестики!'); location.reload()};
		if (allBlock[6].innerHTML == 'x' && allBlock[7].innerHTML == 'x' && allBlock[8].innerHTML == 'x') {alert('Выиграли крестики!'); location.reload()};
		if (allBlock[0].innerHTML == 'x' && allBlock[3].innerHTML == 'x' && allBlock[6].innerHTML == 'x') {alert('Выиграли крестики!'); location.reload()};
		if (allBlock[1].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[7].innerHTML == 'x') {alert('Выиграли крестики!'); location.reload()};
		if (allBlock[2].innerHTML == 'x' && allBlock[5].innerHTML == 'x' && allBlock[8].innerHTML == 'x') {alert('Выиграли крестики!'); location.reload()};
		if (allBlock[0].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[8].innerHTML == 'x') {alert('Выиграли крестики!'); location.reload()};
		if (allBlock[2].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[6].innerHTML == 'x') {alert('Выиграли крестики!'); location.reload()};
		// нолики
		if (allBlock[0].innerHTML == 'o' && allBlock[1].innerHTML == 'o' && allBlock[2].innerHTML == 'o') {alert('Выиграли нолики!'); location.reload()};
		if (allBlock[3].innerHTML == 'o' && allBlock[4].innerHTML == 'o' && allBlock[5].innerHTML == 'o') {alert('Выиграли нолики!'); location.reload()};
		if (allBlock[6].innerHTML == 'o' && allBlock[7].innerHTML == 'o' && allBlock[8].innerHTML == 'o') {alert('Выиграли нолики!'); location.reload()};
		if (allBlock[0].innerHTML == 'o' && allBlock[3].innerHTML == 'o' && allBlock[6].innerHTML == 'o') {alert('Выиграли нолики!'); location.reload()};
		if (allBlock[1].innerHTML == 'o' && allBlock[4].innerHTML == 'o' && allBlock[7].innerHTML == 'o') {alert('Выиграли нолики!'); location.reload()};
		if (allBlock[2].innerHTML == 'o' && allBlock[5].innerHTML == 'o' && allBlock[8].innerHTML == 'o') {alert('Выиграли нолики!'); location.reload()};
		if (allBlock[0].innerHTML == 'o' && allBlock[4].innerHTML == 'o' && allBlock[8].innerHTML == 'o') {alert('Выиграли нолики!'); location.reload()};
		if (allBlock[2].innerHTML == 'o' && allBlock[4].innerHTML == 'o' && allBlock[6].innerHTML == 'o') {alert('Выиграли нолики!'); location.reload()};
	}
}