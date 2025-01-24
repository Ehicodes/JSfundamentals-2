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

//Function declaration
function calAge1(birthYear) {
  return 2037 - birthYear; // we can just return the result
}

// THAT IS A GENERIC FUNCTION THAT WILL WORK FOR ANY BIRTHYEAD WE GUVE IT

const age1 = calAge1(1991);

//THE PARAMETER IS THE PLACEHOLDER (birthYear) WHILE THE ARGUMENT IS THE ACTUAL VALUE THAT WE USE TO FILL IN THE PLACEHOLDER THAT IS THE PARAMETER E.G(1991);
// SO WE JUST CREATED A FUNCTION DECLARATION, NOW LERS CREATE A  FUNCTION EXPRESSION OR ANONYMOUS FUNCTION WHICH IS THE OTHER TYPE OF FUNCTION!!
// function expression
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
}; // the function is an expression and expressions produce values. so we assigned the expression to a variable and the variable will hold the function value basically. functions are values in jS and if it is a value, we can store it in variables

const age2 = calAge2(1991);
console.log(age1, age2);

// BIG DIFF BETWEEN FUNCTION DECLASRATIONS AND FUNCTION EXPRESSIONS?? IT IS THAT WE CAN CALL FUNCTION DECLARATIONS BEFORE THEY ARE DEFINED IN THE CODE

// const age1 = calAge1(1991);

// function calAge1(birthYear) {
//   return 2037 - birthYear;
// }  // WHICH WILL NOT WORK IN FUNCTION EXPRESSIONS
