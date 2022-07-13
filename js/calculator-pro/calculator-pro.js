function calculatorPro() {
  let newNum;
  const numList = [];

  let resultSum;
  let resultRest;
  let resultMult;
  let resultDiv;
  let resultSqrt;
  let results = [];

  do {
    newNum = prompt("Enter a number or press cancel to stop");
    numList.push(newNum);
  } while (newNum !== null);
  numList.pop();
  for (let i = 0; i < numList.length; i++) {
    numList[i] = parseFloat(numList[i]);
  }

  if (numList.length === 2) {
    resultSum = numList[0] + numList[1];
    resultRest = numList[0] - numList[1];
    resultMult = numList[0] * numList[1];
    resultDiv = numList[0] / numList[1];
    results = [resultSum, resultRest, resultMult, resultDiv];
  }

  if (numList.length > 2) {
    resultSum = numList[0];
    resultRest = numList[0];
    resultMult = numList[0];
    resultDiv = numList[0];
    for (let i = 1; i < numList.length; i++) {
      resultSum += numList[i];
      resultRest -= numList[i];
      resultMult *= numList[i];
      resultDiv /= numList[i];
    }
    results = [resultSum, resultRest, resultMult, resultDiv];
  }

  if (numList.length == 1) {
    resultSqrt = Math.sqrt(numList[0]);
    results = [resultSqrt];
  }

  for (let i = 0; i < results.length; i++) {
    if (results[i] % 1 != 0) {
      results[i] = results[i].toFixed(3);
    }
  }

  if (!Number(numList[0])) {
    console.log("The first input is not a number, please try again.");
  } else if (!Number(numList[1])) {
    console.log(
      `The result of the square root of ${numList[0]} is: ${results[0]}`
    );
  } else {
    console.log(`The result of the sum is: ${results[0]}`);
    console.log(`The result of the rest is: ${results[1]}`);
    console.log(`The result of the multiplication is: ${results[2]}`);
    console.log(`The result of the division is: ${results[3]}`);
  }

  if (confirm("Want new numbers? ")) {
    calculatorPro();
  } else console.log("Bye!");
}

calculatorPro();
