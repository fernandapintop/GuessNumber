'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // cuando no cargamos ningun numero

  if (!guess) {
    displaymessage('No Number');
    // Cuando ganamos el juego
  } else if (guess === secretNumber) {
    displaymessage('Correct Number!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // cuando es muy alto el numero
  } else if (guess > secretNumber) {
    if (score > 1) {
      displaymessage('too hight !!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('you lose the game!:(');
      document.querySelector('.score').textContent = 0;
    }
    // cuando el numero es muy bajo
  } else if (guess < secretNumber) {
    if (score > 1) {
      displaymessage('too Low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('you lose the game!:(');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'star guessing';
});
