//global variable to store the random number
let randomNumber;
let guessCounter = 0;
let guesses = "";

//dom that grabs the users min and max input on click
document.getElementById("rangeButton").onclick = function () {setRangeGuess(document.getElementById("minText").value, document.getElementById("maxText").value)};

//function sets the min and max range of the guess
function setRangeGuess(min, max){
    //calculate the random number based on min and max range
    randomNumber = Math.floor(Math.random() * (max-min + 1) + min);

    //hides the range and shows the guess input to user
    document.getElementById("range").classList.add("d-none");
    document.getElementById("guess").classList.remove("d-none");

    //displays range to user
    document.getElementById("rangeText").innerHTML = "Range: " + min + "-" + max;
}

//dom that grabs the user guess
document.getElementById("guessButton").onclick = function () {guess(document.getElementById("inputText").value)};


function guess(num){
    //increment counter on each guess and display to user
    guessCounter++;
    document.getElementById("wrongGuesses").innerHTML = guessCounter;

    //keeps track of guess and displays to user
    guesses += " " + num;
    document.getElementById("numberGuesses").innerHTML = guesses;
    //check to see if guess is right
    if(num < randomNumber){
        document.getElementById("result").innerHTML = "Correct Number is higher!";
    }
    else if(num > randomNumber){
        document.getElementById("result").innerHTML = "Correct Number is lower!";
    }
    else{
        document.getElementById("result").innerHTML = "You guessed the right number! :D <br> Refresh page to try again!";
    }
}