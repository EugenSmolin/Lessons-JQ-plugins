window.onload = function() {
	setInterval(sec, 1000);

	var sec = 0;
	var min = 0;

	function sec() {
		document.getElementById('sec').style.transform = 'rotate(' + sec + 'deg)';
		document.getElementById('min').style.transform = 'rotate(' + min + 'deg)';
		sec += 6;
		if ((sec + 6) == 366) {
			sec = 0;
			min += 6;
		}
	}
}