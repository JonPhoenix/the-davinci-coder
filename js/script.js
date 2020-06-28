/* Building the Password generator script */
/* This Password Generator provides a result between 8 and 128 characters */
var generatePassword = document.querySelector("#generate-button").addEventListener("click", generatePassword);
var copyPassword = document.querySelector("#copy-button").addEventListener("click", copyPassword);

/* Array Declaration */
var numChar = ["0,1,2,3,4,5,6,7,8,9"];
var specChar = ["!,@,#,%,^,&,*,<,>,?,~,/,+,-,(,):,;,[,],_,{,},$"];
var lowerCChar = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var upperCChar = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];

/* Variable declaration */
var confirmLength
var confirmNumChar;
var confirmSpecChar;
var confirmLowerCCase;
var confirmUpperCCase;

/* Function to generate password. Step 1: Confirming the number of characters */
function generatePassword() {
    var confirmLenght = prompt("Choose your password length between 8 and 129 characters:");

    /* Loop if user input is off parameters */
    if (confirmLength >= 8 || confirmLength <= 129) {
        alert("Your password will have" +confirmLenght+ "characters");
    }
    else {
        alert("You must choose between 8 and 129 characters. Try again");
        prompt("Choose your password length between 8 and 129 characters:");
    }

}

function copyPassword() {
    alert("Your password was copied to your clipboard")
}
