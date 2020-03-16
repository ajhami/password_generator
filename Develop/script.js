// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {

  //////////////////////////////////////////////
  // Criteria
  
  // Password of length between 8 and 128
  var lengthOfPassword = prompt("Enter the length of password (must be between 8 and 128 characters.)");
  //var lengthOfPassword = 8;

  
  // Character types to include

  // lowercase
  var includeLowerCase = confirm("Would you like to include lowercase letters? (Yes or No)");
  //var includeLowerCase = "Yes";

  // uppercase
  var includeUpperCase = confirm("Would you like to include uppercase letters? (Yes or No)");
  //var includeUpperCase = "Yes";

  // numbers
  var includeNumbers = confirm("Would you like to include numbers? (Yes or No)");
  //var includeNumbers = "Yes";
  //console.log(includeNumbers);

  // special characters
  var includeSpecialCharacters = confirm("Would you like to include Special Characters? (Yes or No)");
  //var includeSpecialCharacters = true;
  console.log(includeSpecialCharacters);

  ////////////////////////////////////////////////




  // Password character type preference options
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var lowerCaseLettersArray = lowerCaseLetters.split("");
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperCaseLettersArray = upperCaseLetters.split("");
  var numbers = "0123456789";
  var numbersArray = numbers.split("");
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var specialCharsArray = specialChars.split("");

  // Possible character preference combination arrays
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










  //This line will use generatePassword function once properly implemented
  //var password = generatePassword(8, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters);

  // This serves as a temporary placeholder to ensure the generate button works
  //var password = "Th!$!$aTe$t84604";
  //generatePassword(lengthOfPassword/*, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters*/);


  /////////////////////////////
  // Using the generatePassword Function

  var passwordArray = [];

  // 1
  // User wants to use only lowercase letters
  if(includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {

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

    console.log("Contains Numbers = " + containsChecker(passwordArray, specialCharsArray));
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
    /////////
  }

  /////////////////////////////


  // Writing the generated password to the html password box
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






function generatePassword(len, bank) {

  var password = "";

  for(var i = 0; i < len; i++) {
    randNum = Math.floor(Math.random() * bank.length);
    //console.log("Random Number = " + randNum);
    password = password + bank[randNum];
    //console.log("password." + i + " = " + password);
  }
    
  console.log("password = " + password);

  return password;
  
}






function containsChecker(arr, type) {
  //var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");

  for(var i = 0; i < type.length; i++){
    var found = arr.indexOf(type[i]);
    console.log(type[i] + " = arr[" + found + "]");
    if(found >= 0){
      return true;
    }
  }

  return false;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
