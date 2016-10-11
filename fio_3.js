//keep looping through until userInput == randInt: 
var randInt2 = generateRandNum(1, 10); 
var userIn;
var userInput2;
console.log("randInt2 at the start is: " +randInt2);


getInput();

/*console.log(typeof(userIn));
console.log(typeof(userInput2));
console.log(typeof(randInt2));*/

	if (userInput2 === randInt2) {
		
		alert("Good Work");
	}

	else if (userInput2 === null) {
		alert("You don't want to play?");
	}

	else {
		while (userInput2 !== randInt2) {
			console.log("Yo!!");
			console.log("User Input inside the logic loop is: " + userInput2)
				
			if (userInput2 > randInt2) {
				userInput2 = prompt("Nope, guess lower");
			}
			else if (userInput2 < randInt2) {
				userInput2 = prompt("Nope, guess higher");
			}
			else {
				alert("You guessed right!!!");
				userInput2 = randInt2;
			}
		}
	}

function generateRandNum(min, max) {
	var randomNum = Math.floor(Math.random() * (max-min)) + min; //generates a random number between a range ~ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	console.log("Inside the random num gen function: " + randomNum);
	return randomNum;
	/*in order to truly reuise this function. don't set the value of global variable INSIDE the fuction, intead use the return keyword to return the value back to the 
	global variable (ex. line 2). 

	to track the value inside the fuction: create a local variable, set IT'S value to whatever the function is doing, return THAT variable back to the global var & console.log
	the local variable*/
}

function getInput() {
	userIn = prompt("Please guess a number between 1 and 10"); 

		if (userIn !== null) {
    		userInput2 = parseInt(userIn); //convert user input to correct data type: number
    	}
    	
    	else {
    		userInput2 = null;
    	}

}

//next challenge: 1) rewrite the getInput() to be a pure function 2.) rewrite the main if else to be a function