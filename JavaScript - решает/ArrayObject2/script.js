window.onload = function() {
	var vegetebles = {
		"28292": {
			"name": "Банан",
			"cost": 30,
			"img": "https://cdn0.iconfinder.com/data/icons/fruits/128/Banana.png",
			"sklad": "Да"
		},
		"28293": {
			"name": "Помидор",
			"cost": 15,
			"img": "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
			"sklad": "Нет"
		},
		"28294": {
			"name": "Клубника",
			"cost": 25,
			"img": "https://cdn0.iconfinder.com/data/icons/fruits/128/Strawberry.png",
			"sklad": "Да"
		}
	};
	console.log(vegetebles);
	var out = '';
	for (var key in vegetebles) {
		out += 'Название: ' + vegetebles[key].name + '<br>';
		out += 'Цена: ' + vegetebles[key].cost + '<br>';
		out += 'Наличие: ' + vegetebles[key].sklad + '<br>';
		// <img src="">
		out += '<img src="' + vegetebles[key].img + '">';
		out += '<hr>';
	}
	document.getElementById('out').innerHTML = out;
}