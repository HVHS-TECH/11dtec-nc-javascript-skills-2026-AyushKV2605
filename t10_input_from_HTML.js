console.log("Running Task 10...");



/****************************
 Main Code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
OUTPUT.innerHTML = "Hello World!<br>"

/****************************
 Functions
****************************/
function start() {
  console.log("Button pressed!");
 output.innerHTML = "<p>You pressed the button!</p>";}
 function getFormInput() {
    const nameField = document.getElementById("namefield");
    let username = nameField.value;
    OUTPUT.innerHTML = "<p>Your name is "+username+"</p>";
 }
