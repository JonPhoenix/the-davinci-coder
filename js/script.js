/* Building the Password generator script */
/* This Password Generator provides a result between 8 and 128 characters */
document.querySelector("#generate-button").addEventListener("click", generatePassword);
document.querySelector("#copy-button").addEventListener("click", copyPassword);

/* Arrays Declaration */
var numArr = ["0123456789"];
var specArr = ["!@#%^&*<>?~/+-()[]{}$"];
var lowerArr = ["abcdefghijklmnopqrstuvwxyz"];
var upperArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

//var specArr = ["!", "@", "#", "%", "^", "&", "*", "<", ">", "?", "~", "/", "+", "-", "(", ")", "[", "]", "{", "}", "$"];
//var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

/* Declaration of "confirming" variables */
var confirmLength = "";
var confirmNumeric;
var confirmSpecial;
var confirmLower;
var confirmUpper;

/* Declaration of "resultant" variables */
var passwordCharacters;
var passwordRandom;

/* Function ƒ1: generatePassword. ƒ1-Step 1: Establishing parameters for a number of characters */
function generatePassword() {
    var confirmLength = prompt("Choose your password length between 8 and 129 characters:");

    /* ƒ1-Step 2: Creating a first loop using "while statement" until user's input meets parameters */
    /* When var confirmLength = true the "while" loop stops */
    while (confirmLength < 8 || confirmLength >129) {
        alert ("You must choose between 8 and 129 characters. Try again");
        var confirmLength = prompt("Choose your password length between 8 and 129 characters:");
    }
    
    /* ƒ1-Step 4: "Alert" method using "template literal/strings - tagged template" in message to confirmLength = true */
    alert(`Your password will have ${confirmLength} characters`);
    
    /* Previous try with conditionals tested then discarded. If did not creat a loop until var = true: */
    //if (confirmLength < 8 || confirmLength > 129) {
        //alert("You must choose between 8 and 129 characters. Try again");
        //var confirmLength = prompt("Choose your password length between 8 and 129 characters:");
    //} else {alert(`Your password will have ${confirmLength} characters`);}
    
    /* Printing confirmLength to console */
    console.log(confirmLength)

    /* ƒ1-Step 5: Establishing 4 groups of characters (representing 4 arrays) as password parameters using "confirm" method */
    var confirmNumeric = confirm("Click OK if you want to include numeric characters");
    var confirmSpecial = confirm("Click OK if you want to include special characters");
    var confirmLower = confirm("Click OK if you want to include lower case characters");
    var confirmUpper = confirm("Click OK if you want to include upper case characters");

    /* ƒ1-Step 6: Creating a second loop using "while statement" until user's input meets the password parameters */
    while (confirmNumeric === false && confirmSpecial === false && confirmLower === false && confirmUpper === false) {
        alert("You must include at least one group of characters. Try again");
        var confirmNumeric = confirm("Click OK if you want to include numeric characters");
        var confirmSpecial = confirm("Click OK if you want to include special characters");
        var confirmLower = confirm("Click OK if you want to include lower case characters");
        var confirmUpper = confirm("Click OK if you want to include upper case characters");
    }

    /* ƒ1-Step 7: Establishing resultant var passwordCharacters = any[] - result from ƒ1-Step 6 */
    var passwordCharacters = []

    /* f1-Step 8: Creating four conditionals if, one per each confirmed group, concatenating passwordCharacters + (array) */
    if (confirmNumeric) {
        passwordCharacters = (passwordCharacters + numArr);
    }

    if (confirmSpecial) {
        passwordCharacters = (passwordCharacters + specArr);
    }

    if (confirmLower) {
        passwordCharacters = (passwordCharacters + lowerArr);
    }

    if (confirmUpper) {
        passwordCharacters = (passwordCharacters + upperArr);
    }
    
    /* Printing passwordCharacters to console */
    console.log(passwordCharacters)

    /* ƒ1-Step 9: Establishing resultant var passwordRandom = empty string """ - for ƒ1-Step 8 results */
    var passwordRandom = ""

    
    // BELOW THIS LINE NOT FINISHED, NEEDS MORE WORK!!! //

    for (var i = 0; i < confirmLength; i++) {
        passwordRandom = passwordRandom + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(passwordRandom)
    }
    return passwordRandom;
}


// function writePassword() {
    // var deliverable = generatePassword();
    //var passwordText = document.querySelector("#password-box");
    
    // passwordText.value = deliverable;

    //var paswordText = generatePassword() = document.querySelector("#password-box");}


function copyPassword() {
    alert("Your password was copied to your clipboard")
}

