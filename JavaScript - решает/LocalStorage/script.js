window.onload = function() {
	if (localStorage.getItem('bgColor') !== null) {
		var bgColor = localStorage.getItem('bgColor');
		document.getElementsByTagName('span')[0].style.backgroundColor = bgColor
	}

	document.getElementById('green').onclick = function() {
		document.getElementsByTagName('span')[0].style.backgroundColor = 'green'
		localStorage.setItem('bgColor','green');
	}
	document.getElementById('red').onclick = function() {
		document.getElementsByTagName('span')[0].style.backgroundColor = 'red';
		localStorage.setItem('bgColor','red');
	}
}