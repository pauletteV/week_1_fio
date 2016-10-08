var randInt; 
generateRandNum(1,10);

var userInput = prompt("Please guess a number between 1 and 10"); 

	if (userInput == randInt) {

		alert("Good Work");
	}

	else {
		//alert("Not a match");

		if (userInput > randInt) {
			alert("Nope, lower");
		}
		else if (userInput < randInt) {
			alert("Nope, higher");
		}
	}


function generateRandNum(min, max) {
	randInt = Math.floor(Math.random() * (max-min)) + min; //generates a random number between a range ~ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	console.log(randInt);
}

