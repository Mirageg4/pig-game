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

//variables declared outside of function(Scope)
// values assigned in function below
let scores, currentScore, activePlayer, playing;

//Start Condition
const init = function() {
    // score values for player 1 & player 2
    scores = [0,0];
    // set starting score value
    currentScore = 0;
    // set active player
    activePlayer = 0;
    // set game state
    playing = true;

    //set player scores to zero to start game
    score0El.textContent = 0;
    score1El.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;

    //hides the die prior to the first roll
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
// Call above function for starting state
init();

//variable to switch to next player
const switchPlayer = function() {document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0; //move above activePlayer line??
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// rolling die functionality
btnRoll.addEventListener('click', function() {
    // add state variable - if playing is false, btns won't respond
    if(playing) {
   
// 1. Generate a random dice roll
const diceRoll = Math.trunc(Math.random() * 6) + 1;

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
        switchPlayer();      
    }
  }
});

btnHold.addEventListener('click', function(){
    if(playing) {
   // 1. Add current score to active player score
   scores[activePlayer] += currentScore;
   // explaination of line above
   //scores[1] = scores[1] + currentScore

   //display score of active player
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

   // 2. Check if players score is >= 100
   if (scores[activePlayer] >= 100) {
   // Finish the Game
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    
   } else {
       //Switch to next Player
       switchPlayer();
   }
  }
});

//new game button functionality
btnNew.addEventListener('click', init);


