// Assignment code here

//<Test>
function generatePassword() {

  var password = "test4";
  console.log(passLength);

  return password; //Returns value to the writePassword fn for var password

}

//Input for length
//Check to see input is integer and between the allowed values
var lenghtCheck = function(passLength) {
  debugger;
  //Prompts user for lenght and converts to Int
  var askLength = prompt("Please enter how long you would like your password to be. Chose between 8-128 for the length.", "8");
  var passLength = parseInt(askLength, 10);
    //if they cancel input will be Nan and they will exit the fn
    if (passLength !== NaN && askLength !== null) {
      //if the number is int and not between the parameters set the user is alerted and told to try again
      if (Number.isInteger(passLength)) {
        console.log("pass");
          if (passLength < 8 || passLength > 128) {
            window.alert("The previous input was invalid. Please enter the correct parameters.");
            lenghtCheck();
          }
          //if input is Int and meets the lenght criteria user is alerted and should ask for the next input
          else{
            window.alert("Great, we'll create a password with " + passLength + " characters.");
            
            
            //fn to ask for next input


          }
      }
      //if they enter a string they will be told to enter correct value
      else{
        console.log("fail");
        window.alert("The previous input was invalid. Please enter the correct parameters.");
        lenghtCheck();
      } 
    }
    else {
      window.alert("Operation has been cancelled. Come again!");
    }
}

lenghtCheck();


//Input for lower case
var lowerCaseCheck = function(passLowerCase) {
  debugger;
  //Prompts user for lenght and converts to Int
  var askLowerCase = confirm("Select -OK- if you want lower-case letters included in your password. Otherwise click cancel.");
  var passLowerCase = askLowerCase;
    //if they cancel they will exit the fn
    if (passLowerCase === true) {
       console.log("pass");
        window.alert("Great, we'll create a password with lower-case characters.");
   
    } else {
       window.alert("Ok, no lower-case characters will be added.");
     }
}
lowerCaseCheck();

//Input for upper case

var upperCaseCheck = function(passUpperCase) {
  debugger;
  //Prompts user for lenght and converts to Int
  var askUpperCase = confirm("Select -OK- if you want lower-case letters included in your password. Otherwise click cancel.");
  var passUpperCase = askUpperCase;
    //if they cancel they will exit the fn
    if (passUpperCase === true) {
       console.log("pass");
        window.alert("Great, we'll create a password with upper-case characters.");
   
    } else {
       window.alert("Ok, no upper-case characters will be added.");
     }
}
upperCaseCheck();

//Input for number
var numberCheck = function(passNumber) {
  debugger;
  //Prompts user for lenght and converts to Int
  var askNumber = confirm("Select -OK- if you want numbers included in your password. Otherwise click cancel.");
  var passNumber = askNumber;
    //if they cancel they will exit the fn
    if (passNumber === true) {
       console.log("pass");
        window.alert("Great, we'll create a password with number characters.");
   
    } else {
       window.alert("Ok, no number characters will be added.");
     }
}
numberCheck();

//Input for special characters
//Input for number
var specialCheck = function(passSpecial) {
  debugger;
  //Prompts user for lenght and converts to Int
  var askSpecial = confirm("Select -OK- if you want special characters included in your password. Otherwise click cancel.");
  var passSpecial = askSpecial;
    //if they cancel they will exit the fn
    if (passSpecial === true) {
       console.log("pass");
        window.alert("Great, we'll create a password with special characters.");
   
    } else {
       window.alert("Ok, no special characters will be added.");
     }
}
specialCheck();

//Arrays or objects? for each of the selections


//Loops to select and display random items from selected options



//Object for password's parameters
// var genPassword = {
//   passLenght: 8,
//   passLowerCase: true,
//   passUpperCase: true,
//   passNumber: true,
//   passSpecialChar: true

// };


// generatePassword(genPassword);


// ///</Test>
// //////////////////////////////////////////////////////////////////
// /////////////////////Given Code///////////////////////////////////
// ////////////////////////////////////////////////////////////////

// // Get references to the #generate element = button on html
// var generateBtn = document.querySelector("#generate"); 

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword(); //Runs fn generatePassword
//   var passwordText = document.querySelector("#password"); //pases passwordText.value to the text area in HTML

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
