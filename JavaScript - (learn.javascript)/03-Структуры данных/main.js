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
  /*function isEmpty(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }

  var schedule = {};
  console.log(isEmpty(schedule));
  schedule['8:30'] = 'подъем';
  console.log(isEmpty(schedule));*/

  // 2
  /*"use strict";

  var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };

  var sum = 0;
  for (var key in salaries) {
    sum += salaries[key];
  }

  console.log(sum);*/

  // 3
  /*var maxSum = 0;
  var name = '';
  for (var key in salaries) {
    if (maxSum < salaries[key]) {
      maxSum = salaries[key];
      name = key;
    }
  }
  console.log(name || 'Нет сотрудников');*/

  // 4
  /*var menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  function multiplyNumeric(obj) {
    for (var key in obj) {
      if (isNumeric(obj[key])) {
        obj[key] *= 2;
      }
    }
  }

  multiplyNumeric(menu);

  console.log(menu);*/

  // Объекты: передача по ссылке
  /*var user = {
    name: 'Vasia'
  };
  var admin = user; // ссылка на объект
  admin.name = 'Jack';
  console.log(user);
  console.log(admin);*/

  /*var user = {
    name: 'Вася',
    age: 21
  };
  var clone = {};
  for (var key in user) {
    clone[key] = user[key];
  }
  clone.name = 'Петя';
  console.log(user);
  console.log(clone);

  var time = {
    year: 2345,
    month: 11,
    day: 10,
    hour: 11,
    minute: 12,
    second: 13,
    microsecond: 123456
  };

  console.log(time); // (*)
  time.microsecond++; // (**)

  console.log(time);
  time.microsecond++;

  console.log(time);
  time.microsecond++;*/


  // Массивы с числовыми индексами
  // pop - Удаляет последний элемент из массива и возвращает его
  // push - Добавляет элемент в конец массива
  // shift - Удаляет из массива первый элемент и возвращает его
  // unshift - Добавляет элемент в начало массива

  // Задачи
  /*var styles = ['Джаз', 'Блюз'];
  console.log(styles);
  styles.push('Рок-н-ролл');
  console.log(styles);
  styles[styles.length - 2] = 'Классика';
  console.log(styles);
  console.log(styles.shift());
  console.log(styles);
  styles.unshift('Рэп', 'Регги');
  console.log(styles);*/

  // 2
  /*var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
  var rand = Math.floor(Math.random() * arr.length);
  console.log(arr[rand]);*/

  // 3
  /*var arr = [];
  while (true) {
    var num = prompt('Введите число', '');
    // console.log(isNaN(num)); // возвращает true при num = не число
    if (num == null || num == '' || isNaN(num)) {
      break;
    }
    arr.push(+num);
  }
  console.log(arr);
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);*/

  // 4
  /*var arr = ["test", 2, 1.5, false];

  function find(_arr, _value) {
    if (_arr.indexOf) {
      return _arr.indexOf(_value);
    }

    for (var i = 0; i < _arr.length; i++) {
      if (_arr[i] === _value) return i;
    }

    return -1;
  }

  console.log(find(arr, "test")); // 0
  console.log(find(arr, 2)); // 1
  console.log(find(arr, 1.5)); // 2
  console.log(find(arr, 0)); // -1*/

  // создаем пустой массив и проверяем поддерживается ли indexOf браузером
  var arr = ["test", 2, 1.5, false];

  if ([].indexOf) {
    var find = function (arr, value) {
      return arr.indexOf(value);
    }
  } else {
    var find = function (arr, value) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
      }
      return -1;
    }
  }

  console.log('value - ' + find(arr, 1.5)); // 2

  // 5
  var arr = [5, 4, 3, 8, 0, 6, 4];
  function filterRange(arr, a, b) {
    var filtered = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= a && arr[i] <= b ) {
        filtered.push(arr[i]);
      }
    }
    return filtered;
  }

  console.log(filterRange(arr, 3, 6));
  // теперь filtered = [5, 4, 3]
  // arr не изменился


  // Массивы: методы
  // split()
  var names = 'Маша, Петя, Марина, Николай';
  var arr = names.split(', ');
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }


};











