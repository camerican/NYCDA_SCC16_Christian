var aboutMe = {
  firstName: "christian",
  lastName: "winnitzki",
  favoriteNumber: 8,
  interests: ["Soccer","Volleyball","Tennis","baseball"]
};
console.log("You are: " + aboutMe.firstName + " " + aboutMe["lastName"]);
console.log("Your favorite Number is: " + aboutMe.favoriteNumber);

console.log("Your interests are:");

for( var i=0; i < aboutMe.interests.length; i++ ) {
  console.log(aboutMe.interests[i]);
}




if( myValue < 10 ) {
  alert("Value is less than 10");
} else { // myValue is >= 10
  alert("Your value " + myValue + " is greater than or equal to 10");
}

if( x < 10 ) {

} else if (x === 10) {

} else {

}

switch( x ) {
  case 10 :
    console.log("x is 10");
    break;
  default :
    console.log("x did not match any of the cases");
}