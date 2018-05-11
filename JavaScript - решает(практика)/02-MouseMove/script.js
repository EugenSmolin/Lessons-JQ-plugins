window.onload = function() {
	// Координаты мыши внутри блока
	document.querySelector('#block').onmousemove = function(event) {
		event = event || window.event;
		document.getElementById('resultX').innerHTML = event.offsetX;
		document.getElementById('resultY').innerHTML = event.offsetY;
	}
}