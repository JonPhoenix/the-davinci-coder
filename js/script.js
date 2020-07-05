// Building the Password generator script clean slate
document.querySelector('#generate-button').addEventListener('click', writePassword);
// Arrays declaration four groups of characters
var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var speArr = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Function 1: Parameters for password length and loops until true
function generatePassword() {
    // Creating a fifth empty array to combine the four arrays and variants to for loop
    var passChar = [];
    var randomPass = [];
	var passResult = [];
    var passLength = parseInt(prompt('Choose your password length between 8 and 129 characters:'));
    // The if/return loop for user to choose password length
    if (passLength < 8 || passLength > 129) {
        return alert('You must choose between 8 and 129 characters. Try again.');
    }
    alert(`Your password will have ${passLength} characters`);
    // The if/return loop for user to choose password characters
    var confirmNum = confirm('Click OK if you want to include numeric characters.');
    var confirmSpe = confirm('Click OK if you want to include special characters.');
    var confirmLow = confirm('Click OK if you want to include lower case characters.');
    var confirmUpp = confirm('Click OK if you want to include upper case characters.');

    if (!confirmNum && !confirmSpe && !confirmLow && !confirmUpp) {
        return alert('You must include at least one group of characters. Try again');
    }
    // Creating a variant object with properties and values from user choices
    var optUser = {
        passLength: passLength,
        confirmNum: confirmNum,
        confirmSpe: confirmSpe,
        confirmLow: confirmLow,
        confirmUpp: confirmUpp,
    }
    //.Concat password characters and arrays. User decide how big PassChar array will be
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
	// The for loop will happen as many times as user said they wanted length of password
    for (var i = 0; i < optUser.passLength; i++) { 
        // No matter passLength we still have to choose from the length of the array with all characters
        var randomPass = Math.floor(Math.random() * passChar.length); 
        passResult.push(passChar[randomPass]);
    }

    var newPassword = passResult.join('');
    return newPassword;
}
// Function 2: Writing password on index.html text box and enabling the copy button
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    
    passwordText.value = password;

    if (password = true) {
        document.querySelector('#copy-button').removeAttribute('disabled');
        document.querySelector('#copy-button').addEventListener('click', copyPassword);
    }
}
// Function 3: Enabled Copy to Clipboard button action and alert message
function copyPassword() {
    var copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand('copy');
    alert("Your password was copied to the clipboard");
}