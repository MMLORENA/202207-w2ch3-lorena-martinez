const num1 = parseFloat(prompt("Type the first number: "));
const num2 = parseFloat(
  prompt(
    "Type the second number (if you don't want the square root of the first number)"
  )
);

const resultSum = num1 + num2;
const resultRest = num1 - num2;
const resultMult = num1 * num2;
const resultDiv = num1 / num2;
const resultSqrt = Math.sqrt(num1);
const results = [resultSum, resultRest, resultMult, resultDiv, resultSqrt];

for (let i = 0; i < results.length; i++) {
  if (results[i] % 1 !== 0) {
    results[i] = results[i].toFixed(3);
  }
}

if (!Number(num1)) {
  console.log("The first input is not a number, please try again.");
} else if (!Number(num2)) {
  console.log(`The result of the square root of ${num1} is: ${results[4]}`);
} else {
  console.log(`The result of the sum is: ${results[0]}`);
  console.log(`The result of the rest is: ${results[1]}`);
  console.log(`The result of the multiplication is: ${results[2]}`);
  console.log(`The result of the division is: ${results[3]}`);
}
