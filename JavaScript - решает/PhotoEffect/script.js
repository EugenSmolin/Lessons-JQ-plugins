window.onload = function() {
	document.getElementById('myslide').onmousemove = function(event) {
		var x = event.offsetX; // координаты относительно родителя
		//console.log(x);
		document.getElementById('two').style.width = x + 'px';
	}
}