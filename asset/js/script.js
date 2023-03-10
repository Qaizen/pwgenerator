// Assignment code here
var numbers = "0123456789";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var symbols = "~!@#$%^&*()";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var all = "";  // All possible character variables availables for input

  // Create a variable named "length" and assign value for input, convert to integer using parseInt().
  var length = parseInt(window.prompt("Pick a numercial password length from 8-128."));

  // If input is less 8 or more than 128 show an error message prompt user to enter proper numercial value
  // if an error is produced again reset and return "undefined"
  if (length < 8 || length > 128) {
    alert("Error: Please enter a password length between 8 - 128 characters.");
    var input = window.prompt("Please enter a numerical password length between 8-128 characters: ");
    length = parseInt(input);
    if (length < 8 || length > 128) {
        return alert("Error: Invalid input, please try again");
    }
}

  // Confirm whether or not to use lowercase
  if (
    window.confirm("Do you want your password to contain lowercase letters?")
  ) {
    all += lower; // all = all + lower
  }

  // Confirm whether or not to use uppercase
  if (
    window.confirm("Do you want your password to contain uppercase letters?")
  ) {
    all += upper;
  }

  // Confirm whether or not to use numercial values
  if (window.confirm("Do you want your password to contain numerical values?")) {
    all += numbers;
  }

  // Confirm whether or not to use special characters
  if (
    window.confirm("Do you want your password to contain special characters?")
  ) {
    all += symbols;
  }

  // Create a variable called "allPw" and initialize as an empty string. Then it enters a for loop that will run for a number of iterations equal to the value of the "length" variable. On each iteration of the loop, a random character is chosen from the "all" string and added to the "allPw" variable using the += operator. The random character is chosen by using the Math.random() method, which returns a random number between 0 and 1, and multiplying it by the length of the "all" string. The Math.floor() method is used to round the result down to the nearest whole number, so that the result can be used as an index to retrieve a character from the "all" string. The for loop constructs a string of random characters of the length specified by the "length" variable.

  var allPw = "";
  for (var i = 0; i < length; i++) {
    allPw += all.charAt(Math.floor(Math.random() * all.length));
  }
  return allPw; // return the generated password here
}
