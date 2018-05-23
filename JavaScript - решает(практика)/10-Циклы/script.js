// циклы (for)
/*
var result = document.getElementById('result');
for (var i = 1; i <= 9; i++) {
	result.innerHTML += '7 * ' + i + ' = ' + 7*i + '<br>';
}
*/
/*
var result = document.getElementById('result');
for (var i = 7000; i <= 10000; i++) {
	result.innerHTML += '&#' + i + ' ';
}
*/

// Задача
// Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).
var result = document.getElementById('result');
var sum = 0;
for (var i = 0; i <= 100; i++) {
	sum += i;
}
console.log('Сумма чисел:');
console.log(sum);

// С помощью цикла вывести произведение чисел от 1 до 50.
var mult = 1;
for (var i = 1; i < 10; i++) {
	mult *= i;
	// mult = mult * i;
}
console.log('Произведение чисел:');
console.log(mult);