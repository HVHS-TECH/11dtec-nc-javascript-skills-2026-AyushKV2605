console.log("13_functions_return.js");

/*********************************
  main code
*********************************/

function runTask11() {

  const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

  // get values from the form
  const NAME_FIELD = document.getElementById("nameField");
  const AGE_FIELD = document.getElementById("ageField");
  const MONEY_FIELD = document.getElementById("moneyField");
  const YEAR_FIELD = document.getElementById("yearField");

  let username = NAME_FIELD.value;
  let age = Number(AGE_FIELD.value);
  let money = Number(MONEY_FIELD.value);
  let year = Number(YEAR_FIELD.value);

  // calculations
  let birthYear = year - age;
  let oldAge = age + 10;
  let extraMoney = money + 3;

  // output to HTML
  OUTPUT.innerHTML = "<p>Hi " + username + " as of " + year + " you are " + age + " years old. You have " + money + " dollars.</p>";
  OUTPUT.innerHTML += "<p>You were born in " + birthYear + "</p>";
  OUTPUT.innerHTML += "<p>In ten years you will be " + oldAge + "</p>";
  OUTPUT.innerHTML += "<p>You have " + money + " dollars</p>";
  OUTPUT.innerHTML += "<p>You spend half your money, you now have " + money / 2 + " dollars</p>";
  OUTPUT.innerHTML += "<p>You get 3 dollars, now you have " + extraMoney + " dollars</p>";
  OUTPUT.innerHTML += "<br>This week's pay:<br>";
  OUTPUT.innerHTML += "Monday: $" + mondayPay + "<br>";
  OUTPUT.innerHTML += "Tuesday: $" + tuesdayPay + "<br>";
  function CalculatePay(_hours) {
  let mondayPay = calculatePay(8);
  let tuesdayPay = calculatePay(6);
}


}

let name = "Ayush";
let age = 15;
let isAwake = true;

var num1 = "50";
num1 + num1;

var num2 = "50";
num2 + num2;

num1 = Number(num1);
num1 + num1;

if (age < 15) {
    console.log("Definitely too young");
}

if (age >= 15) {
    console.log("Might be too old");
}

if (age === 15) {
    console.log("Just right!");
}

function calculatePay(_hours) {
    let pay = _hours * 18.80;
    pay = pay - (pay * 0.105);
    pay = pay - (pay * 0.04);
    pay = pay + 10;
    return pay;
}