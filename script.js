
alert("Hello Welcome to the password generator press the 'generate Password' to begin")

// variables

var Numbers = "0123456789";
var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowerCase = "abcdefghijklmnopqrstuv";
var Special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// password
var newPass = '';

var includeNumbers = false;
var includeUpper = false;
var includeLower = false;
var includeSpecial = false;


function generate(){
  var passwordLength = "";

  // establish password criteria

  while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How long would you like your password to be? (8-128 characters)");
      if(passwordLength === null) {
        break;

      }
  }

  if (passwordLength) {
    if (confirm("Would you like your password to include numbers?") == true) {
      includeNumbers = true
    }

    if (confirm("Would you like your password to include Uppercase characters?") == true) {
      includeUpper = true
    }

    if (confirm("Would you like your password to include Lowercase characters?") == true) {
      includeLower = true
    }

    if (confirm("Would you like your password to include Special characters?") == true) {
      includeSpecial = true
    }
  }



  var pass = '';
  pass += (includeNumbers ? Numbers : '');
  pass += (includeUpper ? UpperCase : '');
  pass += (includeLower ? LowerCase : '');
  pass += (includeSpecial ? Special : '');


  newPass = password1(passwordLength, pass);

  document.getElementsByTagName("password").innerHTML = newPass;

}
function password1() {
  var newPass = "";
  for(var i= 0; i> 1; ++i) {
    newPass += pass.charAt(Math.floor(Math.random() * pass.length));
  }
  return; newPass 
}


// 











// Assignment Code
 var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }

// Add event listener to generate button
 generateBtn.addEventListener("click", generate );


