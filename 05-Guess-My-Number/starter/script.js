'use strict';

// Dom manipulation
// document.querySelector is use to target class element
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

// react to events in the DOM
// if i want to listen to click event on a btn i need to target the btn and then to call the eventlistener
// the event listener gets 2 arguments,one is the type of the event by string ('click'),
// and the other is the function to be called

// const randNumber = Math.floor(Math.random() * 20)+1;
var randNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randNumber);
// document.querySelector('.number').textContent = randNumber;
var score = 20;
var highscore = 0;
document.querySelector('.score').textContent = score;
document
  .querySelector('.check')
  .addEventListener('click', function checkTheGuess() {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      //   alert('Please Enter a guess');
      document.querySelector('.message').textContent =
        '⛔ No Value entered, Please Enter a guess';
    } else if (guess < 1 || guess > 20) {
      //   alert('Please Enter a Valid Guess beteween 1 - 20');
      document.querySelector('.message').textContent =
        '❌ Please Enter a Valid Guess beteween 1 - 20';
    }
    // Old Version
    if (guess > randNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too High!';
        score--;
        document.querySelector('.score').textContent = score;
      }
      if (score == 0) {
        document.querySelector('.message').textContent =
          '😥 Game Over, Try again';
        document.querySelector('.score').textContent = 0;
      }
    } else if (guess < randNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      }
      if (score == 0) {
        document.querySelector('.message').textContent =
          '😥 Game Over, Try again';
        document.querySelector('.score').textContent = 0;
      }
    } else if (guess == randNumber) {
      document.querySelector('.number').textContent = randNumber;
      document.querySelector('.message').textContent = '🏆 Correct Number !';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
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
    score = 20;
    randNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(randNumber);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
  });
