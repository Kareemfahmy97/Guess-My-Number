'use strict';
/*
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.score').textContent = 19;
document.querySelector('.label-highscore').textContent = 'What happened?';
document.querySelector('.number').textContent = '20';
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

console.log(score);

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  //Again reset button
  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.floor(Math.random() * 20) + 1;
  });

  // When there is NO INPUT
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔ No number!!';

    // When guess is High Number
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNumber > secretNumber ? '🔼 Too High' : '🔽 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.label-score').textContent = '😲 Game Over!';
      document.querySelector('h1').textContent = '😲 Game Over!';
      document.querySelector('.message').textContent = '😲 Game Over!';
    }

    // ------ Another method to do it ---- //

    // } else if (guessNumber > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '🔼 Too High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.label-score').textContent = '😲 Game Over!';
    //     document.querySelector('h1').textContent = '😲 Game Over!';
    //     document.querySelector('.message').textContent = '😲 Game Over!';
    //   }

    //   // When guess is Low Number
    // } else if (guessNumber < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '🔽 Too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.label-score').textContent = '😲 Game Over!';
    //     document.querySelector('h1').textContent = '😲 Game Over!';
    //     document.querySelector('.message').textContent = '😲 Game Over!';
    //   }

    // When player wins
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore <= score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
