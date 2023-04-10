'use strict';

//define variables to select elements
//select with id

const score0El = document.querySelector('#score--0');


// ///you can also select element by id see bellow
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
