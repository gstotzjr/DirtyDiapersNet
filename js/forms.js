// getting the user's location
var crds;
function getLocation() {
	if (navigator.geolocation) {
		function success(pos) {
			crds = pos.coords.latitude + " " + pos.coords.longitude;
		}
		function error(err) {
			console.log("Error (" + err.code + "): " + err.message);
		}
		navigator.geolocation.getCurrentPosition(success,error);
	} else {
		console.log("ERROR: Geolocation not supported");
	}
}
getLocation();

// error handling
function errorHandling(request, errorType, errorMessage) {
	alert("Error: " + errorType + " with message: " + errorMessage); 
}

// submitting a poo
$('#poo').on('click','button',function(event) {
	event.preventDefault();
	$.ajax($('#poo').attr('action'),{
		type: $('#poo').attr('method'),
		dataType: "json",
		error: errorHandling,
		timeout: 30000,
		data: {
			"wasteTime": $('#pooDate').val() + "T" + $('#pooTime').val() + ":00",
			"blowout": Boolean($('#pooBlow').val()),
			"color": $('#pooColor').val(),
			"coordinates": crds,
			"firmnessTypeId": $('#pooFirm').val(),
			"createdBy": null,
			"wasteType": "poo",
			"changer": null
		},
		contentType: "application/json",
		success: function(){ alert("Poo added successfully!"); }
	});
});

// submitting a pee
$('#pee').on('click','button',function(event) {
	event.preventDefault();
	$.ajax($('#pee').attr('action'),{
		type: $('#pee').attr('method'),
		dataType: "json",
		error: errorHandling,
		timeout: 30000,
		data:
			JSON.stringify({
				"wasteTime": $('#peeDate').val() + "T" + $('#peeTime').val() + ":00",
				"blowout": false,
				"color": $('#peeColor').val(),
				"coordinates": crds,
				"firmnessTypeId": null,
				"createdBy": null,
				"wasteType": "pee",
				"changer": null
			}),
		contentType: "application/json",
		success: function(){ alert("Pee added successfully!"); }
	});
});