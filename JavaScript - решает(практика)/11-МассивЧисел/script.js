// чистим массив чисел
let size = ['15px','12pt','34em','-3px','2%'];

function toNum(arr) {
	let out = [];
	for (var i = 0; i < arr.length; i++) {
		arr[i] = parseFloat(arr[i]);
		if (arr[i] >= 0) {
			out.push(arr[i]);
		}
	}
	out.sort(function(a,b) {
		return a - b;
	});
	return out;
}
console.log(toNum(size));