//alert("JavaScript works!");

// SDI 1301
// 01/31/2013
// Alexander Audelo
// Project 4: Library


// Problem 1: Find the smallest value in an array that is greater than a given number

var smallValue = function(numArray, number) {
	var largerNums = [],
		smallestNum;

	for (i = 0; i < numArray.length; i++) {
		if (numArray[i] > number) {
			largerNums.push(numArray[i]);
		}
	}

	smallestNum = largerNums[0];

	for (j = 0; j < largerNums.length; j++) {
		if (smallestNum > largerNums[j]) {
			smallestNum = largerNums[j];
		}
	}

	return ("The smallest number that is greater than " + number + " is " + smallestNum + ".");
}

// Problem 2: Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10


var specificDec = function (number) {
	var newNumber;

	newNumber = number.toFixed(2);

	return (number + " has been rounded to " + newNumber);	
}

// Problem 3: Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

var charReplace = function (string, oldChar, newChar) {
	var myString = string,
		old = new RegExp(oldChar, "g");

	myString = myString.replace(old, newChar);

	return myString;
}

