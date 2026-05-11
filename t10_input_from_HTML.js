console.log("Running Task 10...");


/****************************
 Main Code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

OUTPUT.innerHTML = "Hello World!<br>";

/****************************
 Functions
****************************/
function start() {
  console.log("Button pressed!");

  OUTPUT.innerHTML = "<p>You pressed the button!</p>";
}


function getFormInput() {

  const NAME_FIELD = document.getElementById("namefield");

  let userName = NAME_FIELD.value;

  console.log(userName);

  OUTPUT.innerHTML = "<p>Your name is " + userName + "</p>";
}