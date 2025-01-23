"use strict";
/*ASSIGNMENT 1 FUNCTIONS
Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console */

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return description;
}

const descriptionFinland = describeCountry("Finland", 6, "Helsinki");
const descriptionArgentina = describeCountry("Argentina", 45.6, "BuenosAires");
const descriptionEgypt = describeCountry("Egypt", 101.3, "Cairo");
console.log(descriptionFinland, descriptionArgentina, descriptionEgypt);
