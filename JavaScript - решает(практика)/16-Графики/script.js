// Графики Chart.js
window.onload = function() {
	
	var myBarChart = new Chart(ctx, {
	    type: 'bar',
	    data: data, // массив значений
	    options: options
	});
	
}