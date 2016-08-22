
	var myValue = 3;
	if(myValue<10){   
		alert("Value is less then 10");
	}else { 
	alert("Your Value " + myValue + " is greater than or equal to 10")	
}
// Declare a function that takes any string as an argument and console
// logs to the user the text they've entered, try invoking it after it has 
// been declared

function logMyString(someString) {
	console.log( someString );
}
// var logMyString = function( someString ){
// console.log( someString );
// }

logMyString("Hello there");


// Declare a function that takes no argument but prints something to the console try invoking it after it has 
// been declared

function printDate() {
	console.log( Date());
}
printDate();

// write a function that takes a number door, and returns a prize, depending upon the door entered 
// try using if/else block
// then, try using an array (of prizes) with an index


function pickADoor( doorNumber) {
	doorNumber = parseInt(doorNumber) - 1;
	var prizes = ["A new car","A fishing pole","An old shoe"];
	if ( prizes [doorNumber]) {
		return prizes[doorNumber];
	}else{// error
	return "Oops you entered a invalid number";
	}
}

// function pickADoor( doorNumber) {
// 	var prizes;
// 	if (doorNumber == 1) {
//     prize = "A new car";
// 	}else if (doorNumber == 2) {
// 	prize = "A fishing pole";
// 	}else if (doorNumber == 3) {
// 	prize = "An old shoe";
// 	}else{ // error}
// 	prize = "Oops, you picked an invalid number";
// }
// 	return prize;
// }


var myBestFriends = ["Joe", "Susan", 'Mike'];

for (var x = 0; x < myBestFriends.length; x++) {
	console.log(myBestFriends[x] + " is my friend");
}


x = 99
while(x > 0){   
	console.log("On number " + x)  
	 x--; 
}

