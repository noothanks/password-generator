// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerics = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@^_`{|}~";
var passwordLength = "";
var passwordCharacters = ""
var password = "";

//Creating the random password
var generatePassword = function () {
  //Getting necessary data
  passwordLength  = getPasswordLength();
  lowercase = getLowercase();
  uppercase = getUppercase();
  numerics = getNumerics();
  specialCharacters = getSpecialCharacters();

  //checking to see if criteria was chosen
  
    //choosing a random character from string
  for (i=0; i < passwordLength; i++) {
    var randomCharacter = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    password += randomCharacter;
    if (password === "") {
      window.alert("No criteria selected. Please select at least 1 criteria and try again.");
    }
  }
  return password;

  //checking to see if variables are defined
  /*console.log(passwordLength);
  console.log(getLowercase());
  console.log(getUppercase());
  console.log(getNumerics());
  console.log(getSpecialCharacters());*/
}

//prompt for length of password
var getPasswordLength = function() {
  passwordLength = window.prompt("How long should your password be? Type a number between 8 and 128 to choose password length.");
  //gets requested password length from user
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  } else {
    window.alert("Please type in a number value between 8 and 128");
    getPasswordLength();
  }
}

//prompt for lowercase criteria
var getLowercase = function() {
  lowercasePrompt = window.confirm("Include Lowercase? Click 'OK' or 'CANCEL' to select 'YES' or 'NO', respectively");
  if (lowercasePrompt) {
    passwordCharacters += lowercase;
  } else {
    return passwordCharacters;
  }
}
  //prompt for upper case critera
var getUppercase = function() {
  uppercasePrompt = window.confirm("Include Uppercase? Click 'OK' or 'CANCEL' to select 'YES' or 'NO', respectively");
  if (uppercasePrompt) {
    passwordCharacters += uppercase;
  } else {
    return passwordCharacters;
  }
}
  //prompt for numerics criteria
var getNumerics = function() {
  numericsPrompt = window.confirm("Include Numerics? Click 'OK' or 'CANCEL' to select 'YES' or 'NO', respectively");
  if (numericsPrompt) {
    passwordCharacters += numerics
  } else {
    return passwordCharacters;
  }
}
  //prompt for special character criteria
var getSpecialCharacters = function() {
  specialCharactersPrompt = window.confirm("Include Special Characters? Click 'OK' or 'CANCEL' to select 'YES' or 'NO', respectively");
  if (specialCharactersPrompt) {
    passwordCharacters += specialCharacters;
  } else {
    return passwordCharacters;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
