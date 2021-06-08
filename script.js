// Assignment code here

//<Test>
function generatePassword() {

  var password = "test4";
  console.log(genPassword.passLenght);

  return password; //Returns value to the writePassword fn for var password

}

//Input for length, lower case, upper case, number and special characters


//Arrays or objects? for each of the selections


//Loops to select and display random items from selected options



//Object for password's parameters
var genPassword = {
  passLenght: 8,
  passLowerCase: true,
  passUpperCase: true,
  passNumber: true,
  passSpecialChar: true

};


generatePassword(genPassword);


///</Test>
//////////////////////////////////////////////////////////////////
/////////////////////Given Code///////////////////////////////////
////////////////////////////////////////////////////////////////

// Get references to the #generate element = button on html
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Runs fn generatePassword
  var passwordText = document.querySelector("#password"); //pases passwordText.value to the text area in HTML

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
