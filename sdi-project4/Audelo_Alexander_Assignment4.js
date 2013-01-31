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
