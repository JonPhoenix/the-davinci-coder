/* Building the Password generator script */
/* This Password Generator provides a result between 8 and 128 characters */
var generatePassword = document.querySelector("#generate-button").addEventListener("click", generatePassword);
var copyPassword = document.querySelector("#copy-button").addEventListener("click", copyPassword);

/* Array Declaration */
var numCharArr = ["0","1","2","3","4","5","6","7","8","9"];
var speciCharArr = ["!","@","#","%","^","&","*","<",">","?","~","/","+","-","(",")",":",";","[","]","_","{","}","$"];
var lowerCharArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCharArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

/* Variable declaration */
var confirmLength
var confirmNumChar;
var confirmSpeciChar;
var confirmLowerChar;
var confirmUpperChar;
var passwordChar;
var passwordResult;

/* Function to generate password. Step 1: Confirming the number of characters */
function generatePassword() {
    var confirmLength = prompt("Choose your password length between 8 and 129 characters:");

    /* Loop if user input is off parameters */
    if (confirmLength < 8 || confirmLength > 129) {
        alert("You must choose between 8 and 129 characters. Try again");
        var confirmLength = prompt("Choose your password length between 8 and 129 characters:");
    } else {alert(`Your password will have ${confirmLength} characters`);}

    console.log(confirmLength)

    var confirmNumChar = confirm("Click OK if you want to include numeric characters");
    var confirmSpeciChar = confirm("Click OK if you want to include special characters");
    var confirmLowerChar = confirm("Click OK if you want to include lower case characters");
    var confirmUpperChar = confirm("Click OK if you want to include upper case characters");

    if (confirmNumChar === false && confirmSpeciChar === false && confirmLowerChar === false && confirmUpperChar === false) {
        alert("You must choose at least one option. Try again");
        var confirmNumChar = confirm("Click OK if you want to include numeric characters");
        var confirmSpeciChar = confirm("Click OK if you want to include special characters");
        var confirmLowerChar = confirm("Click OK if you want to include lower case characters");
        var confirmUpperChar = confirm("Click OK if you want to include upper case characters");
    } else {var passwordChar = []}

    if (confirmNumChar) {
        passwordChar = passwordChar.concat(numCharArr);
    }

    if (confirmSpeciChar) {
        passwordChar = passwordChar.concat(speciCharArr);
    }

    if (confirmLowerChar) {
        passwordChar = passwordChar.concat(lowerCharArr);
    }

    if (confirmUpperChar) {
        passwordChar = passwordChar.concat(upperCharArr);
    }
    
    console.log(passwordChar)

    var passwordResult = ""

    for (var i = 0; i < confirmLength; i++) {
        passwordResult = passwordResult + passwordChar[Math.floor(Math.random() * passwordChar.length)];
        console.log(passwordResult)
    }
    return passwordResult;
}

function copyPassword() {
    alert("Your password was copied to your clipboard")
}
