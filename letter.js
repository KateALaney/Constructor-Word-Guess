// Create a "Letter" constructor.

var Letter = function () {
    this.letter = letter; // A string value to store the underlying character for the letter.
    this.guessed = false; // A boolean value that stores whether that letter has been guessed yet.
    this.guessCheck = function (userInput) { // A function that returns the underlying character if the letter has been guessed, 
        if (userInput === this.letter) {
            this.guessed = true;
        } else {
            if (this.guessed === false) {
                return letter = "_"; {} // or a placeholder (like an underscore) if the letter has not been guessed.
            } else {
                return this.letter;
            }
        }
        this.character = function (guess) { // A function that takes a character as an argument and checks it against the underlying character, 
            if (guess === this.letter) { // updating the stored boolean value to true if it was guessed correctly.
                this.guessed = true;
            }
        }
    }
};

module.exports = Letter;