// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) understanding the problem:
// transforming array of numbers to string
// the index of the array is the days numbers index = x+1

// 2)sub problems
// function(arr) {
//  loop logics => log(`${arr[i]} C in ${i+1} days`)
// }
//
let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

function printForecast(temperaturesArr) {
  let tempStrArr = [];
  for (let index = 0; index < temperaturesArr.length; index++) {
    tempStrArr += `${temperaturesArr[index]} ºC in ${index + 1} days\n`;
    // console.log(`${temperaturesArr[index]} ºC in ${index + 1} days`);
  }
  console.log(tempStrArr);
}
printForecast(data1);
printForecast(data2);
