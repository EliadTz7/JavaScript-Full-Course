"use strict";

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
 calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to).
  Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, 
and that value can actually be the returned value of a function! 
So you can just call a function as array values (so don't store the tip values in separate variables first, 
but right in the new array) 😉
GOOD LUCK 😀
*/

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else return bill * 0.2;
}

let billsArray = [125, 555, 44];
let tipsArray = [];
let totalArray = [];

tipsArray.push(calcTip(billsArray[0]));
tipsArray.push(calcTip(billsArray[1]));
tipsArray.push(calcTip(billsArray[2]));
console.log(tipsArray);

totalArray.push(billsArray[0] + tipsArray[0]);
totalArray.push(billsArray[1] + tipsArray[1]);
totalArray.push(billsArray[2] + tipsArray[2]);
console.log(totalArray);

///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
// console.log(jonas.'last' + nameKey)
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);
// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend called ${jonas.friends[0]}`
);
