let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (guess > randomNumber) {
        console.log("Too high! Try again.");
    } else if (guess < randomNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Congratulations! You guessed the correct number.");
    }
}