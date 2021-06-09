// Assignment code here

var lenghtCheck = function() {
  //debugger;
  //Prompts user for lenght and converts to Int
  var askLength = prompt("Please enter how long you would like your password to be. Chose between 8 - 128 for the length.", "8");
  var passLength = parseInt(askLength, 10);
    //if they cancel input will be null and they will exit the fn
    if (/*passLength !== NaN &&*/ askLength !== null) {
        //if the number is int and not between the parameters set the user is alerted and told to try again
        if (Number.isInteger(passLength)) {
          console.log("pass");
            if (passLength < 8 || passLength > 128) {
              window.alert("The previous input was invalid. Please enter the correct parameters.");
              lenghtCheck();
            } else {
                //if input is Int and meets the lenght criteria user is alerted and should ask for the next input
                window.alert("Great, 😊 we'll create a password with " + passLength + " characters.");
                lengthOk = true;
                genPassword.passLength = passLength;
                return genPassword.passLength;
              }
        } else {
        //if they enter a string they will be told to enter correct value
            console.log("fail");
            window.alert("The previous input was invalid. Please enter the correct parameters.");
            lenghtCheck();
          } 
    } else {
        //window.alert("Operation has been cancelled. Come again!");
        cancelSelected = false;
        return cancelSelected;
      }
}

//Input for lower case
var lowerCaseCheck = function() {
  //debugger;
  //Prompts user lowercase characters
  var askLowerCase = confirm("Select -OK- if you want lower-case letters included in your password. Otherwise click cancel.");
  var passLowerCase = askLowerCase;
    //if they cancel it will jump to the next option
    if (passLowerCase === true) {
        console.log("pass");
        window.alert("Great, we'll create a password with lower-case characters.");
        genPassword.passLowerCase = true;
        return genPassword.passLowerCase;
    } else {
        window.alert("Ok, no lower-case characters will be added.");
        genPassword.passLowerCase = false;
        return genPassword.passLowerCase;
     }
}

//Input for upper case
var upperCaseCheck = function() {
  //debugger;
  //Prompts user uppercase characters
  var askUpperCase = confirm("Select -OK- if you want upper-case letters included in your password. Otherwise click cancel.");
  var passUpperCase = askUpperCase;
    //if they cancel they jump to the next fn
    if (passUpperCase === true) {
        console.log("pass");
        window.alert("Great, we'll create a password with upper-case characters.");
        genPassword.passUpperCase = true;
        return genPassword.passUpperCase;   
    }  else {
       window.alert("Ok, no upper-case characters will be added.");
       genPassword.passUpperCase = false;
       return genPassword.passUpperCase; 
     }
}

//Input for number
var numberCheck = function() {
  //debugger;
  //Prompts user for input
  var askNumber = confirm("Select -OK- if you want numbers included in your password. Otherwise click cancel.");
  var passNumber = askNumber;
    //if they cancel they will be taken to the next step
    if (passNumber === true) {
        console.log("pass");
        window.alert("Great, we'll create a password with number characters.");
        genPassword.passNumber = true;
        return genPassword.passNumber; 
    } else {
        window.alert("Ok, no number characters will be added.");
        genPassword.passNumber = false;
        return genPassword.passNumber; 
     }
}

//Input for special characters
var specialCheck = function() {
  //debugger;
  //Prompts user for input
  var askSpecial = confirm("Select -OK- if you want special characters included in your password. Otherwise click cancel.");
  var passSpecial = askSpecial;
    //if they cancel they will go to next step
    if (passSpecial === true) {
       console.log("pass");
        window.alert("Great, we'll create a password with special characters.");
        genPassword.passSpecialChar = true;
        return genPassword.passSpecialChar; 
    } else {
       window.alert("Ok, no special characters will be added.");
       genPassword.passSpecialChar = false;
       return genPassword.passSpecialChar; 
     }
}

function generatePassword() {
  //generate random number for the index selection in the arrays
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
    return value;
  };
  //function to put the password array together based on the inputs and random generated indexes
  var randomPick = function() {
    var y = 0;
    var pl = genPassword.passLength;
    var x = 0;
    //the x++ will add once all the options have been evaluated, 
    //but in the event that not all of them were selected the y++ would prevent the
    //code from going over the length selected.
    for (x; x < pl && y < pl; x++) {
      //if lower case selected it will run this if once and add y++
      if (genPassword.passLowerCase && y < pl) {
      var index = randomNumber(0, 26);
      selection[y] = lowerCaseArray[index]; 
      y++;
      console.log(selection);
    } //if uppper case selected it will run this if once and add y++
      if (genPassword.passUpperCase && y < pl) {
        index = randomNumber(0, 26);
        selection[y] = upperCaseArray[index];
        console.log(selection);
        y++;
      }//if numbers selected it will run this if once and add y++
      if (genPassword.passNumber && y < pl) {
        index = randomNumber(0, 10);
        selection[y] = numberArray[index];
        console.log(selection);
        y++;
      }//if special characters selected it will run this if once and add y++
      if (genPassword.passSpecialChar && y < pl) {
        index = randomNumber(0, 13);
        selection[y] = specialArray[index];
        console.log(selection);
        y++;
      }
      //join the array as a string
      console.log(selection.join(""));
      var password = selection.join("");  
      }
      //reset arrays
      selection = [];

      //debugger;
      //return password to the generatePassword()
      console.log("pass: " + password);
      return password;
    };    
  //where the code "starts" when the user clicks on the button and the generatePassword()
  //is initiated
   if (lenghtCheck()) {
       lowerCaseCheck();
       upperCaseCheck();
       numberCheck();
       specialCheck();
       //if no selection is made throw an error and have them start at the beginning
       if (!genPassword.passLowerCase && !genPassword.passUpperCase && !genPassword.passNumber && !genPassword.passSpecialChar) {
        window.alert("Error! At least one of the options needs to be selected. Please try again.");
        generatePassword();
        } else {
          //after all inputs everything is good and takes you to were the password will be generated
          password = randomPick();
        }
    //if they select cancel when entering the length this will take them out
   } else if (!cancelSelected) {  
    window.alert("Operation has been cancelled. Come again!");
    return "Operation Cancelled. 🙁 ";
     }

  //debugger;
  console.log("pass2: " + password);
  //returns password for display
  return password;
}

//arrays for selections
var selection = [];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"];

//Object for password's parameters Defaulted
var genPassword = {
  passLength: 8,
  passLowerCase: true,
  passUpperCase: true,
  passNumber: true,
  passSpecialChar: true
};

// //////////////////////////////////////////////////////////////////
// /////////////////////Given Code///////////////////////////////////
// ////////////////////////////////////////////////////////////////

// Get references to the #generate element = button on html
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
      var password = 0; //reset password
      password = generatePassword(); //Runs fn generatePassword
      var passwordText = document.querySelector("#password"); //pases passwordText.value to the text area in HTML
      debugger;
      passwordText.value = password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
