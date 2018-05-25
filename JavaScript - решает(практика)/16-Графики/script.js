// Графики Chart.js
window.onload = function() {
	
	var ctxMyChart = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctxMyChart, {
	    // The type of chart we want to create
	    type: 'bar',

	    // The data for our dataset
	    data: {
	        labels: ["January", "February", "March", "April", "May", "June"],
	        datasets: [{
	            label: "My First dataset",
	            backgroundColor: ['red','blue','yellow','green','pink','orange'],
	            //borderColor: 'grey',
	            //borderWidth: 1,
	            data: [4, 10, 5, 2, 20, 30],
	        }]
	    },

	    // Configuration options go here
	    options: {}
	});

	// ============== doughnut, pie
	var ctxPie = document.getElementById('pie').getContext('2d');
	var pie = new Chart(ctxPie, {
	    // The type of chart we want to create
	    type: 'pie',

	    // The data for our dataset
	    data: {
	        labels: ["Python", "Java", "PHP", "JavaScript", "C++", "C#"],
	        datasets: [{
	            label: "Languages",
	            backgroundColor: ['red','blue','yellow','green','pink','orange'],
	            borderColor: 'white',
	            data: [2, 10, 15, 5, 20, 45],
	        }]
	    },

	    // Configuration options go here
	    options: {}
	});

	// =================== line
	var ctxLine = document.getElementById('line').getContext('2d');
	var line = new Chart(ctxLine, {
	    // The type of chart we want to create
	    type: 'line',

	    // The data for our dataset
	    data: {
	        labels: [2012,2013,2014,2015,2016,2017,2018],
	        datasets: [{
	            label: "Year",
	            backgroundColor: 'transparent',
	            borderColor: 'red',
	            borderWidth: '3',
	            data: [0, 10, 15, 5, 20, 25, 30],
	        }]
	    },

	    // Configuration options go here
	    options: {}
	});

	// ============== mixedChart
	var ctxMixedChart = document.getElementById('mixedChart').getContext('2d');
	var mixedChart = new Chart(ctxMixedChart, {
	    type: 'bar',
	    data: {
	    	labels: ['January', 'February', 'March', 'April', 'May'],
	    	datasets: [{
	            label: 'Bar Dataset',
	            backgroundColor: 'rgba(23,14,156,0.4)',
	            borderColor: 'rgba(23,14,156,0.6)',
	            borderWidth: 3,
	            data: [10, 20, 15, 30, 40],
	        }, 
	        {
	            label: 'Line Dataset',
	            backgroundColor: 'transparent',
	            borderColor: 'green',
	            borderWidth: 2,
	            data: [0, 40, 30, 50, 45],

	            // Changes this dataset to become a line
	            type: 'line'
	        }]
	    },
	    options: {}
	});
	
}