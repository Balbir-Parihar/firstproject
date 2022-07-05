/**
 * this function will check if number is even or not
 * @param {number} number
 * @returns {boolean}
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 * This function will check if two numbers are compleately divisible or not
 * @param {number} divident
 * @param {number} divisor
 * @returns {boolean}
 */
function isDivisible(divident, divisor) {
  return divident % divisor === 0;
}

/**
 * This function will check if a number is divisible by three and five or not
 * @param {number} number
 * @returns {boolean}
 */
function isDivisibleBy3and5(number) {
  return isDivisible(number, 3) && isDivisible(number, 5);
}

/**
 * This function will generate random number based on digits and minimum and maximum value
 * @param {number} digit
 * @param {number} min
 * @param {number} max
 * @returns
 */
function gererateRandomNumber(digit, min, max) {
  let randomNumber = parseInt(Math.random() * 10 ** digit);
  if (randomNumber < min || randomNumber > max) {
    gererateRandomNumber(digit, min, max);
  }
  return randomNumber;
}

function happy() {
  console.log("Happy");
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (isDivisible(number, i)) {
      return false;
    }
  }

  return true;
}

function primeSeries(limit) {
  for (let i = 1; i <= limit; i++) {
    if (isPrime(i)) console.log(i);
  }
}

function trimLastDigit(number) {
  return parseInt(number / 10);
}

function extractLastDigit(number) {
  return number % 10;
}

function totalDigits(number) {
  let count = 0;
  for (; number > 0; count++) {
    number = trimLastDigit(number);
  }
  return count;
}

function isArmStrong(number) {
  //calculate total digits in a number-  DONE
  let originalNumber = number;
  let power = totalDigits(number);
  let sum = 0;
  //run a loop uptil the total digits in number DONE
  for (let i = 0; i < power; i++) {
    sum = sum + extractLastDigit(number) ** power;
    number = trimLastDigit(number);
  }

  //check if the given number is equal to the sum - DONE
  return sum === originalNumber;
}

function reverseTheNumber(number) {
  let reverse = 0;
  while (number > 0) {
    let lastDigit = extractLastDigit(number);
    reverse = reverse * 10 + lastDigit;
    number = trimLastDigit(number);
  }
  return reverse;
}

function isPalindrome(number) {
  return number === reverseTheNumber(number);
}

function palindromeSeries(limit) {
  for (let i = 0; i < limit; i++) {
    if (isPalindrome(i)) console.log(i);
  }
}

function extractFirstDigit(number) {
  return extractLastDigit(reverseTheNumber(number));
}

function sumOfFirstAndLastDigit(number) {
  return extractLastDigit(number) + extractFirstDigit(number);
}

function armstrongSeries(limit) {
  for (let i = 1; i < limit; i++) {
    if (isArmStrong(i)) console.log(i);
  }
}

function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum = sum + extractLastDigit(number);
    number = trimLastDigit(number);
  }

  return sum;
}

function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

function factors(number) {
  for (let i = 2; i < number; i++) {
    if (isDivisible(number, i)) console.log(i);
  }
}

function primeFactors(number) {
  for (let i = 2; i < number; i++) {
    if (isDivisible(number, i) && isPrime(i)) console.log(i);
  }
}

function convertToBinary(number) {
  let result = "";
  while (number >= 1) {
    result = (number % 2) + result;
    number = parseInt(number / 2);
  }
  return +result;
}

function convertToOctal(number) {
  let result = "";
  while (number >= 1) {
    result = (number % 8) + result;
    number = parseInt(number / 8);
  }
  return Number(result);
}

function decToOthers(number, base) {
  if (base === 2) return convertToBinary(number);
  if (base === 8) return convertToOctal(number);
}

function sum(a, b) {
  
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    arguments.length === 2 &&
    isFinite(a) &&
    isFinite(b)
  ) {
    return a + b;
  }
  console.error("Invalid inputs");
}
