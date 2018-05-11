window.onload = function() {
	function userProgress(time) {
		var start = 0;
		var progressElement = document.getElementById('user-progress');
		setInterval(function() {
			progressElement.value = start;
			start++;
		}, time);
	}
	userProgress(200);
}