'use strict';

//two ways to select an element id
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

//set player scores to zero
score0El.textContent = 0;
score1El.textContent = 0;

