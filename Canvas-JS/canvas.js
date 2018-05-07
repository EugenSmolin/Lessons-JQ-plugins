// Урок 1 - отрисовка прямоугольников
// ======
/*var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(50,50,200,100);
ctx.fillStyle = 'green';
ctx.fillRect(100,100,200,100);
//ctx.clearRect(0,0,400,200); // стирает (очищает) поле canvas

ctx.rect(25,25,100,100);
ctx.strokeStyle = '#000';
ctx.lineWidth = '5';
ctx.stroke(); // отрисовывает элемент на поле
ctx.fillStyle = '#ccc';
ctx.fill();*/

// Урок 2 - отрисовка линий
// ======
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = 'red';
ctx.lineWidth = '5';
ctx.moveTo(50,50);
ctx.lineTo(100,100);
ctx.stroke();

ctx.lineTo(150,50);
ctx.stroke();