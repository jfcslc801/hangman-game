//array of words to choose from
var randomWordarr = [

    "watterson",

    "darwin",

    "mr Dad",

    "anais",

    "nicole"
];

//this chooses a word at random from array
var randomWord = randomWordarr[Math.floor(Math.random() * randomWordarr.length)];

// some globals
var s;
var count = 0;


//empty array to store guesses
var answerArray = [];

//filling the empty array with underscores
//the number of underscores match the random word generate
function startup(){
    for (var i = 0; i < randomWord.length; i++){
        answerArray[i] = "_";
    }

    //put words in a string
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
    console.log(s);

}

// function letter ()
// {
    document.addEventListener('keyup', function (event){
    // letter user typed in field
    var letter = event.key;

    // make sure theres a guess
    if (letter.length > 0)
{
    var correctGuess = false;

    for (var i = 0; i < randomWord.length; i++){

        //now if the user selects a letter from randomWord
        if (randomWord[i] === letter){
        correctGuess = true;
            //assign it to letter
        answerArray[i] = letter;
        }


    }


    if (correctGuess === false){
        count++;

    }
    //how many guesses it takes
    
    document.getElementById("counter").innerHTML = "Wrong Guesses: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" "); 
    document.getElementById("letter").value = "";

    // will add wrong guesses to field
    document.getElementById("guesses").append(letter + ",")
    
}

    // ramdon
    if(count >= 9){
        document.getElementById("stat").innerHTML = "You lose!";
        return;
    }



});

startup()


