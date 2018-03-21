console.log("Scriptsheet has loaded..."); // check if script is linked
var userGuess;
var userAnswer;
var tries = 0;

function StartGame() {
    console.log("Starting Game..."); // for debugging

    tries = 0; // reset tries 
    userAnswer = prompt("Enter a number for guess for: ");

    while (parseInt(userGuess) != parseInt(userAnswer)) {
        userGuess = prompt("Guess a number below:");
        if (parseInt(userGuess) < parseInt(userAnswer)) {
            alert("Guess Higher!");
        } else if (parseInt(userGuess) > parseInt(userAnswer)) {
            alert("Guess Lower!");
        }
        tries++;
    }
    console.log("End of game..."); // for debugging
    alert("You won! It took you " + tries + " tries"); // user won
}