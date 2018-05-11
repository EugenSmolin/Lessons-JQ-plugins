window.onload = function() {
	var radio = document.getElementsByName('fruits');
	for (var i = 0; i < radio.length; i++) {
		radio[i].onchange = testRadio;
	}
	function testRadio() {
		console.log(this.value);
	}

	document.getElementById('one').onclick = function() {
		var arrRadio = document.getElementsByName('fruits');
		for (var i = 0; i < arrRadio.length; i++) {
			if (arrRadio[i].checked) {
				alert(arrRadio[i].value);
				break;
			}
		} 
	}
}