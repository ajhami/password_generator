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
  var password = generatePassword(8, true, true, true, true);

  // This serves as a temporary placeholder to ensure the generate button works
  //var password = "Th!$!$aTe$t84604";
  //generatePassword(lengthOfPassword/*, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters*/);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(len,includeLC, includeUC, includeNums, includeSpecials) {
  // Password character preference options
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var lowerCaseLettersArray = lowerCaseLetters.split("");
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperCaseLettersArray = upperCaseLetters.split("");
  var numbers = "0123456789";
  var numbersArray = numbers.split("");
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var specialCharsArray = specialChars.split("");

  // Possible character preference combinations
  var allLetters = lowerCaseLetters + upperCaseLetters;
  var allLettersArray = allLetters.split("");
  var lowerLettersAndNumbers = lowerCaseLetters + numbers;
  var lowerLettersAndNumbersArray = lowerLettersAndNumbers.split("");
  var upperLettersAndNumbers = upperCaseLetters + numbers;
  var upperLettersAndNumbersArray = upperLettersAndNumbers.split("");
  var allLettersAndNumbers = allLetters + numbers;
  var allLettersAndNumbersArray = allLettersAndNumbers.split("");
  var lowerLettersAndSpecials = lowerCaseLetters + specialChars;
  var lowerLettersAndSpecialsArray = lowerLettersAndSpecials.split("");
  var upperLettersAndSpecials = upperCaseLetters + specialChars;
  var upperLettersAndSpecialsArray = upperLettersAndSpecials.split("");
  var allLettersAndSpecials = allLetters + specialChars;
  var allLettersAndSpecialsArray = allLettersAndSpecials.split("");
  var numbersAndSpecials = numbers + specialChars;
  var numbersAndSpecialsArray = numbersAndSpecials.split("");
  var lowersNumbersandSpecials = lowerCaseLetters + numbersAndSpecials;
  var lowersNumbersandSpecialsArray = lowersNumbersandSpecials.split("");
  var uppersNumbersandSpecials = upperCaseLetters + numbersAndSpecials;
  var uppersNumbersandSpecialsArray = uppersNumbersandSpecials.split("");
  var allCharacters = lowerCaseLetters + upperCaseLetters + numbers + specialChars;
  var allCharactersArray = allCharacters.split("");

  console.log("lower Case: " + lowerCaseLettersArray + "\nlength: " + lowerCaseLettersArray.length);
  console.log("upper Case: " + upperCaseLettersArray + "\nlength: " + upperCaseLettersArray.length);
  console.log("numbers: " + numbersArray + "\nlength: " + numbersArray.length);
  console.log("Special Characters: " + specialCharsArray + "\nlength: " + specialCharsArray.length);
  console.log("all letters: " + allLettersArray + "\nlength: " + allLettersArray.length);
  console.log("lower case + numbers: " + lowerLettersAndNumbersArray + "\nlength: " + lowerLettersAndNumbersArray.length);
  console.log("upper case + numbers: " + upperLettersAndNumbersArray + "\nlength: " + upperLettersAndNumbersArray.length);
  console.log("all letters + numbers: " + allLettersAndNumbersArray + "\nlength: " + allLettersAndNumbersArray.length);
  console.log("lower case + specials: " + lowerLettersAndSpecialsArray + "\nlength: " + lowerLettersAndSpecialsArray.length);
  console.log("upper case + specials: " + upperLettersAndSpecialsArray + "\nlength: " + upperLettersAndSpecialsArray.length);
  console.log("all letters + specials: " + allLettersAndSpecialsArray + "\nlength: " + allLettersAndSpecialsArray.length);
  console.log("numbers + specials: " + numbersAndSpecialsArray + "\nlength: " + numbersAndSpecialsArray.length);
  console.log("lower case + numbers + specials: " + lowersNumbersandSpecialsArray + "\nlength: " + lowersNumbersandSpecialsArray.length);
  console.log("upper case + numbers + specials: " + uppersNumbersandSpecialsArray + "\nlength: " + uppersNumbersandSpecialsArray.length);
  console.log("all characters: " + allCharactersArray + "\nlength: " + allCharactersArray.length);



  // Pseudocode for password with all character types
  // if(includeLC, includeUC, includeNums, includeSpecials) <- if all those conditions are true
  //
  // create spec boolean functions that check the current password for characters in the object
  // while loop that runs as long as spec booleans aren't met
  // create password variable = "";
  // for loop goes to the length inputted
  // use random number generator - var randNum = Math.floor(Math.random()*(len + 1));
  // password = password + allCharactersArray[randNum];
  // if loop that will return password if all requirements are met
  //
  // If this method runs too slow, you can add force the function to add one of each of the 4 character types.
  var passwordArray = [];
  
  while(!containsChecker(passwordArray, lowerCaseLettersArray) || 
        !containsChecker(passwordArray, upperCaseLettersArray) ||
        !containsChecker(passwordArray, numbersArray) || 
        !containsChecker(passwordArray, specialCharsArray)){
  var password = "";

  if(includeLC && includeUC && includeNums && includeSpecials) {
    //var password = "";
    for(var i = 0; i < len; i++) {
      randNum = Math.floor(Math.random() * allCharactersArray.length);
      //console.log("Random Number = " + randNum);
      password = password + allCharactersArray[randNum];
      //console.log("password." + i + " = " + password);
    }
    console.log("password = " + password);

    var passwordArray = password.split("");

    console.log("Contains LC = " + containsChecker(passwordArray, lowerCaseLettersArray) + "\n" +
                "Contains UC = " + containsChecker(passwordArray, upperCaseLettersArray) + "\n" +
                "Contains # = " + containsChecker(passwordArray, numbersArray) + "\n" +
                "Contains $ = " + containsChecker(passwordArray, specialCharsArray));
    if(containsChecker(passwordArray, lowerCaseLettersArray) && 
       containsChecker(passwordArray, upperCaseLettersArray) &&
       containsChecker(passwordArray, numbersArray) && 
       containsChecker(passwordArray, specialCharsArray)) {
      return password;
    }

  }
  }



}


function containsChecker(arr, type) {
  //var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");

  for(var j = 0; j < type.length; j++){
    var found = arr.indexOf(type[j]);
    console.log(type[j] + " = arr[" + found + "]");
    if(found >= 0){
      return true;
    }
  }

  return false;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
