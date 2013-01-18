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
	
	function setHoursSlept(wellSlept) {
		if ( wellSlept ) {
			housSlept = 8;
	    } else {
			hoursSlept = 5;
	    }
}

// Number Function
function wakeUp(hoursSlept) {
	if (hoursSlept >= 8) {
	return "Well rested for the Zoo!";
	} else {
	return "It's going to be a long day because I did not get enough sleep.";
	}
}

// Array Function
function goSeeingAnimal (theAnimals, facesMade) {
var seeingAnimals = new Array (theAnimals.length);
for (var i = 0; i < theAnimals.length; i++) {
seeingAnimals[i] = "When we saw the " + theAnimals[i] + " " + "we" + " " + facesMade[i];
}
return seeingAnimals
}

// Boolean Function
function question(theAnimals) {
if (animals.indexOf('Tiger') >= 0){
return "Dad asked us if we got to see the tigers and we answered, we saw the tigers and we were scared of them.";
} else {
return "Dad asked us if we got to see the tigers and we answered, we wanted to see the tigers but were unable.";
}
}

// String Function
function myfunction(excitment){
var concatination = excitment;
if (excitment === "Yay! we are going to the zoo!"){
	concatination += "can't wait to get there!";
	} else { 
	concatination += ", we want to see more animals.";
}
return concatination;
}

setHoursSlept(wellSlept);
console.log(wakeUp(hoursSlept));
console.log(myfunction("Yay! we are going to the zoo!"));
animalsWeSaw = goSeeingAnimal(animals, faces);
for ( var x in animalsWeSaw ) {
console.log(animalsWeSaw[x]);
}
console.log(myfunction(leavingTheZoo));
console.log(question(animals));
