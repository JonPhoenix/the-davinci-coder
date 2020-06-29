// Building the Password generator script clean slate
document.querySelector('#generate-button').addEventListener('click', generateOptions);
document.querySelector('#copy-button').addEventListener('click', copyPassword);

// Arrays declaration four groups of characters using .split
var numArr = '12345'.split('')
var speArr = '!@#$%^&*()'.split('');
var lowArr = 'abcdrfg'.split('');
var uppArr = 'ABCDEFG'.split('');
// Creating a fifth empty array to combine four arrays
var passChar = [];

//.Concat passwordCharacters and arrays
passChar = passChar.concat(numArr);
passChar = passChar.concat(speArr);
passChar = passChar.concat(lowArr);
passChar = passChar.concat(uppArr);

console.log(passChar)

//function 1: Parameters for password length and loops until true
function generateOptions() {

    var passLength = parseInt(prompt('Choose your password length between 8 and 129 characters:'));

    if (passLength < 8 || passLength > 129) {
        return alert('You must choose between 8 and 129 characters. Try again.');
    }

    alert(`Your password will have ${passLength} characters`);

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

    return optUser;
}

//function 2: Parameters to generateOptions with user's input
function generatePassword() {

    var optUser = generateOptions();
    var passChar = [];
    var passResult = [];

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

    for (var i = 0; i <= optUser.passLength; i++) {
        var tempRandom = Math.random() * optUser.passLength;
        passResult.push(passChar[tempRandom])
    }

    newPassword = passResult.join('');

    return newPassword;
}

// 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('password-box');
    passwordText = password;
}

// 
function copyPassword() {
    var copyText = document.getElementById("password-box");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Your password was copied to the clipboard");
}
