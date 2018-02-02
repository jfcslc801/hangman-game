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

}

function letter ()
{
    // letter user typed in field
    var letter = document.getElementById("letter").value;

    // make sure theres a guess
if (letter.length > 0)
{
    
    for (var i = 0; i < randomWord.length; i++){

        //now if the user selects a letter from randomWord
        if (randomWord[i] === letter){
        
            //assign it to letter
        answerArray[i] = letter;
        }
    }
    //how many guesses it takes
    count++;
    // document.getElementById("counter").innerHTML = "number of clicks:" + count;
    document.getElementById("answer").innerHTML = answerArray.join(" "); 
}
    // ramdon
    if(count > 5){
        document.getElementById("stat").innerHTML = "are we done yet?";
    }

}



