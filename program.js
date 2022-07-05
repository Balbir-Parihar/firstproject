function trimLastDigit(number) {
  return parseInt(number/10);
}
function extractLastDigit(number){
  return number % 10;
}

function totalDigit(number){
  let count = 0;
  for (;number>0;count++){
    number = trimLastDigit(number);
     
  }
  return count;
}
function isArmstrong(number){
  //Calculate total digits in a number
     let originalNumber = number;
    let power = totalDigit(number);
    let sum = 0; 
    //run a loop until the total no in a digit 
    for(;number>0;){
        let lastDigit=extractLastDigit(number);
        sum= sum+lastDigit**power;
        number=trimLastDigit(number);
    }  
    return sum==originalNumber;
}

//palindrome function
function ispalindrome(number){
    //reverse the no.
    //check if reverse is equal to the given number
    return number === reverseTheNumber(number);
}
function palindromeSeries(limit){
    for(let i=0; i<limit; i++){
        if(isPalindrome(i)) console.log(i);
    }
}
//how to extract first digit
function extractFirstDigit(number){
    return extractLastDigit(reverseTheNumber(number));
}


function sumOfFirstAndLastDigit(number){
    return extractLastDigit(number)+extractFirstDigit(number);
}

/**
 * this is armstrong series
 * @param {number} limit 
 */

function armstrongSeries(limit){
    for (let i=1; i<limit; i++){
        if (isArmstrong(i)) console.log(i);
    }

}


function sumOfDigits(number){
let sum=0;
while (number>0){
    sum = sum + extractLastDigit(number);
    number= trimLastDigit(number);
}
return sum;
}
function factorial(number){
  let result = 1;
  for (let i = number; i>=1; i--){
    result = result*i;
  }
  return result;
}
function factors(number){
  for (let i =2; i< number; i++){
    if(isDivisible(number, i))console.log(i);  
  }
}
function primeFactor(number){
  for (let i =2; i< number; i++){
      if(isDivisible(number, i) && isPrime(i))console.log(i);  
  }
}
function convertToBinary(number){
  let result ='';
  while (number>=1){
    result=number % 2 + result; 
    number= parseInt(number/2); 
  }
  return +result;
}
// function binaryTable(limit){
//   for (let i=0;)
// }
function converToOctal(number){
let result ='';
while (number>=1){
  reult= (number % 8) + result;
  number= parseInt(number/8);
}
return Number(result);
}
function decToOther(number, base){
  if (base===2) return convertToBinary(number);
  if (base===8) return convertToOctal(number);
}
function sum(a,b){
  if (typeof a ==="number"&&
  typeof b ==="number"&&
  arguments.length ===2 &&
  isFinite(a)&&
  isFinite(b)
  )
    return a + b;
  }
  console.error("Invalid inputs");
}
function binaryToDecimal(number){
  let size= number.tpstring();
  let result=0
  for (let i=0; i<digit; i++){
result= result+extractLastDigit(number) *2 **i;
number=trimLastDigit(number);
  }
  return result;
}
const square =number=> number **2;
