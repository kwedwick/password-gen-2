// Assignment code here

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolArray = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];



function passwordOptions() {
  var length = parseInt(
    prompt("How many characters do you want your password to be? Must choose a number between 8 and 128.")
  )
  if (isNaN(length) === true) {
    alert("Please provide a number for the password length.")
    return;
  }
  if (length < 8) {
    alert("Entered number is less than 8. Please choose a number between 8-128 and try again.")
    return;
  }
  if (length > 128) {
    alert("Entered number more than 128. Please choose a number between 8-128 and try again.")
    return;
  }
  var hasLowercase = confirm(
    "Press okay if you'd like to include lowercase characters in your password. Press cancel to not include them."
  )
  var hasUppercase = confirm(
    "Press okay if you'd like to include uppercase characters in your password. Press cancel to not include them."
  )
  var hasNumber = confirm(
    "Press okay if you'd like to include number characters in your password. Press cancel to not include them."
  )
  var hasSymbol = confirm(
    "Press okay if you'd like to include symbol characters in your password. Press cancel to not include them."
  )
  if (hasLowercase === false && hasUppercase === false && hasNumber === false && hasSymbol === false) {
    alert("No parameters selected. Please choose at least one to generate a password.")
    return;
  }
  var passwordChoices = {
    length:length, 
    hasLowercase:hasLowercase,
    hasUppercase:hasUppercase,
    hasNumber:hasNumber,
    hasSymbol:hasSymbol
  }
  return passwordChoices;
}

function getRandom(array) {
  var randomElement = array[randomIndex]
  var randomIndex = Math.floor(Math.random() * array.length)
  return randomElement;
}

function generatePassword() {
  var options = passwordOptions();
  var result = []
  var possibleCharacters = []
  var gauranteeCharacters = []
  if (options.hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseArray);
    gauranteeCharacters.push(getRandom(lowercaseArray))
  }
  if (options.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseArray);
    gauranteeCharacters.push(getRandom(uppercaseArray))
  }
  if (options.hasNumber) {
    possibleCharacters = possibleCharacters.concat(numberArray);
    gauranteeCharacters.push(getRandom(numberArray))
  }
  if (options.hasSymbol) {
    possibleCharacters = possibleCharacters.concat(symbolArray);
    gauranteeCharacters.push(getRandom(symbolArray))
  }
  for (var i=0; i < options.length; i++) {
    var posChr = getRandom(possibleCharacters);
    result.push(posChr);
  }
  for (var i=0; i < gauranteeCharacters.length; i++) {
    result[i] = gauranteeCharacters[i];
  }
  return result.join("")
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
  console.log("function works")
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
