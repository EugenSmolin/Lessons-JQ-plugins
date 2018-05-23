// ===== Задача на собеседовании ===== //
// Нужно сделать клетку 6 на 6.
// Если нажать на ячейку клетки, то она окрашивается, если нажать повторно, то цвет возвращается.
// Снизу есть 2 кнопки: 
// 1-я при нажатии на первую кнопку начинается таймер, который отсчитывает время;
// 2-я при нажатии на вторую кнопку(кнопка поворот), то вся доска с ячейками зеркально по вертикали отображается.

window.onload = function() {
	for (var i = 0; i < 36; i++) {
		document.getElementById('cage').innerHTML += '<span class="cell"></span>';
	}
	document.getElementById('cage').onclick = function(event) {
		if (event.target.tagName == 'SPAN') {
			event.target.classList.toggle('bg');
		}
	}
	document.getElementById('btn-timer').onclick = function() {
		var time = 0;
		var timer = setInterval(function(){
			time += 1;
			document.getElementById('result').innerHTML = time;
		}, 1000);
	}
	document.getElementById('btn-rotate').onclick = function() {
		document.getElementById('cage').classList.toggle('rotateX');
	}
}