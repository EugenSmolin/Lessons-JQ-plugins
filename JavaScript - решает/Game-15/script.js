window.onload = function() {
	var rect = document.getElementById('rect');
	for (var i = 1; i < 17; i++) {
		rect.innerHTML += '<div id="num_block">' + i + '</div>';
	}
}