"use strict";
/*ASSIGNMENT 1 FUNCTIONS
Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console 

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return description;
}

const descriptionFinland = describeCountry("Finland", 6, "Helsinki");
const descriptionArgentina = describeCountry("Argentina", 45.6, "BuenosAires");
const descriptionEgypt = describeCountry("Egypt", 101.3, "Cairo");
console.log(descriptionFinland, descriptionArgentina, descriptionEgypt);
*/

/* ASSIGNMENT 2. Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/
//FUNCTION DECLARATION
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentageOfFinland = percentageOfWorld1(6);
// const percentageOfArgentina = percentageOfWorld1(45.6);
// const percentageOfEgypt = percentageOfWorld1(101.3);
// console.log(percentageOfFinland, percentageOfArgentina, percentageOfEgypt);

// // FUNCTION EXPRESSION
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const percentageOfJapan = percentageOfWorld1(127.1);
// const percentageOfMexico = percentageOfWorld1(127.5);
// const percentageOfSweden = percentageOfWorld1(10.3);
// console.log(percentageOfJapan, percentageOfMexico, percentageOfSweden);

/*ASSIGNMENT 3. Recreate the last assignment, but this time create an arrow function called
"percentageOfWorld3"; 

//ARROW FUNCTION
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentageOfUk = percentageOfWorld3(67.1);
const percentageOfUkraine = percentageOfWorld3(41.9);
const percentageOfUnitedStates = percentageOfWorld3(333.1);

console.log(percentageOfUk, percentageOfUkraine, percentageOfUnitedStates);
*/

/*ASSIGNMENT 4. FUNCTIONS CALLING OTHER FUNCTIONS.
1.Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice */

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// //function declaration
// function describePopulation(country, population) {
//   const percentageOfCountry = percentageOfWorld1(population);
//   const decription = `${country} has ${population} million people, which is about ${percentageOfCountry}% of the world`;
//   console.log(decription);
// }

// describePopulation("Brazil", 212.2);
// describePopulation("Argentina", 25.7);
// describePopulation("Canada", 37.7);

//funcion expression
// const describePopulation = function (country, population) {
//   const percentageOfCountry = percentageOfWorld1(population);
//   return `${country} has ${population} million people, which is about ${percentageOfCountry}% of the world`;
// };

// console.log(describePopulation("Brazil", 212.2));
// console.log(describePopulation("Argentina", 25.7));
// console.log(describePopulation("Canada", 37.7));

// arrow function
// const describePopulation = (country, population) => {
//   const percentageOfCountry = percentageOfWorld1(population);
//   return `${country} has ${population} million people, which is about ${percentageOfCountry}% of the world`;
// };

// const percBrazil = describePopulation("Brazil", 212.2);
// const percArgentina = describePopulation("Argentina", 25.7);
// const percCanada = describePopulation("Canada", 37.7);

// console.log(percBrazil, percArgentina, percCanada);

/* ASSIGNMENT 5. INTRO TO ARRAYS
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values*/
// TASK 1
const populations = [212.2, 25.7, 37.7, 67.1];
//TASK 2
console.log(populations.length === 4);
