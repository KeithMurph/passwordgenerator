// promt user after they hit generate password
var generateBtn = document.querySelector("#generate");


// password variables
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLOMNOPQRSTUVWXYZ";
let ints = "0123456789";
let specialChars = "!@#$%^&*()+=?[]{}~";


// determines password length 8-128 characters
function generatePassword() {
  do {
    passLength = prompt("How Long do you want your new password to be 8-128 charcters?");
    if (passLength < 8) {
      alert("Password must be a minimum of 8 characters long.");
    } else if (passLength > 128) {
      alert("Password can be a maximum of 128 characters long.");
    }
  } while (passLength < 8 || passLength > 128);

  
  // select variables to be included in new password
  
  let lowerConfirm = confirm("Include lowercase Letters in password?");
  let upperConfirm = confirm("Iclude uppercase Letters in password?");
  let intConfirm = confirm("Include numbers in password?");
  let specialConfirm = confirm("Include special characters in password?");

  let passVars = "";

  let builder = "";
// if nothing selected return string
  if (!upperConfirm && !lowerConfirm && !intConfirm && !specialConfirm) {
    passVars += "No sequre variables selected";
    return passVars;


  } else {
    
    // add lowercase charcters to new password
    if (lowerConfirm) {
      builder = builder + lowerCase;
    }
    // add uppercase characters to password 
    if (upperConfirm) {
      builder = builder + upperCase;
    }
// add numbers to new password
    if (intConfirm) {
      builder = builder + ints;
    }
// add special characters in password
    if (specialConfirm) {
      builder = builder + specialChars;
    }
// take all answerrs and build password
    for (let i = 0; i < passLength; i++) {
      passVars += builder.charAt(Math.floor(Math.random() * builder.length));
    }
    return passVars;
  }
}

function writePassword() {
  var password = generatePassword();
  var newPassword = document.querySelector("#password");

  newPassword.value = password;
}

generateBtn.addEventListener("click", writePassword);
