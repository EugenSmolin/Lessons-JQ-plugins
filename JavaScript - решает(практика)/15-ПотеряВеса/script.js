// Потеря веса на 5%
window.onload = function() {
	
	var initialWeight = 90;
	var targetWeight = 50;
	while(initialWeight > targetWeight) {
		initialWeight -= initialWeight * 0.05;
		console.log(Math.round(initialWeight));
	}
	
}