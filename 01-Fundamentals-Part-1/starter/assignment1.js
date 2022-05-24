function BMI(mass, height) {
  return mass / height ** 2;
}

// return boolean
function BMIcomperison(input1BMI, input2BMI) {
  return input1BMI > input2BMI;
}

// data 1
let marksWeight = 78;
let marksHeight = 1.69;

let johnsWeight = 92;
let johnsHeight = 1.95;

let marksBMI = BMI(marksWeight, marksHeight);
let johnsBMI = BMI(johnsWeight, johnsHeight);

console.log("marks BMI is: " + marksBMI);
console.log("johns BMI is: " + johnsBMI);

let markHigherBMI = BMIcomperison(marksBMI, johnsBMI);
console.log("markHigherBMI is: " + markHigherBMI);

// data 2
marksWeight = 95;
marksHeight = 1.88;

johnsWeight = 85;
johnsHeight = 1.76;

marksBMI = BMI(marksWeight, marksHeight);
johnsBMI = BMI(johnsWeight, johnsHeight);

console.log("marks BMI is: " + marksBMI);
console.log("johns BMI is: " + johnsBMI);

markHigherBMI = BMIcomperison(marksBMI, johnsBMI);
console.log("markHigherBMI is: " + markHigherBMI);
