window.onload = function() {
	/*var myArr = [4, 'Строка', 15];
	console.log(myArr);

	var myObj = {
		"one": 45,
		"two": "Word",
		"tree": 568,
		"double key": 665
	};*/
	// console.log(myObj);
	// console.log(myObj['double key']); // способ вывода слов с пробелом
	// var test = 'two';
	// console.log(myObj[test]); // 
	// === 
	/*var out = document.getElementById('out');
	for (var key in myObj) {
		out.innerHTML += key + ' - ' + myObj[key] + '<br>';
	}*/

	// ======
	// Задачи на ассоциативные массивы
	// Задача 1
	/*var out = document.getElementById('out');
	var man = {
		"name": "Евгений",
		"age": 28,
		"gender": "Мужской",
		"id": 665
	};
	console.log(man);
	for (var key in man) {
		out.innerHTML += key + ' - ' + man[key] + '<br>'; 
	}*/

	// Задача 2
	var man = {
		name: "Евгений",
		age: 28,
		gender: "Мужской",
		id: 665,
		year: function() {
			return 2018 - this.age;
		}
	};
	console.log(man.year());

	// Задача 3
	var myArr = {
		mas: [5, 6, 34, 12, 45],
		sum: function() {
			var sum = 0;
			for (var i = 0; i < this.mas.length; i++) {
				sum += this.mas[i];
			}
			return sum;
		}
	}
	console.log(myArr.sum());
}