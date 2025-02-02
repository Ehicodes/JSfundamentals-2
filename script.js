"use strict";

// function logger() {
//   console.log("My name is Ehinomen"); //THIS FUNCTION DOES NOT RETURN ANYTHING, ALL IT DOES IS LOG SOMETHING TO THE CONSOLE. IT REALLY ONLY PRINTS A MESSAGE TO THE DEV CONSOLE.
// }

// logger();
// logger(); // A FUNCTION WITHOUT THE RETURN AND PARAMETERS, WE ONLY USE WHENN THERE IS A BLOCK OF CODE WE WANT TO REUSE OVER AND OVER AGAIN.  WE DID NOT SAVE ANYTHNIG TO A VARIABLE BECAUSE WE DO NOT RETURN ANYHTING FROM THE FUNCTION AND IT DOES NOT PRODUCE ANY RESULT
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// //WRITE IN YOUR NOTE
// //THANKS TO THE FUNCTION, WE CAN REUSE THE FUNCTION WITH DIFFERENT INPUTS AND GET DIFFERNT RESULTS
// const appleOrangeJuice = fruitProcessor(5, 3);
// console.log(appleOrangeJuice);
// //FUNCTIONS ALLOWS US TO WRITE MAINTANABLE CODE BECAUSE WE CAN CREATE REUSABLE CHUNKS OF CODE INSTEAD OF WRITING THE SAME CODE OVER AND OVER . DO NOT REPEAT YOUR CODE/ DRY CODE

//FUNCTION DECLARATIONS VS EXPRESSIONS.  THERE ARE DIFFERENR WAYS OF WRITING FUNCTIONS IN JS AND EACH TYPE OF FUNCTIONS WORKS IN SLIGHTLY DIFFERENT WAYS. THE ONES IN THE EARLIER LECTURE ARE CALLED FUNCTIONS DECLARATIONS BECAUSEWE USE THE FUNCTION KEYWORD TO DECLARE A FUNCTION.

//LETS WRITE A FUNCTION TO CALCULATE AN AGE BASED ON A GIVEN BIRTH YEAR
// function calAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// //Function declaration
// function calAge1(birthYear) {
//   return 2037 - birthYear; // we can just return the result
// }

// // THAT IS A GENERIC FUNCTION THAT WILL WORK FOR ANY BIRTHYEAD WE GUVE IT

// const age1 = calAge1(1991);

// //THE PARAMETER IS THE PLACEHOLDER (birthYear) WHILE THE ARGUMENT IS THE ACTUAL VALUE THAT WE USE TO FILL IN THE PLACEHOLDER THAT IS THE PARAMETER E.G(1991);
// // SO WE JUST CREATED A FUNCTION DECLARATION, NOW LERS CREATE A  FUNCTION EXPRESSION OR ANONYMOUS FUNCTION WHICH IS THE OTHER TYPE OF FUNCTION!!

// // function expression
// const calAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }; // the function is an expression and expressions produce values. so we assigned the expression to a variable and the variable will hold the function value basically. functions are values in jS and if it is a value, we can store it in variables

// const age2 = calAge2(1991);
// console.log(age1, age2);

// // BIG DIFF BETWEEN FUNCTION DECLASRATIONS AND FUNCTION EXPRESSIONS?? IT IS THAT WE CAN CALL FUNCTION DECLARATIONS BEFORE THEY ARE DEFINED IN THE CODE

// // const age1 = calAge1(1991);

// // function calAge1(birthYear) {
// //   return 2037 - birthYear;
// // }  // WHICH WILL NOT WORK IN FUNCTION EXPRESSIONS

// function expression
// const calAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// // ARROW FUNCTION. ANOTHER TYPE OF FUNCTION. A SPECIAL FORM OF FUNCTION EXPRESSION THAT IS SHORTER AND THEREFORE FASTER TO WRITE
// const calAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`; //only ommit the return if it is one line of function but when we have more, we need to use the return
// };

// console.log(yearsUntilRetirement(1991, "Ehi"));
// console.log(yearsUntilRetirement(2000, "Nome"));

//as the lines of codes become more, it gets complex and we loose advantage of using an arrrow function.

//FUNCTIONS CALLING OTHER FUNCTIONS

// function cutfruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutfruitPieces(apples);
//   const orangePieces = cutfruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years922`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 😎`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Ehi"));
// console.log(yearsUntilRetirement(1970, "Mike"));

// INTRO  TO ARRAYS
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 2006, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "jay";
// console.log(friends);

// const firstName = "Ehi";
// const ehi = [firstName, "Osaigbovo", 2024 - 2006, "student", friends];
// console.log(ehi);

// ARRAY EXERCISE
// const calAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calAge(years[0]),
//   calAge(years[1]),
//   calAge(years[years.length - 1]),
// ];

// console.log(ages);

//USE METHODS IN ARRAYS
///add elements
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");

// console.log(newLength);

// friends.unshift("Stella");

// //remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }*

//INTRO TO OBJECTS(ANOTHER DATA STRUCTURE). IN OBJECTS, WE DEFINE KEY VALUE PAIRS.
const ehisArray = {
  firstName: "Ehi",
  lastName: "Osaigbovo",
  age: 2024 - 2006,
  job: "Student",
  friends: ["Michael", "Steven", "Josh"],
}; //THE CURLY BRACES ARE TO DEFINE A NEW OBJECT. THE KEY IS THE VARIABLE NAME
// SO WE HAVE AN OBJECT THAT CONTAINS 5 KEY VALUE PAIRS.
// EACH OF THE KEYS ARE ALSO CALLED A PROPERTY. E.G PROPERTY firstName WITH THE VALUE OF Ehi
//SO WE SAY THE ehisArray OBJECT HAS 5 PROPERTIES
//THERE ARE MANY WAYS TO WRITE OBJECTS. USING THE CURLY BRACES IS CALLED THE OBJECT LITERAL SYNTAX.
//THE BIG DIFF BETWEEN OBJECTS AND ARRAY IS THAT THE ORDER OF THE VALUES DOES NOT MATTER AT ALL WHEN WE WANT TO RETRIEVE THEM.
//SINCE WE CAN ONLY ACCESS ARRAYS ELEMENTS THROUGH THEIR ORDER NUMBER, WE SHOULD USE ARRAYS FOR MORE ORDERED DATA AND OBJECTS FOR MORE UNSTRUCTED DATA
