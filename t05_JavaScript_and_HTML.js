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
 const OUTPUT = document.getElementById("spaceforJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

/****************************
 Main Code
 ****************************/
OUTPUT.innerHTML += ("<p>Hi "+ username +" as of " + year + " you are " + age + " years old.</p>")
OUTPUT.innerHTML += ("You were born in " + birthyear)
console.log("In 10 years you will be " + oldAge + " years old")
console.log("You have "+ money +" dollars")
console.log(" You spend half your money, now you have "+  halfmoney + " dollars")
console.log("Then you get $3, now you have " + (halfmoney + 3) +" dollars")




 /****************************
  Functions
   ****************************/
  