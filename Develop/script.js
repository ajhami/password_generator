// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Criteria
  
  // Password of length between 8 and 128
  // var lengthOfPassword = prompt("Enter the length of password (must be between 8 and 128 characters.)");
  var lengthOfPassword = 13;

  
  // Character types to include

  // lowercase
  // var includeLowerCase = prompt("Would you like to include lowercase letters? (Yes or No)");
  var includeLowerCase = "Yes";

  // uppercase
  // var includeUpperCase = prompt("Would you like to include uppercase letters? (Yes or No)");
  var includeUpperCase = "Yes";

  // numbers
  var includeNumbers = confirm("Would you like to include numbers? (Yes or No)");
  //var includeNumbers = "Yes";
  console.log(includeNumbers);

  // special characters
  // var includeSpecialCharacters = prompt("Would you like to include Special Characters? (Yes or No)");
  var includeSpecialCharacters = true;
  console.log(includeSpecialCharacters);


  //This line will use generatePassword function once properly implemented
  //var password = generatePassword();

  // This serves as a temporary placeholder to ensure the generate button works
  var password = "Th!$!$aTe$t84604";
  generatePassword(lengthOfPassword, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(len, includeLC, includeUC, includeNums, includeSpecials) {
  // Password character preference options
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // Possible character preference combinations
  var allLetters = lowerCaseLetters + upperCaseLetters;
  var lowerLettersAndNumbers = lowerCaseLetters + numbers;
  var upperLettersAndNumbers = upperCaseLetters + numbers;
  var allLettersAndNumbers = allLetters + numbers;
  var lowerLettersAndSpecials = lowerCaseLetters + specialChars;
  var upperLettersAndSpecials = upperCaseLetters + specialChars;
  var allLettersAndSpecials = allLetters + specialChars;
  var numbersAndSpecials = numbers + specialChars;
  var lowersNumbersandSpecials = lowerCaseLetters + numbersAndSpecials;
  var uppersNumbersandSpecials = upperCaseLetters + numbersAndSpecials;
  var allCharacters = lowerCaseLetters + upperCaseLetters + numbers + specialChars;
  
  console.log("lower Case: " + lowerCaseLetters + "\nlength: " + lowerCaseLetters.length);
  console.log("upper Case: " + upperCaseLetters + "\nlength: " + upperCaseLetters.length);
  console.log("numbers: " + numbers + "\nlength: " + numbers.length);
  console.log("Special Characters: " + specialChars + "\nlength: " + specialChars.length);
  console.log("all letters: " + allLetters + "\nlength: " + allLetters.length);
  console.log("lower case + numbers: " + lowerLettersAndNumbers + "\nlength: " + lowerLettersAndNumbers.length);
  console.log("upper case + numbers: " + upperLettersAndNumbers + "\nlength: " + upperLettersAndNumbers.length);
  console.log("all letters + numbers: " + allLettersAndNumbers + "\nlength: " + allLettersAndNumbers.length);
  console.log("lower case + specials: " + lowerLettersAndSpecials + "\nlength: " + lowerLettersAndSpecials.length);
  console.log("upper case + specials: " + upperLettersAndSpecials + "\nlength: " + upperLettersAndSpecials.length);
  console.log("all letters + specials: " + allLettersAndSpecials + "\nlength: " + allLettersAndSpecials.length);
  console.log("lower case + numbers + specials: " + lowersNumbersandSpecials + "\nlength: " + lowersNumbersandSpecials.length);
  console.log("upper case + numbers + specials: " + uppersNumbersandSpecials + "\nlength: " + uppersNumbersandSpecials.length);
  console.log("all characters: " + allCharacters + "\nlength: " + allCharacters.length);



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
