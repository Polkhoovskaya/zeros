module.exports =    function zeros(expression) {

  const  arrOfExpressionsElements = expression.split("*");
  let arrOfExpressionsNumbers = [];
 
  // function factorial(n) {
  //   return (n != 1) ? n * factorial(n - 1) : 1;
  // }
  function factorial(n) {
    let resultOfFactorial = 1;
    for (let i = 1; i <= n; i++) {
      resultOfFactorial = BigInt(resultOfFactorial) * BigInt(i);
    }
    return resultOfFactorial;
  }

  // function doubleFactorial(n) {
  //   return (n != 1) ? n * factorial(n - 2) : 1;
  // }
  function doubleFactorial(n) {
    let resultOfFactorial = 1;
    for (let i = n; i > 1; i -= 2) {
      resultOfFactorial = BigInt(resultOfFactorial) * BigInt(i);
    }
    return resultOfFactorial;
  }

  arrOfExpressionsElements.forEach(function (element) {
    if (element[element.length-2] == '!') {
      arrOfExpressionsNumbers.push(BigInt((doubleFactorial(parseInt(element, 10)))));
    } else {
      arrOfExpressionsNumbers.push(BigInt(factorial(parseInt(element, 10))));
    }
  });

  let result = arrOfExpressionsNumbers.reduce((composition, current) => BigInt(composition) * BigInt(current), 1);
  let numOfZero = 0;
  let resultToString = result.toString();

  for (let i = (resultToString.length - 1); i > 0; i-- ) {
    if (resultToString[i] == 0) {
      numOfZero++;
    } else {
      break;
    }
  }

  return numOfZero;
}

