
"use strict";
//Global Variables selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonnHold = document.querySelector(".btn--hold");



//Default score
score0El.textContent = 0;
score1El.textContent = 0;

//hidden dice
diceEl.classList.add("hidden");

// Rolling dice funcionality
buttonRoll.addEventListener("click", () => {
  //1. generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = "dice--${dice}.png";

  //Check for rolled 1: if true switch to next player
});

