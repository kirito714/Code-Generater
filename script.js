// Assignment Code // work some of this on 5.26.21 in office hours with tucker and friends.
// all my var
const generateBtn = document.querySelector("#generate");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const upperCase = lowerCase.toUpperCase();

const numeric = "0123456789";

const special = "!@#$%^^&())";

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let newPassword = "";
  var params = {};
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  params.lower = confirm("Would you like to include lowercase?");

  params.upper = confirm("Would you like to include upper");

  params.numeric = confirm("Would you like to include numeric?");

  params.speial = confirm("Would you like to include special characters?");

  params.varValid = prompt("Pick a password length from 8 - 128.");
  console.log(newPassword);

  if (params.lower) {
    newPassword += lowerCase;
    console.log(newPassword);
  }

  if (params.upper) {
    newPassword += upperCase;
    console.log(newPassword);
  }
  if (params.numeric) {
    newPassword += numeric;
    console.log(newPassword);
  }
  if (params.speial) {
    newPassword += special;
    console.log(newPassword);
  }
  if (params.varValid < 8 || params.varValid > 128 || isNaN(params.varValid)) {
    alert(
      "Try again. Your secrete Password must be between 8 and 128 numerical characters."
    );
  }
  if (!params.lower && !params.upper && !params.numeric && !params.speial) {
    alert(
      "You must select atleast one proper character type for your password."
      
    );
    return generatePassword();
  }
  var finalPassword = "";
  if (params.varValid > 8 || params.varValid < 128) {
    // need to make a four loop that runs the same number of times as
    for (i = 0; i < params.varValid; i++) {
      finalPassword += getRandomVal(newPassword);
    }
  }

  return finalPassword;
}

function getRandomVal(str) {
  var index = Math.floor(Math.random() * str.length);
  return str[index];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

