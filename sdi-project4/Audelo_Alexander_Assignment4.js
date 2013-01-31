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

// Problem 4: Is the string a URL? (Does it start with http: or https:?)

var urlCheck = function (string) {
	var url = string,
		check = "",
		checkArray = [],
		end = url.indexOf(":");

	checkArray[0] = "http:";
	checkArray[1] = "https:";

	check = url.substring(0, end + 1);

	if (check === checkArray[0]) {
		return (url + " is a valid URL.");
	}
	else if (check === checkArray[1]) {
		return (url + " is a valid URL.");
	}
	else {
		return (url + " is not a valid URL.");
	}
}

// Problem 5: Does a string follow an aaa@bbb.ccc pattern like an email address?

var emailCheck = function (localEmail) {
	var email = localEmail,
		checkAt = 0,
		checkDot = 0;

	checkAt = email.indexOf("@");
	checkDot = email.indexOf(".");

	if (checkAt != -1 && checkDot != -1) {
		if (checkAt < checkDot) {
			if (checkDot - checkAt != 1) {
				return (email + " is a valid email.");
			}
			else {
				return (email + " is not a valid email.");
			}
		}
		else {
			return (email + " is not a valid email.");
		}
	}
	else {
		return (email + " is not a valid email.");
	}	
}

