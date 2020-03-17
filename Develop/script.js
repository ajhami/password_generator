// HTML Elements
var generateBtn = document.querySelector("#generate");
var minusLen = document.querySelector("#minus");
var plusLen = document.querySelector("#plus");
var lenEl = document.querySelector("#count");
var lowerCaseSelect = document.querySelector("#lowerCaseSelect"); 
var upperCaseSelect = document.querySelector("#upperCaseSelect");
var numberSelect = document.querySelector("#numberSelect"); 
var specialSelect = document.querySelector("#specialSelect");  


// Password Specification Variables
var lengthOfPassword = 12;
var includeLowerCase = false;
var includeUpperCase = false;
var includeNumbers = false;
var includeSpecialCharacters = false;


// Event Listeners for Password Specifications
plusLen.addEventListener("click", function() {
  if(lengthOfPassword < 128) {  
    lengthOfPassword++;
    lenEl.textContent = lengthOfPassword;
  }
});

minusLen.addEventListener("click", function() {
  if(lengthOfPassword > 8) {
    lengthOfPassword--;
    lenEl.textContent = lengthOfPassword;
  }
}); 

lowerCaseSelect.addEventListener("change", function(event){
  var value = event.target.value;
  if(value === "yes") {
    includeLowerCase = true;
  }
  else {
    includeLowerCase = false;
  }
});

upperCaseSelect.addEventListener("change", function(event){
  var value = event.target.value;
  if(value === "yes") {
    includeUpperCase = true;
  }
  else {
    includeUpperCase = false;
  }
});

numberSelect.addEventListener("change", function(event){
  var value = event.target.value;
  if(value === "yes") {
    includeNumbers = true;
  }
  else {
    includeNumbers = false;
  }
});

specialSelect.addEventListener("change", function(event){
  var value = event.target.value;
  if(value === "yes") {
    includeSpecialCharacters = true;
  }
  else {
    includeSpecialCharacters = false;
  }
});

// event listener to generate button
generateBtn.addEventListener("click", writePassword);



// FUNCTIONS

// Generates the password with a specified character bank array
function generatePassword(len, bank) {

  var password = "";

  for(var i = 0; i < len; i++) {
    randNum = Math.floor(Math.random() * bank.length);
    password = password + bank[randNum];
  }
  return password;
}


// Used to verify if a created password contains specified characters
function containsChecker(arr, type) {
  for(var i = 0; i < type.length; i++){
    var found = arr.indexOf(type[i]);
    console.log(type[i] + " = arr[" + found + "]");
    if(found >= 0){
      return true;
    }
  }
  return false;
}


