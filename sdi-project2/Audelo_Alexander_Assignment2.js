// alert("JavaScript works!");

// Alexander Audelo
// SDI Project 2
// 1/17/2013
// Visiting the Zoo


var animals = [
	"Elephant",
	"Tiger",
	"Monkey",
	"Girrafe"
	],
	goingToTheZoo = "We are going to the zoo today!",
	faces = ["stuck out our tongue.", "started to laugh.", "bug eyed looked at them.", "wanted to ride them."],
	leavingTheZoo = "Nooo we don't want to leave",
	hoursSlept = 8,
	wellSlept = true;
	
	function set hoursSlept(wellSlept) {
		if ( wellSlept ) {
			housSlept = 8;
	    }
		else {
			hourslept = 5;
	    }
}

// Number Function
function wakeUp ( hoursSlept) {
	if ( hoursSlept >= 8) 
	{
	return "Well rested for the Zoo!";
	}
	else {
	return "It's going to be a long day because I did not get enough sleep.";
	}
}

// Array Function
function goSeeingAnimal ( theAnimals, facesmade ) {
var seeingAnimals = new Array ( theAnimals.length );
for ( var i = 0; i < theAnimals.length; i+++ ) {
seeingAnimals [i] = "When we saw the" + theAnimals[i]
"we" + " " + facesMade[i];
}
return seeingAnimals
}

// Boolean Function
funcion question ( theAnimals ) {
if ( animals.indexOf ('Tiger') >= 0) {
return "Dad asked us if we got to see the tigers and we answered, we saw the tigers and we were scared of them.";
}
else {
return "Dad asked us if we got to see the tigers and we answered, we wanted to see the tigers but were unable.";
}
}

