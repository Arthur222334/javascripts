let gameNum = 55;
let userNum = prompt("Guess the Number : ")
while (gameNum != userNum) {  /*we cant use == because the console log is in string format if the console log was in int the we can use == */
    userNum = prompt("you entered the wrong number");
}
alert("you win")


