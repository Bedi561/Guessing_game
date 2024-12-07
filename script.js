let input = document.getElementById('input'); // Correct, targeting the input element by ID
let btn = document.getElementById('btn'); // Correct, targeting the button element by ID
let wrng = document.querySelector('.wrng'); // Add the dot to select by class name
let guesses = document.querySelector('.guesses'); // Also change to querySelector for class selection

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let numguesses = 0;

btn.addEventListener('click', () => {
    guessesNumber();
});

function guessesNumber() {
    let userGuess = Number(input.value); // Convert input value to a number
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        wrng.innerHTML = 'Enter a number between 1 and 100';
    } else {
        numguesses++;
        guesses.innerHTML = "No of Guesses: " + numguesses;
        if (userGuess > answer) {
            wrng.innerHTML = "You guessed too high!";
            input.value = "";
        } else if (userGuess < answer) {
            wrng.innerHTML = "You guessed too low!";
            input.value = "";
        } else {
            wrng.innerHTML = "Congratulations, you guessed the correct answer!";
        }
    }
}
