// номер подъезда
// 1-й - с 1 по 20
// 2-й - с 21 по 48
// 3-й - с 49 по 90
document.getElementById('btn').onclick = function() {
	var num = document.getElementById('input').value;
	var result = document.getElementById('result');
	num = parseInt(num);
	if (num >= 1 && num <= 90) {
		if (num >= 0 && num <= 20) {
			result.innerHTML = 'Квартира находятся в 1-м подъезде.';
		} else if (num >= 21 && num <= 48) {
			result.innerHTML = 'Квартира находятся во 2-м подъезде.';
		} else if (num >= 49 && num <= 90) {
			result.innerHTML = 'Квартира находятся в 3-м подъезде.';
		}
	} else {
		result.innerHTML = 'Введите число от 1 до 90!';
	}

	console.log(num);
	document.getElementById('input').value = '';
}