// Write password to the password input based off of user specifications
function writePassword() {

  // Listing the 15 different password preference combinations
  // and creating arrays to draw from for password creation

  // Password character type preference options

  // 1 - lowercase letters
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var lowerCaseLettersArray = lowerCaseLetters.split("");
  // 2 - uppercase letters
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperCaseLettersArray = upperCaseLetters.split("");
  // 3 - numbers
  var numbers = "0123456789";
  var numbersArray = numbers.split("");
  // 4 - special characters
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var specialCharsArray = specialChars.split("");

  // Possible character preference combination arrays

  // 5 - all letters
  var allLetters = lowerCaseLetters + upperCaseLetters;
  var allLettersArray = allLetters.split("");
  // 6 - lowercase letters and numbers
  var lowerLettersAndNumbers = lowerCaseLetters + numbers;
  var lowerLettersAndNumbersArray = lowerLettersAndNumbers.split("");
  // 7 - uppercase letters and numbers
  var upperLettersAndNumbers = upperCaseLetters + numbers;
  var upperLettersAndNumbersArray = upperLettersAndNumbers.split("");
  // 8 - all letters and numbers
  var allLettersAndNumbers = allLetters + numbers;
  var allLettersAndNumbersArray = allLettersAndNumbers.split("");
  // 9 - lowercase letters and special characters
  var lowerLettersAndSpecials = lowerCaseLetters + specialChars;
  var lowerLettersAndSpecialsArray = lowerLettersAndSpecials.split("");
  // 10 - uppercase letters and special characters
  var upperLettersAndSpecials = upperCaseLetters + specialChars;
  var upperLettersAndSpecialsArray = upperLettersAndSpecials.split("");
  // 11 - all letters and special characters
  var allLettersAndSpecials = allLetters + specialChars;
  var allLettersAndSpecialsArray = allLettersAndSpecials.split("");
  // 12 - numbers and special characters
  var numbersAndSpecials = numbers + specialChars;
  var numbersAndSpecialsArray = numbersAndSpecials.split("");
  // 13 - lowercase letters, numbers, and special characters
  var lowersNumbersandSpecials = lowerCaseLetters + numbersAndSpecials;
  var lowersNumbersandSpecialsArray = lowersNumbersandSpecials.split("");
  // 14 - uppercase letters, numbers, and special characters;
  var uppersNumbersandSpecials = upperCaseLetters + numbersAndSpecials;
  var uppersNumbersandSpecialsArray = uppersNumbersandSpecials.split("");
  // 15 - all character types
  var allCharacters = lowerCaseLetters + upperCaseLetters + numbers + specialChars;
  var allCharactersArray = allCharacters.split("");


  // Filtering through password preferences and using the generatePassword function accordingly

  var passwordArray = [];

  // If the user doesn't select any of the character preferences
  if(!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters){
    alert("Please select at least one character type to include in your new password.");
    return;
  }

  // 1
  // User wants to use only lowercase letters
  else if(includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {

    var password = generatePassword(lengthOfPassword, lowerCaseLettersArray);

    ///////// 
    // Just for log checks
    console.log("Lower Case Letters Only!\n\n");
    console.log("password = " + password);

    var passwordArray = password.split("");

    console.log("Contains LC = " + containsChecker(passwordArray, lowerCaseLettersArray));  
    ///////// 
  }

  // 2
  // User wants to use only uppercase letters
  else if(!includeLowerCase && includeUpperCase && !includeNumbers && !includeSpecialCharacters) {

    var password = generatePassword(lengthOfPassword, upperCaseLettersArray);

    ///////// 
    // Just for log checks
    console.log("Upper Case Letters Only!\n\n");
    console.log("password = " + password);

    var passwordArray = password.split("");

    console.log("Contains UC = " + containsChecker(passwordArray, upperCaseLettersArray));
    ////////
  }

  // 3
  // User wants to use only numbers
  else if(!includeLowerCase && !includeUpperCase && includeNumbers && !includeSpecialCharacters) {

    var password = generatePassword(lengthOfPassword, numbersArray);

    ///////// 
    // Just for log checks
    console.log("Numbers Only!\n\n");
    console.log("password = " + password);

    var passwordArray = password.split("");

    console.log("Contains Numbers = " + containsChecker(passwordArray, numbersArray));
    ////////
  }

  // 4
  // User wants to use only special characters
  else if(!includeLowerCase && !includeUpperCase && !includeNumbers && includeSpecialCharacters) {

    var password = generatePassword(lengthOfPassword, specialCharsArray);

    ///////// 
    // Just for log checks
    console.log("Special Characters Only!\n\n");
    console.log("password = " + password);

    var passwordArray = password.split("");

    console.log("Contains $ = " + containsChecker(passwordArray, specialCharsArray));
    ////////
  }

  // 5
  // User wants to use all letters
  else if(includeLowerCase && includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
  
    while(!containsChecker(passwordArray, lowerCaseLettersArray) || 
          !containsChecker(passwordArray, upperCaseLettersArray)){

      var password = generatePassword(lengthOfPassword, allLettersArray);

      ///////// 
      // Just for log checks
      console.log("All Letters!\n\n");
      console.log("password = " + password);

      var passwordArray = password.split("");

      console.log("Contains LC = " + containsChecker(passwordArray, lowerCaseLettersArray) + "\n" +
                  "Contains UC = " + containsChecker(passwordArray, upperCaseLettersArray));
    }
    /////////
  }

  // 6
  // User wants to use lowercase letters and numbers
  else if(includeLowerCase && !includeUpperCase && includeNumbers && !includeSpecialCharacters) {

    while(!containsChecker(passwordArray, lowerCaseLettersArray) || 
          !containsChecker(passwordArray, numbersArray)){

      var password = generatePassword(lengthOfPassword, lowerLettersAndNumbersArray);

      ///////// 
      // Just for log checks
      console.log("Lower Case Letters and Numbers!\n\n");
      console.log("password = " + password);

      var passwordArray = password.split("");

      console.log("Contains LC = " + containsChecker(passwordArray, lowerCaseLettersArray) + "\n" +
                  "Contains Numbers = " + containsChecker(passwordArray, numbersArray));
    }
    /////////
  }

  // 7
  // User wants to use uppercase letters and numbers
  else if(!includeLowerCase && includeUpperCase && includeNumbers && !includeSpecialCharacters) {

    while(!containsChecker(passwordArray, upperCaseLettersArray) || 
          !containsChecker(passwordArray, numbersArray)){

      var password = generatePassword(lengthOfPassword, upperLettersAndNumbersArray);

      ///////// 
      // Just for log checks
      console.log("Upper Case Letters and Numbers!\n\n");
      console.log("password = " + password);

      var passwordArray = password.split("");

      console.log("Contains UC = " + containsChecker(passwordArray, upperCaseLettersArray) + "\n" +
                  "Contains Numbers = " + containsChecker(passwordArray, numbersArray));
    }
    /////////
  }

  // 8
  // User wants to use all letters and numbers
  else if(includeLowerCase && includeUpperCase && includeNumbers && !includeSpecialCharacters) {
  
    console.log("All Letters and Numbers!\n\n");
    while(!containsChecker(passwordArray, lowerCaseLettersArray) || 
          !containsChecker(passwordArray, upperCaseLettersArray) ||
          !containsChecker(passwordArray, numbersArray)){

      var password = generatePassword(lengthOfPassword, allLettersAndNumbersArray);

      ///////// 
      // Just for log checks

      console.log("password = " + password);

      var passwordArray = password.split("");

      console.log("Contains LC = " + containsChecker(passwordArray, lowerCaseLettersArray) + "\n" +
                  "Contains UC = " + containsChecker(passwordArray, upperCaseLettersArray) + "\n" +
                  "Contains Numbers = " + containsChecker(passwordArray, numbersArray));
    }
    /////////
  }

  // 9
  // User wants to use lowercase letters and special characters
  else if(includeLowerCase && !includeUpperCase && !includeNumbers && includeSpecialCharacters) {

    while(!containsChecker(passwordArray, lowerCaseLettersArray) || 
          !containsChecker(passwordArray, specialCharsArray)){

      var password = generatePassword(lengthOfPassword, lowerLettersAndSpecialsArray);

      ///////// 
      // Just for log checks
      console.log("Lower Case Letters and Special Characters!\n\n");
      console.log("password = " + password);

      var passwordArray = password.split("");

      console.log("Contains LC = " + containsChecker(passwordArray, lowerCaseLettersArray) + "\n" +
                  "Contains $ = " + containsChecker(passwordArray, specialCharsArray));
    }
    /////////
  }

  // 10
  // User wants to use uppercase letters and special characters
  else if(!includeLowerCase && includeUpperCase && !includeNumbers && includeSpecialCharacters) {

    while(!containsChecker(passwordArray, upperCaseLettersArray) || 
          !containsChecker(passwordArray, specialCharsArray)){

      var password = generatePassword(lengthOfPassword, upperLettersAndSpecialsArray);

      ///////// 
      // Just for log checks
      console.log("Upper Case Letters and Special Characters!\n\n");
      console.log("password = " + password);

      var passwordArray = password.split("");

      console.log("Contains UC = " + containsChecker(passwordArray, upperCaseLettersArray) + "\n" +
                  "Contains Numbers = " + containsChecker(passwordArray, specialCharsArray));
    }
    /////////
  }

  // 11
  // User wants to use all letters and special characters
  else if(includeLowerCase && includeUpperCase && !includeNumbers && includeSpecialCharacters) {
    
    console.log("All Character Types!\n\n");
    while(!containsChecker(passwordArray, lowerCaseLettersArray) || 
          !containsChecker(passwordArray, upperCaseLettersArray) ||
          !containsChecker(passwordArray, specialCharsArray)){

      var password = generatePassword(lengthOfPassword, allLettersAndSpecialsArray);

      ///////// 
      // Just for log checks

      console.log("password = " + password);

      var passwordArray = password.split("");

      console.log("Contains LC = " + containsChecker(passwordArray, lowerCaseLettersArray) + "\n" +
                  "Contains UC = " + containsChecker(passwordArray, upperCaseLettersArray) + "\n" +
                  "Contains $ = " + containsChecker(passwordArray, specialCharsArray));
    }
    /////////
  }  

  // 12
  // User wants to use numbers and special characters
  else if(!includeLowerCase && !includeUpperCase && includeNumbers && includeSpecialCharacters) {
    
    console.log("All Character Types!\n\n");
    while(!containsChecker(passwordArray, numbersArray) || 
          !containsChecker(passwordArray, specialCharsArray)){

      var password = generatePassword(lengthOfPassword, numbersAndSpecialsArray);

      ///////// 
      // Just for log checks

      console.log("password = " + password);

      var passwordArray = password.split("");

      console.log("Contains Numbers = " + containsChecker(passwordArray, numbersArray) + "\n" +
                  "Contains $ = " + containsChecker(passwordArray, specialCharsArray));
    }
    /////////
  }

  // 13
  // User wants to use lowercase letters, numbers, and special characters
  else if(includeLowerCase && !includeUpperCase && includeNumbers && includeSpecialCharacters) {
    
    console.log("All Character Types!\n\n");
    while(!containsChecker(passwordArray, lowerCaseLettersArray) ||
          !containsChecker(passwordArray, numbersArray) || 
          !containsChecker(passwordArray, specialCharsArray)){

      var password = generatePassword(lengthOfPassword, lowersNumbersandSpecialsArray);

      ///////// 
      // Just for log checks

      console.log("password = " + password);

      var passwordArray = password.split("");

      console.log("Contains LC = " + containsChecker(passwordArray, lowerCaseLettersArray) + "\n" +
                  "Contains Numbers = " + containsChecker(passwordArray, numbersArray) + "\n" +
                  "Contains $ = " + containsChecker(passwordArray, specialCharsArray));
    }
    /////////
  }

  // 14
  // User wants to use uppercase letters, numbers, and special characters
  else if(!includeLowerCase && includeUpperCase && includeNumbers && includeSpecialCharacters) {
    
    console.log("All Character Types!\n\n");
    while(!containsChecker(passwordArray, upperCaseLettersArray) ||
          !containsChecker(passwordArray, numbersArray) || 
          !containsChecker(passwordArray, specialCharsArray)){

      var password = generatePassword(lengthOfPassword, uppersNumbersandSpecialsArray);

      ///////// 
      // Just for log checks

      console.log("password = " + password);

      var passwordArray = password.split("");

      console.log("Contains UC = " + containsChecker(passwordArray, upperCaseLettersArray) + "\n" +
                  "Contains Numbers = " + containsChecker(passwordArray, numbersArray) + "\n" +
                  "Contains $ = " + containsChecker(passwordArray, specialCharsArray));
    }
    /////////
  }

  // 15
  // User wants to use all character types
  else if(includeLowerCase && includeUpperCase && includeNumbers && includeSpecialCharacters) {
    
    console.log("All Character Types!\n\n");
    while(!containsChecker(passwordArray, lowerCaseLettersArray) || 
          !containsChecker(passwordArray, upperCaseLettersArray) ||
          !containsChecker(passwordArray, numbersArray) || 
          !containsChecker(passwordArray, specialCharsArray)){

      var password = generatePassword(lengthOfPassword, allCharactersArray);

      ///////// 
      // Just for log checks

      console.log("password = " + password);

      var passwordArray = password.split("");

      console.log("Contains LC = " + containsChecker(passwordArray, lowerCaseLettersArray) + "\n" +
                  "Contains UC = " + containsChecker(passwordArray, upperCaseLettersArray) + "\n" +
                  "Contains Numbers = " + containsChecker(passwordArray, numbersArray) + "\n" +
                  "Contains $ = " + containsChecker(passwordArray, specialCharsArray));
      
    }
  }

  // Writing the generated password to the html password box
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  console.clear();
}
