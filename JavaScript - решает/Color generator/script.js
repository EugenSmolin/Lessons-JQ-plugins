window.onload = function() {
	// var stop;
	// document.getElementById('btn').onclick = function() {
	// 	stop = setInterval(start, 1000);
	// }
	// document.getElementById('btn-stop').onclick = function() {
	// 	clearInterval(stop);
	// }

	//function start() {
	document.getElementById('btn').onclick = function() {
		var randomColor = Math.floor(Math.random() * 1000000);
		var color = document.getElementById('color');
		var hex = document.getElementById('hex');
		var bgColor = '#' + randomColor;
		color.style.backgroundColor = bgColor;
		hex.innerHTML = bgColor;
	}
}