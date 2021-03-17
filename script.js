'use strict';

//active player variable
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//two ways to select the score element id
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//set player scores to zero to start game
score0El.textContent = 0;
score1El.textContent = 0;

//hides the die prior to the first roll
diceEl.classList.add('hidden');

// scores for player 1 & player 2
const scores = [0,0];

let currentScore = 0;

// set active player
let activePlayer = 0;

// rolling die functionality
btnRoll.addEventListener('click', function() {
// 1. Generate a random dice roll
const diceRoll = Math.trunc(Math.random() * 6) + 1;
console.log(diceRoll);

// 2. Display Dice
diceEl.classList.remove('hidden');
diceEl.src = `assets/dice-${diceRoll}.png`;

// 3. Check for rolled 1: if true, switch to next player
if(diceRoll !== 1) {
    //Add diceRoll to current score
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

} else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0; //move above activePlayer??
    player0El.classList.toggle('.player-active');
    player1El.classList.toggle('.player-active');
    
        
        
}

});


