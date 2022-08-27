// Assignment Code
const generateBtn = document.querySelector("#generate");

//Need to write a function called generatePassword to be able to create the randomised password with a set of criteria.
function generatePassword() {
  //Ask User How Long Is the Password

  //Ask if I want to include
  //UpperCase
  //LowerCase
  //Number
  //Special Symbols

  //Generate Password based on the criterias selected and the length

  //1. Create the charset based on the criteria

  //2. Loop for the 'length' times for each iteration
  //grab a random char and append to an accumulatoer



  //Pool of Characters

  //Password is set of random characters based on the above pool


}

// Write password to the #password input

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


