//GLOBAL VARIABLES
//***************************************************************
//arrays and variables holding data
var wordOptions = ["gumball", "darwin", "anais", "nicole", "richard"]

//empty array to hold the chosen word
var selectedWord = "";

//how many letters are in word
var lettersInWord = [];

//number of blanks
var numBlanks = 0;

//hold both blanks and 
var blanksAndSuccesses = []; // A _ _ _ _ 

//array for wrong guesses
var wrongLetters = [];

//GAME COUNTERS
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;


//FUNCTIONS (reusable blocks of code available upon need)
//***************************************************************

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]; //gets selected word random
    lettersInWord = selectedWord.split(""); //array of individual letters
    numBlanks = lettersInWord.length; //number of letters in word


    //reset
    guessesLeft = 10; //resets guesses left
    wrongLetters = []; //clears guesses
    blanksAndSuccesses = []; //clears guesses

    //populate blanks and successes with correct number of blanks and success
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    //change hmtl to reflect game round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" "); // .join removes commas from html
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;



    //testing/debugging 
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    //check if letter exists anywhere in word
    var isLetterinWord = false;
    for (var i = 0; i < numBlanks; i++) {

        if (selectedWord[i] == letter) {
            isLetterinWord = true;

        }
    }
    //check where in word letter exists. then populate blanksAndSuccesses array
    if (isLetterinWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }

    }

    // letter wasnt found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    console.log(blanksAndSuccesses);



}

function rounComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

    //update hmtl to reflect most recent changes
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" "); 
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    //check if user won
    if (lettersInWord.toString() == blanksAndSuccesses.toString()){
        winCount++;
        //update win counter in html
        document.getElementById("winCounter").innerHTML = winCount;
        document.getElementById("youWin").innerHTML = "You Win!";
        startGame();
    }


    //check if user lost
    else if (guessesLeft == 0){
        lossCount++;
        document.getElementById("lossCounter").innerHTML = lossCount;
        document.getElementById("youLose").innerHTML = "You Lose!";
        startGame();
        startGame();
    }

}



//MAIN PROCESS (where we call on functions to make things happen)
//***************************************************************

//iniiates code first time
startGame();


//register key clicks
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();

    checkLetters(letterGuessed);
    rounComplete();
    //testing and debugging
    console.log(letterGuessed);

}
