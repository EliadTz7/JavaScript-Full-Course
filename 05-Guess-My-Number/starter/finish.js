'use strict';

// vars
var randNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randNumber);
var score = 20;
var highscore = 0;

// functions
function setDisplayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setDisplayScore(score) {
  document.querySelector('.score').textContent = score;
}

function setDisplayRandNumber(guess) {
  document.querySelector('.number').textContent = guess;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
}

function setRestartGamge() {
  score = 20;
  randNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  setDisplayMessage('Start guessing...');
  setDisplayScore(score);
}

// set up the game score
setDisplayScore(score);

// event listeners
document
  .querySelector('.check')
  .addEventListener('click', function checkTheGuess() {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      setDisplayMessage('⛔ No Value entered, Please Enter a guess');
    } else if (guess < 1 || guess > 20) {
      setDisplayMessage('❌ Please Enter a Valid Guess beteween 1 - 20');
    }
    // else if (guess!== randNumber) {
    else if (guess > randNumber || guess < randNumber) {
      if (score > 1) {
        setDisplayMessage(guess > randNumber ? '📈 Too High!' : '📉 Too Low!');
        score--;
        setDisplayScore(score);
      }
      if (score == 0) {
        setDisplayMessage('😥 Game Over, Try again');
        setDisplayScore(score);
      }
    } else if (guess == randNumber) {
      setDisplayMessage('🏆 Correct Number !');
      setDisplayRandNumber(guess);
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  });

// Coding Challenge #1
/* 
  Implement a game rest functionality, so that the player can make a new guess! Here is how:
  1. Select the element with the 'again' class and attach a click event handler
  2. In the handler function, restore initial values of the score and secretNumber variables
  3. Restore the initial conditions of the message, number, score and guess input field - done
  4. Also restore the original background color (#222) and number width (15rem) - done
  GOOD LUCK 😀
  */
document
  .querySelector('.again')
  .addEventListener('click', function resetScore() {
    setRestartGamge();
  });
