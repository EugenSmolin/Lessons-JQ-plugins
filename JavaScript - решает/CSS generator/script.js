window.onload = function() {
	document.getElementById('range').oninput = cssGenerator;
	function cssGenerator() {
		var rect = document.getElementById('rect');
		var out = document.getElementById('out');
		//console.log(this.value);
		out.innerHTML = '-webkit-border-radius: ' + this.value + 'px;\n';
		out.innerHTML += 'border-radius: ' + this.value + 'px;';
		rect.style.borderRadius = this.value + 'px';
	}
}