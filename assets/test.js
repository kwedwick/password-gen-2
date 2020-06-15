// Assignment code here
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const passwordDisplay = document.getElementById('passwordDisplay')

const form = document.getElementById('userInputForm')

const UPPERCASE_ASCII_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_ASCII_CODES = arrayFromLowToHigh(97, 122)
const NUMBERS_ASCII_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_ASCII_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64).concat(
        arrayFromLowToHigh(91, 96).concat(
            arrayFromLowToHigh(123, 126)
        )
    )
)



characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)


form.addEventListener('userInputForm', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeLowercase = includeLowercaseElement.checked
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_ASCII_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_ASCII_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBERS_ASCII_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_ASCII_CODES)
    const passwordCharacters = []

    for (let i = 0; i < characterAmount; i++){
        const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')

}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}


function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
};

















// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



//document.getElementById("btn").addEventListener("click", function() {
//  console.log("Button was pressed!")
//});