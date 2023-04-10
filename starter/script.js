'use strict';

//define variables to select elements
//select with id



const score0El = document.querySelector('#score--0');
// ///you can also select element by id see bellow
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//select the buttons

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

let playing = true ;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent
   = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1:0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//roll the dice



//implenet the roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
  //1. generate a random dice roll

  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. discplay the dice

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. check if rolled 1: if true switch to next player;
    if (dice !== 1 ){
      //we want to add the dice to the current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent
      = currentScore;
    }else{
      //swich to next player
    switchPlayer();
      }
 }
});


btnHold.addEventListener('click', function() {
  if(playing){
  //1. add current score to active players score
  console.log('Hold button');
  scores[activePlayer] += currentScore;
  // console.log(scores[activePlayer]);
  document.getElementById(`score--${activePlayer}`).textContent
  = scores[activePlayer];
  //2. check if players score is >=100
  if(scores[activePlayer] >=20) {
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
  }else{
    switchPlayer();
  }
  //3. finish the game
  //4. switch to next player
}
})
