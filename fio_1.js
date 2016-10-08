var intCount = 1;
var holderArray = []; 


for (var i = 0; i < 100; i++) {

	//console.log("intCount is: " + intCount + " remainder is: " + intCount % 3);

	if ( (intCount % 5 === 0) && (intCount % 3 === 0) ) {

		//FizzBuzz & push that string to the array at the right index
		holderArray.push("FizzBuzz");	
	}

	else if (intCount % 3 === 0) {

		//Fizz & push that string to the array at the right index
		holderArray.push("Fizz");	
	}

	else if (intCount % 5 === 0) {

		//Buzz & push that string to the array at the right index
		holderArray.push("Buzz");	
	}

	intCount++;	
	
}

console.log(holderArray);