'use strict'

// bucle while

var year = 2018;

while(year <= 2051){
	// ejecuta esto
	console.log("estamos en el año: " + year);

	year++;

}
var year = 2018;

while(year != 1991){
	// ejecuta esto
	console.log("estamos en el año: " + year);

	year--;

}

// do while

var years = 30;

do{
	alert("solo cuando sea mayor a 25 - valor " + years);
		years--;

}while(years >25)

// uso de break

var year = 2018;

while(year != 1991){
	// ejecuta esto
	console.log("uso del break estamos en el año: " + year);

	if(year == 2000){;
		break;
	}

	year--;

}