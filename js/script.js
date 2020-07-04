// Building the Password generator script clean slate
document.querySelector('#generate-button').addEventListener('click', writePassword);

// Arrays declaration four groups of characters
var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var speArr = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Creating a fifth empty array to combine four arrays
var passChar = [];

//.Concat password Characters and arrays
passChar = passChar.concat(numArr);
passChar = passChar.concat(speArr);
passChar = passChar.concat(lowArr);
passChar = passChar.concat(uppArr);

console.log(passChar)

//function 1: Parameters for password length and loops until true
function generatePassword() {

    var passLength = parseInt(prompt('Choose your password length between 8 and 129 characters:'));

    if (passLength < 8 || passLength > 129) {
        return alert('You must choose between 8 and 129 characters. Try again.');
    }

    alert(`Your password will have ${passLength} characters`);

    console.log(passLength)

    var confirmNum = confirm('Click OK if you want to include numeric characters.');
    var confirmSpe = confirm('Click OK if you want to include special characters.');
    var confirmLow = confirm('Click OK if you want to include lower case characters.');
    var confirmUpp = confirm('Click OK if you want to include upper case characters.');

    if (!confirmNum && !confirmSpe && !confirmLow && !confirmUpp) {
        return alert('You must include at least one group of characters. Try again');
    }

    var optUser = {
        passLength: passLength,
        confirmNum: confirmNum,
        confirmSpe: confirmSpe,
        confirmLow: confirmLow,
        confirmUpp: confirmUpp,

    }

    console.log(optUser)

    var passChar = [];

    if (optUser.confirmNum === true) {
        passChar = passChar.concat(numArr);
    }
    if (optUser.confirmSpe === true) {
        passChar = passChar.concat(speArr);
    }
    if (optUser.confirmLow === true) {
        passChar = passChar.concat(lowArr);
    }
    if (optUser.confirmUpp === true) {
        passChar = passChar.concat(uppArr);
    }

    console.log(passChar)

    var randomPass = [];
    var passResult = [];

    for (var i = 0; i < optUser.passLength; i++) { 
        var randomPass = Math.floor(Math.random() * optUser.passLength); 
        passResult.push(passChar[randomPass]);
    }

    var newPassword = passResult.join('');

    return newPassword;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    
    passwordText.value = password;

    if (password = true) {
        document.querySelector('#copy-button').addEventListener('click', copyPassword);
    }
}

function copyPassword() {
    var copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand('copy');
    alert("Your password was copied to the clipboard");
}
