// Require "letter.js".
var Letter = require("./letter.js");

// Create a "Word" constructor that depends on the Letter constructor.

var Word = function() {
    this.letterArr = []; // An array of new Letter objects representing the letters of the underlying word.
    this.
}


// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)


module.exports = Word;