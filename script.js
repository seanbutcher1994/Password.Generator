// Assignment Code
generateBtn.addEventListener("click", writePassword);

const generateBtn = document.querySelector("#generate");

//Need to write a function called generatePassword to be able to create the randomised password with a set of criteria.
function generatePassword() {
  //Ask User How Long Is the Password

  const length = Number(prompt("How many characters do you want your password to be? (8-128 characters)"));

  console.log(length);

  // What if the user places characters that are not numbers? At the moment this returns NaN, therefore an if statement is required to deal with NaN. NaN = Not A Number
  if (isNaN(length)){
    alert("Please only include Numbers")
    return;
  }



  //Ask if I want to include
  //UpperCase
  const includeUpperCase = confirm("Do you want to include Upper Case letters?");

  //LowerCase
  const includeLowerCase = confirm("Do you want to include Lower Case letters?");

  //Number
  const includeNumber = confirm("Do you want to include Numbers?");

  //Special Symbols
  const includeSymbol = confim("Do you want to include Symbols??");

  //What if nothing is selected? Require an if statement which returns to the start
  // if nothing is selected.

  if(!includeLowerCase && !includeNumber && !includeSymbol && !includeUpperCase){
    alert("Please select at least one criteria")
    return;
  }

  //Generate Password based on the criterias selected and the length

  //1. Create the charset based on the criteria
  let charset = "";

  if(includeLowerCase){
    charset = charset + ("abcdefghijklmnopqrstuvwxyz")
  }

  if(includeUpperCase){
    charset = charset + ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }

  if(includeNumber){
    charset = charset + ("0123456789")
  }
  if(includeSymbol){
    charset = charset + ("~!@#$%^&*()_+|}{:?><`-=][';/.,")
  }

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




