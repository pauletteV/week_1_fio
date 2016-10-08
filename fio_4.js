//keep looping through until userInput == randInt: 
var randInt2 = generateRandNum(1,10);
console.log(randInt2);

var userIn;
var userInput2;

getInput();

/*console.log(typeof(userIn));
console.log(typeof(userInput2));
console.log(typeof(randInt2));*/

	if (userInput2 === randInt2) {
		
		alert("Good Work");
	}

	else {
		while (userInput2 !== randInt2) {
			console.log("Yo!!");
				
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
	return Math.floor(Math.random() * (max-min)) + min; //generates a random number between a range ~ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

}

function getInput() {
	userIn = prompt("Please guess a number between 1 and 10"); 
    userInput2 = parseInt(userIn); //convert user input to correct data type to 

}


