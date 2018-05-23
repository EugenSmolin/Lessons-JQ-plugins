window.onload = function() {
	
	var arr = [3,12];
	var result = [];
	for (var i = arr[0]; i <= arr[1]; i++) {
		result.push(i);
	}
	console.log(result);

	// заполнение массива с сортировкой
	let mass = [18, 0, 8, -6];
	let massNew = [];
	mass.sort(function(a,b) {
		return a - b;
	});
	//console.log(mass);
	for (let i = mass[0]; i <= mass[mass.length - 1]; i++) {
		massNew.push(i);
	}
	console.log('massNew:' + massNew);﻿

}