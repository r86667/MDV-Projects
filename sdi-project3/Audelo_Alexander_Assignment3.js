//alert("JavaScript works!");

// SDI 1301
// 01/24/2013
// Alexander Audelo
// Project 3: Mexico Trip


var json = {
        "tickets": [
            {
                "tNum": "11345",
                "name": "Jose",
                "bGroup" : "B",
                "fNum": "1009",
                "tCost": "145"
            },
            {
                "tNum": "11346",
                "name": "Arnold",
                "bGroup" : "A",
                "fNum": "1009",
                "tCost": "140"
            },
            {
                "tNum": "11347",
                "name": "Isabel",
                "bGroup" : "A",
                "fNum": "1009",
                "tCost": "130"
            },
        ]
    };


// Stringifies Javascript
var jsonstring = JSON.stringify(json);

// Objectivies Javascript
var receivedjson = JSON.parse(jsonstring);

// Global Variables
var vacationDest = "Mexico D.F.";
var chosenAirline = "SouthWest"
var cheapestAirline = true;
var purchasedTickets = true;
var travelers = receivedjson["tickets"];

//Start 
// Object
var vacation = {
    direction: "West",
    destination: "Mexico D.F.",// property
    airline: ["Southwest", "Delta", "American Airlines"],
    narration: function(story){
        console.log(story);
    },
    
    checkAirlines: function(cheapestAirline) {
        var ourAirline = cheapestAirline;
	if (ourAirline === true) {
	    vacation.narration("The cheapest airline is " + chosenAirline +". Which is who we chose to travel with to " +  vacation.destination);
	} else {
	    vacation.narration("We normally travel with" +chosenAirline +". However they were not the cheapest.");
        };
},
    
    // Method Procedure 
    ticketCount: function(ourAirline, travelers) {
	if (ourAirline === true) {
	    vacation.narration("We have purchased our tickets with " +cheapestAirline + "There will be");
	    for (var t=0; t <= travelers.length; t++){
		var totalTravelers= t;
                vacation.narration(totalTravelers);
	    }
	    vacation.narration("people going together.");
		return totalTravelers;
	} else {
	    vacation.narration("We did not purchase our tickets yet. We are comparing a few more airlines!");
	};
    },
