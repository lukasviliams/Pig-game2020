'use strict';
//Global Variables selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonnHold = document.querySelector('.btn--hold');

//Default score
score0El.textContent = 0;
score1El.textContent = 0;

//hidden dice
diceEl.classList.add('hidden');
//Current score
let currentScore = 0;

// Rolling dice funcionality
buttonRoll.addEventListener('click', () => {
  //1. generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //Check for rolled 1: if true
  if (dice !== 1) {
    //Add dice to the current score
    currentScore += dice;
    current0El.textContent = currentScore; //change later
  } else {
    // Clear the score of active player
    current0El.textContent = 0;
    //switch to next player
  }
});

//Add score to the Gloal score of the Atiev Player afetr BTN Hold

// Clear the current score of active player after btn hold

//switch to the next player after btn hold

// Swith to the next player after 1 is rolled

//Create active plaers var

//Switch colors to active players

//Reset veerzthing after pressing new game
