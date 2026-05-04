/****************************
Name of Task: Maths
****************************/
console.log( "Running t05_javascriptandHtml.js");

//Variables
 let username =" Ayush ";
 let year = 2026;
 let age = 15;
 let money = 10;
 let birthyear;
 let oldage;
 oldAge = age + 10;
 birthyear = year - age
 halfmoney = money / 2
 plusMoney = halfmoney + 3
 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

/****************************
 Main Code
 ****************************/
writeLine += "<p>Hi " + username + " as of " + year + " you are " + age + " years old.</p>";
OUTPUT.innerHTML += "<p>You were born in " + birthyear +"</p>";
OUTPUT.innerHTML += "<p>In 10 years you will be " + oldAge + " years old</p>";
OUTPUT.innerHTML += "<p>You have "+ money +" dollars</p>";
OUTPUT.innerHTML += "<p> You spend half your money, now you have " +  halfmoney + " dollars</p>";
OUTPUT.innerHTML += "<p>Then you get $3, now you have " + plusMoney + " dollars</p>";




 /****************************
  Functions
   ****************************/
  function writeLine(text) {
    OUTPUT.innerHTML += "<p>" + text + "</p>";
}
  
function writeHeading(text) {
    OUTPUT.innerHTML += "<h2>" + text + "</h2>";
}