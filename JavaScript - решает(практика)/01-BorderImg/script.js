window.onload = function() {
	document.onclick = function(event) {
		//console.log(event.target.tagName);
		if (event.target.tagName == 'IMG') {
			event.target.classList.add('bordered');
		}
	}
	document.oncontextmenu = function(event) {
		//console.log(event.target.tagName);
		if (event.target.tagName == 'IMG') {
			event.target.classList.remove('bordered');
		}
		return false;
	}
}