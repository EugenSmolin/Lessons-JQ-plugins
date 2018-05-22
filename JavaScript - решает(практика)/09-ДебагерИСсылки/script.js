// дебагер и ссылки
var link = document.getElementsByTagName('a'); // мы получаем массив ссылок! (коллекция элементов)
for (var i = 0; i < link.length; i++) {
	if (link[i].getAttribute('href') == '#') {
		link[i].style.color = 'red';
	}
}

//[...document.querySelectorAll('a')].filter(item => item.getAttribute('href') === '#').forEach(item => item.style.color = 'red');﻿