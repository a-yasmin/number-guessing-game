const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate random number between 1–100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let MAX_ATTEMPTS = 5;

console.log(
  `Welcome to the Number Guessing Game!\nThe rules of the game are simple: you have to guess a number between 1 and 100.\nIf you guess the number right, you win!\nIf you don't, you lose :(\n\n`,
);

console.log(
  `Please select the difficulty level:\n\n1. Easy (10 chances)\n2. Normal (5 chances)\n3. Hard (3 chances)\n\n`,
);

/**
 * This function is used to set the difficulty level and max attempts of the game.
 * @param {string} difficulty
 * @returns {void}
 */
function setDifficultyLevel() {
  readline.question("Enter the difficulty level: ", (difficulty) => {
    if (difficulty === "1") {
      MAX_ATTEMPTS = 10;
      console.log(
        `\nGreat! You have selected the Easy difficulty level.\nLet's start the game!\n\n`,
      );
      guessNumber();
    } else if (difficulty === "2") {
      MAX_ATTEMPTS = 5;
      console.log(
        `\nGreat! You have selected the Normal difficulty level.\nLet's start the game!\n\n`,
      );
      guessNumber();
    } else if (difficulty === "3") {
      MAX_ATTEMPTS = 3;
      console.log(
        `\nGreat! You have selected the Hard difficulty level.\nLet's start the game!\n\n`,
      );
      guessNumber();
    } else {
      console.log("Invalid difficulty level. Please enter 1, 2, or 3.\n");
      setDifficultyLevel();
    }
  });
}

/**
/**
 * This function processes the user's guess and provides feedback or the final result.
 */
function guessNumber() {
  let number = null;

  readline.question("Enter your guess: ", (guess) => {
    number = Number(guess);

    attempts++;

    if (Number(number) === secretNumber && attempts <= MAX_ATTEMPTS) {
      console.log(
        `\nCongratulations! You guessed the correct number in ${attempts} attempts!`,
      );
      readline.close();
    } else if (Number(number) !== secretNumber && attempts === MAX_ATTEMPTS) {
      console.log(
        `\nSorry, you have run out of attempts. The correct number was ${secretNumber}.`,
      );
      readline.close();
    } else if (Number(number) > secretNumber) {
      console.log(`Incorrect. The number is less than ${number}.\n`);
      guessNumber();
    } else if (Number(number) < secretNumber) {
      console.log(`Incorrect. The number is greater than ${number}.\n`);
      guessNumber();
    }
  });
}

setDifficultyLevel();
