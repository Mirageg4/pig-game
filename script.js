'use strict';

//two ways to select the score element id
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//set player scores to zero to start game
score0El.textContent = 0;
score1El.textContent = 0;
//hides the die prior to the first roll
diceEl.classList.add('hidden');








// const displayRoll = function(diceRoll)
// {
//     document.querySelector('diceRoll').value = diceRoll;
// }


// document.querySelector('.btn--roll').addEventListener 
// ('click', function ( {
//     const diceRoll = Number(document.querySelector('dice').value);

//     if(diceRoll === true) {
//         display
//     }
// }))

