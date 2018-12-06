// === 01-Основы JS === //
window.onload = function () {

  // console.log(String(null)); // преобразование в строку
  // console.log(null);
  //
  // console.log(Number("15")); // преобразование в число
  // console.log(+"23"); // преобразование в число
  // console.log(16);

  // цикл while
  /*var i = 0;
  while (++i < 5) {
    console.log(i);
  }

  console.log('======');

  var j = 0;
  while (j++ < 5) {
    console.log(j);
  }*/

  // цикд for
  /*for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }*/

  /*for (var i = 0;; i++) {
    var num = prompt('Введите сичло больше 100!', '');
    if (num < 100 || num === null) {
      continue;
    } else {
      console.log(num);
      break;
    }
  }

  var numb;
  do {
    numb = prompt('Введите сичло больше 100!', '');
  } while (numb <= 100 || numb === null) {
    console.log(numb);
  }*/

  /*nextPrime:
    for (var i = 2; i <= 20; i++) {

      for (var j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }

      console.log(i); // простое
    }*/


  // конструкция switch
  /*var a = 1,
      b = 2;
  switch(3) {
    case b + a:
      console.log('Ok!');
      break;

    default:
      console.log('Ops!');
  }*/

  /*var arg = parseInt(prompt('Введите число от 0 до 2', ''));
  switch (arg) {
    case 0:
    case 1:
    case 2:
      console.log('Верно!');
      break;

    default:
      console.log('Число должно быть от 0 до 2');
  }*/

  /*var a = +prompt('a?', '');
  switch (a) {
    case 0:
      alert(0);
      break;
    case 1:
      alert(1);
      break;
    case 2:
    case 3:
      alert('2,3');
      break;
    default:
      alert('Ops');
  }*/

  /*var i = 12;
  switch (true) {
    case (i < 50):
      alert('Мало!');
      break;

    case (i > 50):
      alert('Много!');
      break;

    case (i == 50):
      alert('В точку!');
      break;

    default:
      alert('Что то пошло не так!');
  }*/


  // Функции
  // функция начинается с глагола - createButton()
  /*function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

  var age = prompt('Введите ваш возвраст:');

  console.log(checkAge(age));*/

  /*function returnMinNum(a, b) {
    if (a < b) {
      return a;
    }
    return b;
  }

  console.log(returnMinNum(2,6));
  console.log(returnMinNum(5,-2));
  console.log(returnMinNum(10,85));*/

  /*function pow(x, n) {
    var result = x;
    if (n >= 0) {
      for (var i = 1; i < n; i++) {
        result *= x;
      }
    } else {
      return 'Степень должна быть больше 1';
    }

    return result;
  }

  console.log(pow(2, 2)); // 4
  console.log(pow(2, 3)); // 8
  console.log(pow(2, 4)); // 16
  console.log(pow(3, 3)); // 27*/

  // Функциональные выражения
  /*var func = function () {
      return 'Hello ';
    },
    world = function () {
      return 'World!';
    };

  console.log(func());
  console.log(world());*/

  /*function ask(question, yes, no) {
    confirm(question) ? yes() : no();
  }

  ask(
    "Вы согласны?",
    function () {
      alert("Вы согласились.");
    },
    function () {
      alert("Вы отменили выполнение.");
    }
  );

  // newFunction();
  var sum = new Function('a, b', 'return a + b;');
  var result = sum(6, 3);
  console.log(result);*/


  // Рекурсия, стэк
  /*function pow(x, n) {
    if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
      return x * pow(x, n - 1);
    } else {
      return x;
    }
  }

  alert(pow(2, 4)); // 16*/

  /*function sumTo(num) {
    var result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    return result;
  }

  console.log(sumTo(100)); // 5050

  function sumToRec(num) {
    if (num != 1) {
      return num + sumToRec(num - 1);
    } else {
      return num;
    }
  }

  console.log(sumToRec(100));

  function sumToAlg(num) {
    return num * (num + 1) / 2;
  }

  console.log(sumToAlg(100));*/

  /*function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
  }

  console.log(factorial(5)); // 120*/



};
























