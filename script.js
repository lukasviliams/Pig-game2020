"use strict";
//Global Variables selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

//Default score
score0El.textContent = 0;
score1El.textContent = 0;
//hidden dice
diceEl.classList.add("hidden");
