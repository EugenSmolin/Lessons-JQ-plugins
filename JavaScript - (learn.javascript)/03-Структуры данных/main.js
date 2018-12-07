// === СТРУКТУРЫ ДАННЫХ === //
window.onload = function () {

  // Числа
  /*console.log(0xFF); // 255 в шестнадцатиричной системе
  console.log(1e5); // 100000
  console.log(2e-2); // 0.02

  console.log(5 / 0); // деление на ноль даёт бесконечность Infinity
  // var inf = Infinity;
  console.log(33 / Infinity); // 0
  console.log(Infinity == Infinity); // true

  console.log(isNaN('10')); // false
  console.log(isNaN('Fog')); // не число true

  console.log(isFinite(20)); // true
  console.log(isFinite('true')); // false
  console.log(~~12.6); // округяет до целого числа
  console.log(15.36 ^ 0); // округяет до целого числа
  console.log(Math.pow(3, 3)); // 27
  console.log(Math.round(Math.random(0, 100) * 100));*/

  // Задачи
  /*var a = +prompt('Введите превое число:', '');
  var b = +prompt('Введите второе число:', '');

  var res = a + b;
  console.log(res);

  console.log(+(0.1 + 0.2).toFixed(2));*/

  // Строки
  // indexOf
  /*var arr = ['Январь', 'Февраль','Март','Апрель'];
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i].indexOf('Март'));
    if (arr[i].indexOf('Март') >= 0) {
      console.log(arr[i]);
    }
  }*/

  /*var str = "Widget with id";
  console.log(str.indexOf('Widget'));
  console.log(str.indexOf('with'));
  console.log(str.indexOf('id', 2));

  var word = 'Widget';
  if (~word.indexOf('get')) {
    console.log('Совпадения есть');
  }*/

  /*var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
  var target = "Иа"; // цель поиска

  var pos = 0;
  while (true) {
    var foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    console.log(foundPos);
    console.log(foundPos);
    pos = foundPos + 1;
  }*/

  /*var str = 'stringify';
  console.log(str.substring(2));*/

  /*var str = 'stringify';
  console.log(str.substr(2, 4));*/

  /*var str = 'testme';
  console.log(str.slice(0,-2));

  console.log('а'.charCodeAt(0));
  console.log('я'.charCodeAt(0));
  console.log('А'.charCodeAt(0));
  console.log('Я'.charCodeAt(0));*/

  // 1 задача
  /*function ucFirst(_str) {
    if (!_str) return _str;
    return _str[0].toUpperCase() + _str.slice(1);
  }

  console.log(ucFirst('вася'));
  console.log(ucFirst('jackie'));

  // 2 задача
  function checkSpam(_str) {
    var viagra = 'viagra';
    var xxx = 'xxx';

    _str = _str.toLowerCase();

    if (_str.indexOf(viagra) >= 0 || _str.indexOf(xxx) >= 0) {
      return true;
    }
    return false;
  }

  console.log(checkSpam('buy ViAgRA now'));
  console.log(checkSpam('free xxxxx'));
  console.log(checkSpam("innocent rabbit"));

  // 3 задача
  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 3) + '...' : str;
  }

  console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
  console.log(truncate('Всем привет!', 20));

  // 4 задача
  function extractCurrencyValue(str) {
    return +str.slice(1);
  }

  console.log(extractCurrencyValue('$250'));
  console.log(extractCurrencyValue('$1204'));*/

  // Объекты как ассоциативные массивы
  /*var obj = {
    name: 'Евгений',
    work: true
  };

  console.log(obj);
  console.log('name' in obj); // true
  console.log('age' in obj); // false
  delete obj.work; // удаляет элемент
  console.log(obj);

  var person = {};
  person.age = 25;
  var key = 'age';

  console.log(person[key]);

  // Задача
  var user = {
    name: 'Вася',
    surname: 'Петров'
  };

  console.log(user);

  user.name = 'Сергей';
  delete user.surname;

  console.log(user);*/


  // =====
  /*var menu = {
    title: 'Menu',
    width: 300,
    height: 200
  };
  var counter = 0;

  for (var key in menu) {
    console.log('Свойство: ' + key + ', значение: ' + menu[key]);
    counter++;
  }

  console.log('Количество свойств: ' + counter);*/

  // Задачи
  function isEmpty(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }

  var schedule = {};
  console.log(isEmpty(schedule));
  schedule['8:30'] = 'подъем';
  console.log(isEmpty(schedule));

  // 2
  "use strict";

  var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };

  /*var sum = 0;
  for (var key in salaries) {
    sum += salaries[key];
  }

  console.log(sum);*/

  // 3

  var maxSum = 0;
  var name = '';
  for (var key in salaries) {
    if (maxSum < salaries[key]) {
      maxSum = salaries[key];
      name = key;
    }
  }
  console.log(name || 'Нет сотрудников');


};











