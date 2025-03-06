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
// const populations = [212.2, 25.7, 37.7, 67.1];

// //TASK 2
// console.log(populations.length === 4);

// //TASK 3

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const population1 = percentageOfWorld1(populations[0]);

// const population2 = percentageOfWorld1(populations[1]);

// const population3 = percentageOfWorld1(populations[2]);

// const population4 = percentageOfWorld1(populations[populations.length - 1]);

// console.log(population1, population2, population3, population4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[populations.length - 1]),
// ];
// console.log(percentages);

/* ASSIGNMENT 6. Basic Array Operations (Methods).
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'. */

//TASK 1
// const neighbours = ["Benin", "Chad", "German Kamerun", "Niger"];

// // // TASK 2
// // neighbours.push("Utopia");

// // // TASK 3
// // neighbours.pop();

// // // TASK 4
// // if (!neighbours.includes("Germany")) {
// //   console.log("Probably not a central European country :D");
// // }

// // //TASK 5
// // neighbours[neighbours.indexOf("German Kamerun")] = "Cameroon";
// // console.log(neighbours);

// /* ASSIGNMENT 7. INTRO TO OBJECTS.
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)*/
// const myCountry = {
//   country: "Nigeria",
//   capital: "Abuja",
//   languages: "Yoruba",
//   population: 223.8,
//   neighbours: ["Benin", "Chad", "Niger"],

//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.languages}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called, ${this.capital}`;
//   },
// };

// // console.log(myCountry);

// /* ASSIGNMENT 8. Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation. */

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.languages}-speaking people,  ${myCountry.neighbours.length} neighbouring countries and a capital called, ${myCountry.capital}`
// );

// // console.log(myCountry.population + 2);
// // console.log(myCountry["population"] - 2);

// //tutor code
// myCountry.population += 2;
// console.log(myCountry);
// myCountry.population -= 2;
// console.log(myCountry);

/* ASSIGNMENT 9. Object Methods.
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property. */

//task 1
// const myCountry2 = {
//   country: "Nigeria",
//   capital: "Abuja",
//   languages: "Yoruba",
//   population: 223.8,
//   neighbours: ["Benin", "Chad", "Niger"],

//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.languages}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called, ${this.capital}`;
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//   },
// };

// //task 2
// myCountry2.describe();
// myCountry2.checkIsland();

// //task 3
// console.log(myCountry2);

/* ASSIGNMENT 10. teration: The for Loop
There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting`);
// }

/* ASSIGNMENT 11. Looping Arrays, Breaking and Continuing.
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is */

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// //task 1
// const populations = [212.2, 25.7, 37.7, 67.1];
// const percentages2 = [];

// //task 2
// // for (let i = 0; i < populations.length; i++) {
// //   console.log(populations[i]), percentageOfWorld1(populations[i]);

// //   percentages2.push(percentageOfWorld1(populations[i]));
// // }

// // console.log(percentages2);

// //task 3
// // it is more easier because using the loop, we do not have to manually change the population value in order for it to get calculated. we just had to use the for loop, input our function and put our current value "i". then we created our empty array and used the object method "push" to add the result to our empty array.

// //tutor code.
// //task 2
// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages2.push(perc);
// }

// console.log(percentages2);

//have a clear code !!(noted!)

/* ASSIGNMENT 12. Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway 😉
*/

//TASK 1
// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// // console.log(listOfNeighbours.length);
// // console.log(listOfNeighbours[0][0]);

// //TASK 2
// for (let country = 0; country < 1; country++) {
//   console.log(`Neighbour: ${listOfNeighbours[0][0]}`);

//   for (let country = 0; country < 1; country++) {
//     console.log(`Neighbour: ${listOfNeighbours[0][1]}`);
//   }
//   for (let country = 0; country < 1; country++) {
//     console.log(`Neighbour: ${listOfNeighbours[1][0]}`);
//   }
//   for (let country = 0; country < 1; country++) {
//     console.log(`Neighbour: ${listOfNeighbours[2][0]}`);
//   }
//   for (let country = 0; country < 1; country++) {
//     console.log(`Neighbour: ${listOfNeighbours[2][1]}`);
//   }
//   for (let country = 0; country < 1; country++) {
//     console.log(`Neighbour: ${listOfNeighbours[2][2]}`);
//   }
// }

// //TUTOR CODE
// for (let i = 0; i < listOfNeighbours.length; i++)
//   for (let y = 0; y < listOfNeighbours[i].length; y++)
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

/* ASSIGNMENT 13.The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop? */

//TASK 1
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [212.2, 25.7, 37.7, 67.1];
const percentages3 = [];

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);

//TASK 2. I PREFER THE FOR  LOOP FOR THIS TASK. I FEEL IT'S MORE STRAIGHTFORWAD.
