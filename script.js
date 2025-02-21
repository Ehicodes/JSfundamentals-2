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
// const ehisArray = {
//   firstName: "Ehi",
//   lastName: "Osaigbovo",
//   age: 2024 - 2006,
//   job: "Student",
//   friends: ["Michael", "Steven", "Josh"],
// }; //THE CURLY BRACES ARE TO DEFINE A NEW OBJECT. THE KEY IS THE VARIABLE NAME
// SO WE HAVE AN OBJECT THAT CONTAINS 5 KEY VALUE PAIRS.
// EACH OF THE KEYS ARE ALSO CALLED A PROPERTY. E.G PROPERTY firstName WITH THE VALUE OF Ehi
//SO WE SAY THE ehisArray OBJECT HAS 5 PROPERTIES
//THERE ARE MANY WAYS TO WRITE OBJECTS. USING THE CURLY BRACES IS CALLED THE OBJECT LITERAL SYNTAX.
//THE BIG DIFF BETWEEN OBJECTS AND ARRAY IS THAT THE ORDER OF THE VALUES DOES NOT MATTER AT ALL WHEN WE WANT TO RETRIEVE THEM.
//SINCE WE CAN ONLY ACCESS ARRAYS ELEMENTS THROUGH THEIR ORDER NUMBER, WE SHOULD USE ARRAYS FOR MORE ORDERED DATA AND OBJECTS FOR MORE UNSTRUCTED DATA

//DOT VS BRACKET NOTATION
// const ehisArray = {
//   firstName: "Ehinomen",
//   lastName: "Osaigbovo",
//   age: 2024 - 2006,
//   job: "Student",
//   friends: ["Michael", "Steven", "Josh"],
// };
// // console.log(ehisArray);
// // console.log(ehisArray.firstName);
// // console.log(ehisArray["firstName"]);

// const nameKey = "Name";

// console.log(ehisArray["first" + nameKey]);
// console.log(ehisArray["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Ehinomen? Choose between firstName, lastName, age, job, and friends"
// );

// if (ehisArray[interestedIn]) {
//   console.log(ehisArray[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// ehisArray.location = "Lagos";
// ehisArray["school"] = "LASU";
// console.log(ehisArray);

//CHALLENGE.
// jonas  has 3 friends, and his best friend is called Michael

// console.log(
//   ehisArray["first" + nameKey],
//   "has",
//   ehisArray.friends.length,
//   "friends,",
//   "and her best friend is",
//   ehisArray["friends"][0]
// );

// // TUTOR CODE
// console.log(
//   `${ehisArray.firstName} has ${ehisArray.friends.length} friends, and her best friend is called ${ehisArray.friends[0]}`
// )

//OBJECT MODES
// const ehisArray = {
//   firstName: "Ehi",
//   lastName: "Osaigbovo",
//   birthYear: 2006,
//   job: "Student",
//   friends: ["Michael", "Steven", "Josh"],
//   hasDriversLicense: false,

//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and she has ${
//       this.hasDriversLicense === true ? "a" : "no"
//     } driver's license.`;
//   },
// };

// console.log(ehisArray.calcAge());
// console.log(ehisArray.age);

// // console.log(ehisArray["calcAge"](1991));
// console.log(ehisArray.getSummary());
// //SMALL CHALLENGE
//create a method called getSummary that returns this string
// "Ehi is a 19-year old teacher and she has a driver's license(if true but it not, she has no driver's license)"

//ARRAYS ARE OBJECTS TOO AND THEY HAVE METHODS WE CAN USE TO MANIPULATE THEM LIKE PUSH, SHIFT, POP, UNSHIFT AND MANY MIRE

//WRITE IN YOUR NOTE
//ITERATION: FOR THE LOOP LECTURE. ANOTHER CONTROL STRUCTURE. LOOPS ARE A FUNDAMENTAL ASPECT OF EVERY PROGRAMMING LANGUAGE BECAUSE THEY HELP US TO AUTMOATE REPETITIVE TASKS. TASKS WE HAVE TO PERFORM OVER AND OVER AGAIN.

