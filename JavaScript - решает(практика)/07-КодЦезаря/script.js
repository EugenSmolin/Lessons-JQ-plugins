// код цезаря
document.getElementById('in').oninput = function() {
	// === код для шифрования ===
	var offset = 3;
	var result = document.getElementById('result');
	// из кода в символ
	//result.innerHTML = String.fromCharCode(97);
	var str = this.value;

	// из символа в код
	// console.log(str.charCodeAt(0));
	var out = '';
	for (var i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i);
		code += offset;
		out += String.fromCharCode(code);
	}
	result.innerHTML = out;
}

document.getElementById('in2').oninput = function() {
	// === код для расшифрования ===
	var offset = 3;
	var result2 = document.getElementById('result2');
	var str = this.value;
	var out = '';
	for (var i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i);
		code -= offset;
		out += String.fromCharCode(code);
	}
	result2.innerHTML = out;
}