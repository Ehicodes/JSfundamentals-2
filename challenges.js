/*CODING CHALLENGE 1. 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD 

//FUNCTION TO CALCULATE AVERAGE SCORE OF BOTH TEAMS.
// DATA 1
const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

const dolphinsAvg = calcAverage(44, 23, 71); //46
const koalasAvg = calcAverage(65, 54, 49); //56

console.log(dolphinsAvg, koalasAvg);

//DATA 2
const calcAverage2 = function (dolphinsAvg2, koalasAvg2) {
  const average2 = calcAverage(score1, score2, score3);
};

const dolphinsAvg2 = calcAverage(85, 54, 41); //60
const koalasAvg2 = calcAverage(23, 34, 27); //28

console.log(dolphinsAvg2, koalasAvg2);

//CHECKWINNER FUNCTION
const checkWinner = function (dolphinsAvg, koalasAvg) {
  if (dolphinsAvg >= 2 * koalasAvg) {
    console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`);
  } else if (koalasAvg >= 2 * dolphinsAvg) {
    console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg})`);
  } else {
    console.log("No team wins!");
  }
};

checkWinner(dolphinsAvg, koalasAvg);
checkWinner(dolphinsAvg2, koalasAvg2);

// TUTOR CODE
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5)); //testing purposes

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolhins, avgKoalas) {
//   if (avgDolhins >= 2 * avgKoalas) {
//     console.log(`Dolphins win the trophy(${avgDolhins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolhins) {
//     console.log(`Koalas win the trophy (${avgKoalas} vs. ${avgDolhins})`);
//   } else {
//     console.log(`No team wins..`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// //  test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);
*/

/* CODING CHALLENGE 2.
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44 */

//TASK 1
// const calcTip = function (billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     return billValue * 0.15;
//   } else {
//     return billValue * 0.2;
//   }
// };

// const test1 = calcTip(100);
// console.log(test1);

// //TASK 2
// const bills = [125, 555, 44];
// console.log(bills.length);

// //TASK 3
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// //TASK 4
// const total =
//   bills[0] +
//   bills[1] +
//   bills[2] +
//   calcTip(bills[0]) +
//   calcTip(bills[1]) +
//   calcTip(bills[2]);
// console.log(total);

//TUTOR'S CODE. CORRECTION
// const calcTip = function (billValue) {
//   return billValue >= 50 && billValue <= 300
//     ? billValue * 0.15
//     : billValue * 0.2; //tenary operator, so we do not repeat the condition
// };

// const billValue = [125, 555, 44];
// const tips = [
//   calcTip(billValue[0]),
//   calcTip(billValue[1]),
//   calcTip(billValue[2]),
// ];

// const totals = [
//   billValue[0] + tips[0],
//   billValue[1] + tips[1],
//   billValue[2] + tips[2],
// ];
// console.log(billValue, tips, totals);

/*CODING CHALLENGE 3.
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

//TASK 1.
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmiValue = this.mass / (this.height * this.height);
    return this.bmiValue;
  },
  // calcBMI: function () {
  //   return this.mass / (this.height * this.height);
  // },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  // calcBMI: function () {
  //   return this.mass / (this.height * this.height);
  // },

  calcBMI: function () {
    this.bmiValue = this.mass / (this.height * this.height);
    return this.bmiValue;
  },
};

console.log(mark, john);

//TASK 2.
console.log(mark.calcBMI());
console.log(john.calcBMI());

// console.log(mark.bmiValue);
// console.log(john.bmiValue);

// TASK 3.
console.log(
  `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
    john.fullName
  }'s BMI (${john.calcBMI()})!`
);