// console.log("Lifting weight repitition 1🏋🏻‍♀️");
// console.log("Lifting weight repitition 2🏋🏻‍♀️");
// console.log("Lifting weight repitition 3🏋🏻‍♀️");
// console.log("Lifting weight repitition 4🏋🏻‍♀️");
// console.log("Lifting weight repitition 5🏋🏻‍♀️");
// console.log("Lifting weight repitition 6🏋🏻‍♀️");
// console.log("Lifting weight repitition 7🏋🏻‍♀️");
// console.log("Lifting weight repitition 8🏋🏻‍♀️");
// console.log("Lifting weight repitition 9🏋🏻‍♀️");
// console.log("Lifting weight repitition 10🏋🏻‍♀️");
//instead of doing that, we can create a loop and put one of the lines of code in there and it will tun it over and over again till we tell it to stop
//LETS IMPLEMENT A FOR LOOP THAT HAS A COUNTER.
//a little bit like the if statement but that is for statement. a  loop statement has 3 parts .
// 1st part:the initial value of a counter. in our example 1 to 10 . we started at 1 because that is our first repitition
//we use semi colon to move to the next part. the second part is a logical condition that is  evaluated before each iteration of the loop, so before each time that the code in the looop is executed
//increasing the counter is the third part. we update the counter after iteration, it is a must if not the counter will just stay at 1 forever, so we increase it

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repitition ${rep}🏋🏻‍♀️`);
// }

//so the rep <= 10 conditon will be evaluated before the iteration of the loop. if it is true, the next loop iteration will run but if it is false, it will stop
//for loop keps running while condition is true
// instead of using rep = rep + 1. we can use the operator that adds 1 which is , ++

//it will print the string 10 times

//LOOPING ARRAYS,BREAKING AND CONTINUING
//ONE OF THE MOST USE APPLICATIONS OF FOR LOOP IS TO LOOOP THROUGH ARRAYS
const ehi = [
  "Ehi",
  "Osaigbovo",
  2024 - 2006,
  "Student",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = []; //empty array
//LETS USE THE FOR LOOP TO LOOP THROUGH THE ARRAY. WE WANT TO INDIVIDUALLY LOG EVERY ELEMENT OF THE ARRAY TO THE CONSOLE.

// console.log(ehi[0]);
// console.log(ehi[1]);
// console.log(ehi[2]);
// console.log(ehi[3]);

for (let i = 0; i < ehi.length; i++) {
  console.log(ehi[i], typeof ehi[i]); //WE ONLY READ VALUES FROM AN ARRAY. READING FROM AN ARRAY

  //FILLING TYPES ARRAY. NEW TYPES ARRAY
  // types[i] = typeof ehi[i]; //LETS USE THE LOOP TO CRREATE A NEW ARRRAY THAT WILL CONTAIN THE TYPE OF IST OF ELEMENTS (LEARN HOW TO CREATE AN ARRAY BASED ON THE VALUES OF ONE ORIGINAL ARRAY)
  types.push(typeof ehi[i]); //ANOTHER WAY TO CREATE NEW ARRAYS
}

console.log(types);

//PRACTICAL EXAMPLE
const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
  2037 - years[i];

  ages.push(2037 - years[i]);
}

console.log(ages);

//TWO IMPORTANT STATEMENTS FOR LOOPS.
//CONTINUE = TO EXIT THE CURRENT ITERATION OF THE LOOP AND CONTINUE TO THE NEXT ONE.
//BREAK IS TO COMPLETELY TERMINATE THE WHOLE LOOP

//CONTINUE
console.log("---ONLY STRINGS-----");
for (let i = 0; i < ehi.length; i++) {
  if (typeof ehi[i] !== "string") continue; //if the type of the current value in the ehi array is not a string, the code will be true and the continue will exit the current iteration
  console.log(ehi[i], typeof ehi[i]);
}

//BREAK //COMPLETELY TERMINATES THE LOOOP

//LETS LOG NO OTHER ELEMENT AS SOON AS WE FIND A NUMBER
console.log("---ONLY NUMBER-----");
for (let i = 0; i < ehi.length; i++) {
  if (typeof ehi[i] == "number") break;
  console.log(ehi[i], typeof ehi[i]);
}
