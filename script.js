'use strict';
//Global Variables selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonnHold = document.querySelector('.btn--hold');

// Global functions
const switchPlayer = () => {
  //Clear score of last active player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Default score
score0El.textContent = 0;
score1El.textContent = 0;

//hidden dice
diceEl.classList.add('hidden');
//Current score
let currentScore = 0;
//Active player
let activePlayer = 0;
//Acumulated scores for both players
const scores = [0, 0];
//Game mode
let playing = true;

/////////////// Rolling dice funcionality
buttonRoll.addEventListener('click', () => {
  if (playing) {
    //1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Check for rolled 1: if true
    if (dice !== 1) {
      //Add dice to the current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

//////////////////////Hold button Event Handler
buttonnHold.addEventListener('click', () => {
  if (playing) {
    //1. Add the score to the active player score
    //score[1] = score[1] + currentScore ;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.Check the score >= 100 points
    if (scores[activePlayer] >= 10) {
      //~ Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //~ Switch to another player
      switchPlayer();
    }
  }
});
