window.onload = function() {
  // generate a random number between 0 and 10
  var randomNumber = Math.floor(Math.random()*10);

  // initialize a variable for the guess
  var guess;

  // keep asking the user to guess until he gets the number
  while(guess != randomNumber) {
    guess = prompt('What is your guess?');
  }

  // let the user know that they guessed correctly.
  alert('CONGRATULATIONS!  You guessed correctly. The number was ' + randomNumber + '.');
}