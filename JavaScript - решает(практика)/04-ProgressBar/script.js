window.onload = function() {
	function userProgress(time) {
		var start = 0;
		var time = Math.round(time * 1000 / 100);
		var progressElement = document.getElementById('user-progress');
		var intervalId = setInterval(function() {
			if (start > 100) {
				clearInterval(intervalId);
			} else {
				progressElement.value = start;
			}
			start++;
		}, time);
	}
	userProgress(2); // устанавливаем кол-во секунд
}