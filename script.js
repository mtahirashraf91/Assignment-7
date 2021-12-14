// 1. Write a js program to find maximum between two numbers.
function maxOfTwoNo() {
  var dom = document;
  var num1 = dom.getElementById("num1");
  console.log(num1);
  var number1 = parseInt(num1.value);
  var num2 = dom.getElementById("num2");
  var number2 = parseInt(num2.value);

  if (num1.value == "" || num2.value == "") {
      var result = "Result : Please fill all the inputs!";
        output1.innerHTML = result;
    }else if (number1 == number2) {
      result = "Result : Numbers are equal.";
      output1.innerHTML = result;
    }else if (number1 > number2) {
    var result1 = "Result : 1st number (";
    var result2 = ") is greater than 2nd number (";
    var result3 = ").";
    var result = result1 + number1 + result2 + number2 + result3;
    output1.innerHTML = result;
  } else if (number1 < number2) {
    var result1 = "Result : 2nd number (";
    var result2 = ") is greater than 1st number (";
    var result3 = ").";
    var result = result1 + number2 + result2 + number1 + result3;
    output1.innerHTML = result;
  }  else {
    result = "Result : Please write a number!";
    output1.innerHTML = result;
  }
}

// 2. Write a js program to find maximum between three numbers.

function maxOfThreeNo() {
  var dom = document;
  var num1 = dom.getElementById("n1");
  var number1 = parseInt(num1.value);
  var num2 = dom.getElementById("n2");
  var number2 = parseInt(num2.value);
  var num3 = dom.getElementById("n3");
  var number3 = parseInt(num3.value);

  
  if (num1.value == "" || num2.value == "" || num3.value == "") {
    var result = "Result : Please fill all the inputs!";
      output2.innerHTML = result;
  }else if (number1 == number2 || number2 == number3 || number1 == number3) {
    result = "Result : Numbers are equal.";
    output2.innerHTML = result;
  } else if (number1 > number2 && number1 > number3) {
    var result1 = "Result : 1st number (";
    var result2 = ") is the greatest number.";
    var result = result1 + number1 + result2;
    output2.innerHTML = result;
  } else if (number2 > number3 && number2 > number1) {
    var result1 = "Result : 2nd number (";
    var result2 = ") is the greatest number.";
    var result = result1 + number2 + result2;
    output2.innerHTML = result;
  } else if (number3 > number2 && number3 > number1) {
    var result1 = "Result : 3rd number (";
    var result2 = ") is the greatest number.";
    var result = result1 + number3 + result2;
    output2.innerHTML = result;
  } else  {
    result = "Result : Please write a number!";
    output2.innerHTML = result;
  }
}
// 3. Write a js program to check whether a number is negative, positive or zero.

function Integertype() {
  var dom = document;
  var num1 = dom.getElementById("no.1");
  var number1 = parseFloat(num1.value);

  if (num1.value == "" || num1.value >= 'A' || num1.value >= ' ') {
    var result = "Result : Please write a number!";
      output3.innerHTML = result;
  }else if (number1 > 0) {
    var result1 = "Result : Number (";
    var result2 = ") is positive.";
    var result = result1 + number1 + result2;
    output3.innerHTML = result;
  } else if (number1 < 0) {
    var result1 = "Result : Number (";
    var result2 = ") is negative.";
    var result = result1 + number1 + result2;
    output3.innerHTML = result;
  } else if (number1 == 0) {
    var result1 = "Result : Number (";
    var result2 = ") is zero.";
    var result = result1 + number1 + result2;
    output3.innerHTML = result;
  } else {
    result = "Result : Please write a number!";
    output3.innerHTML = result;
  }
}

//4. Write a js program to check whether a number is divisible by 5 and 11 or not.

function divisible() {
  var dom = document;
  var num1 = dom.getElementById("number1");
  var number1 = parseFloat(num1.value);

  if (num1.value == "" || num1.value >= 'A' || num1.value >= ' ') {
    var result = "Result : Please write a number!";
      output4.innerHTML = result;
  }else if (number1 % (5 && 11) == 0) {
    var result1 = "Result : Number (";
    var result2 = ") is divisible by 5 and 11.";
    var result = result1 + number1 + result2;
    output4.innerHTML = result;
  } else if (number1 % (5 && 11) !== 0) {
    var result1 = "Result : Number (";
    var result2 = ") is not divisible by 5 and 11.";
    var result = result1 + number1 + result2;
    output4.innerHTML = result;
  } else {
    result = "Result : Please write a number!";
    output4.innerHTML = result;
  }
}

// 5. Write a js program to check whether a number is even or odd.

function evenOdd() {
  var dom = document;
  var num1 = dom.getElementById("number");
  var number1 = parseFloat(num1.value);

  if (num1.value == "" || num1.value >= 'A' || num1.value >= ' ') {
    var result = "Result : Please write a number!";
      output5.innerHTML = result;
  }else if (number1 % 2 == 0) {
    var result1 = "Result : Number (";
    var result2 = ") is Even.";
    var result = result1 + number1 + result2;
    output5.innerHTML = result;
  } else if (number1 % 2 !== 0) {
    var result1 = "Result : Number (";
    var result2 = ") is Odd.";
    var result = result1 + number1 + result2;
    output5.innerHTML = result;
  } else {
    result = "Result : Please write a number!";
    output5.innerHTML = result;
  }
}

// 6. Write a js program to check whether a year is leap year or not.

function leapYear() {
  var dom = document;
  var num1 = dom.getElementById("year");
  var number1 = num1.value;
  
if (number1 == "" || number1 >= 'A' || num1.value >= ' ') {
  var result = "Result : Please write any year!";
    output6.innerHTML = result;
}else if (number1 % 4 == 0) {
    var result1 = "Result : Year (";
    var result2 = ") is a leap year.";
    var result = result1 + number1 + result2;
    output6.innerHTML = result;
  } else if (number1 % 4 != 0) {
    var result1 = "Result : Year (";
    var result2 = ") is not a leap year.";
    var result = result1 + number1 + result2;
    output6.innerHTML = result;
  } 
}

// 7. Write a js program to check whether a character is alphabet or not.

function chekAlphabet() {
  var dom = document;
  var num1 = dom.getElementById("character");
  var number1 = (num1.value);


    if (number1 == "") {
      var result = "Result : Please write any Character!";
        output7.innerHTML = result;
    }else if(number1 >= 'A' & number1.length == 1){
    var result1 = "Result : Character (";
    var result2 = ") is an alphabet .";
    var result = result1 + number1 + result2;
    output7.innerHTML = result;
  }else {
    var result1 = "Result : Character (";
    var result3 = ") is not an alphabet .";
    var result = result1 + number1 + result3;
    output7.innerHTML = result;
  }
  }
