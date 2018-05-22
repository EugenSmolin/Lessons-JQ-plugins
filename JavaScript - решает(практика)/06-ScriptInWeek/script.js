// запустить скрипт через неделю
//window.onload = function() {

	function alertInfo() {
		alert('Warning!');
		document.getElementsByTagName('body')[0].style.display = 'none';
	}

	function checkTime() {
		var timeInSec = Math.round(new Date() / 1000);
		if (timeInSec > 1526910000) {
			alertInfo();
		}
		console.log(timeInSec);
	}

	checkTime();
//}