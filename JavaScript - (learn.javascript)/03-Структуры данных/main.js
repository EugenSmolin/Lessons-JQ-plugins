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
  function ucFirst(_str) {
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

};











