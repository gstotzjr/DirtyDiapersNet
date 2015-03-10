google.load("visualization", "1", {packages:["timeline"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
	var container = document.getElementById('timeline');
	var chart = new google.visualization.Timeline(container);
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn({ type: 'string', id: 'Type' });
	dataTable.addColumn({ type: 'string', id: 'Name'});
	dataTable.addColumn({ type: 'date', id: 'Start' });
	dataTable.addColumn({ type: 'date', id: 'End' });
	dataTable.addRows([
		[ 'Poops',	'First Poop',	new Date(0,0,0,8,0,0),	new Date(0,0,0,8,1,0) ],
		[ 'Poops',	'Second Poop',	new Date(0,0,0,12,0,0),	new Date(0,0,0,12,1,0) ],
		[ 'Pees',	'First Pee',	new Date(0,0,0,11,30,0),	new Date(0,0,0,11,31,0) ],
		[ 'Pees',	'Second Pee',	new Date(0,0,0,16,0,0),	new Date(0,0,0,16,1,0) ],
		[ 'Pees',	'Third Pee',	new Date(0,0,0,18,20,0),	new Date(0,0,0,18,21,0) ],
		[ 'Feedings',	'First Feed',	new Date(0,0,0,14,0,0),	new Date(0,0,0,14,30,0) ]
		]);

	var options = {
		tooltip: { trigger: 'none' },
		enableInteractivity: false
	};

	chart.draw(dataTable, options);
}