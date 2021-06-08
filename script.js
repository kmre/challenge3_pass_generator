// Assignment code here

//<Test>


//Input for length
//Check to see input is integer and between the allowed values

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
                return lengthOk;
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
  //Prompts user for lenght and converts to Int
  var askLowerCase = confirm("Select -OK- if you want lower-case letters included in your password. Otherwise click cancel.");
  var passLowerCase = askLowerCase;
    //if they cancel they will exit the fn
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
  //Prompts user for lenght and converts to Int
  var askUpperCase = confirm("Select -OK- if you want lower-case letters included in your password. Otherwise click cancel.");
  var passUpperCase = askUpperCase;
    //if they cancel they will exit the fn
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
  //Prompts user for lenght and converts to Int
  var askNumber = confirm("Select -OK- if you want numbers included in your password. Otherwise click cancel.");
  var passNumber = askNumber;
    //if they cancel they will exit the fn
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
  //Prompts user for lenght and converts to Int
  var askSpecial = confirm("Select -OK- if you want special characters included in your password. Otherwise click cancel.");
  var passSpecial = askSpecial;
    //if they cancel they will exit the fn
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
  // var password = "test4";
  // console.log(passLength);
  //debugger;
  
  
  //console.log(lenghtCheck());
  //lenghtCheck();
  // return password; //Returns value to the writePassword fn for var password
  

  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
  
    return value;
  };

  var randomPick = function() {
    debugger; 
    for (var x = 0; x < genPassword.passLength; x++) {
     
      if (genPassword.passLowerCase) {
        var index = randomNumber(0, 26);
        selection[x] = lowerCaseArray[index]; 
        x++;
        console.log(selection);
        if (genPassword.passUpperCase) {
          index = randomNumber(0, 26);
          selection[x] = upperCaseArray[index];
          console.log(selection);
        }
console.log(selection.join(""));

        }
      }
      
    };    
  


   if (lenghtCheck()) {
       lowerCaseCheck();
       upperCaseCheck();
       numberCheck();
       specialCheck();
       if (!genPassword.passLowerCase && !genPassword.passUpperCase && !genPassword.passNumber && !genPassword.passSpecialChar) {
        window.alert("Error! At least one of the options needs to be selected. Please try again.");
        generatePassword();
        } else {
          randomPick();
        }
   } else if (!cancelSelected) {  
    window.alert("Operation has been cancelled. Come again!");
    return "Operation Cancelled. 🙁 ";
     }
}




var selection = [];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Object for password's parameters Defaulted
var genPassword = {
  passLength: 8,
  passLowerCase: true,
  passUpperCase: true,
  passNumber: true,
  passSpecialChar: true
};

// generatePassword(genPassword);


// ///</Test>
// //////////////////////////////////////////////////////////////////
// /////////////////////Given Code///////////////////////////////////
// ////////////////////////////////////////////////////////////////

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
