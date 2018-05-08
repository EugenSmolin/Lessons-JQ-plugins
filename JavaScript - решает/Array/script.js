window.onload = function() {
	var myArr = ['Привет', 568, 'Слово', true];
	console.log(myArr);

	function masOut() {
		var p = document.getElementById('out');
		var str = '';
		for (var i = 0; i < myArr.length; i++) {
			str += i + ' - ' + myArr[i] + '<br/>';
		}
		p.innerHTML = str;
	}

	masOut();

	document.getElementById('btn-add').onclick = function() {
		var input = document.getElementById('input').value;
		myArr.push(input);
		masOut();
		document.getElementById('input').value = '';
		console.log(myArr);
	}
	document.getElementById('btn-delete').onclick = function() {
		myArr.pop();
		masOut();
		console.log(myArr);
	}

	
}