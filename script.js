'use strict';

const rollBtn = document.querySelector('.roll-dice-btn');
const holdBtn = document.querySelector('.hold-btn');
const currentScore = document.querySelectorAll('.current-score');
const score = document.querySelectorAll('.score');
const newGameBtn = document.querySelector('.new-game');
const diceImage = document.querySelector('.dice-img');
const child1 = document.querySelector('.child1');
const child2 = document.querySelector('.child2');
const playerName1 = document.querySelector('.name1');
const playerName2 = document.querySelector('.name2');
const child = document.querySelectorAll('.child');
let sum = 0;
let totalSum = 0;
let sum2 = 0;
let totalSum2 = 0;
let i;
let activePlayer = 0;
const scores = [0, 0]

const rollDice = function () {
    if (child1.classList.contains('active')) i = 0;
    else i = 1;
    console.log(`i is ${i}`);

    if (totalSum >= 100) {
        child1.classList.add('player-winner');
        playerName1.classList.add('player-winner');
        return 0;
    }

    if (totalSum2 >= 100) {
        child2.classList.add('player-winner');
        playerName2.classList.add('player-winner');
        return 0;
    }

    const number = Math.trunc(Math.random() * 6) + 1;
    console.log(number);

    if (number !== 1) {
        if (i === 1) {
            sum2 += number;
            currentScore[i].textContent = sum2;

        }
        else {
            sum += number;
            currentScore[i].textContent = sum;
        }
    }
    else {
        if (i === 1) {
            sum2 = 0;
            currentScore[i].textContent = sum2;
        }
        else {
            sum = 0;
            currentScore[i].textContent = sum;
        }
        if (i === 0) {
            child1.classList.remove('active')
        }
        else {
            child1.classList.add('active')
        }
    }

    // To display dice image
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${number}.png`

}

const holdFunc = function () {
    currentScore[i].textContent = 0;
    if (i === 1) {
        totalSum2 += sum2;
        score[i].textContent = totalSum2;
        sum2 = 0;
    }
    else {
        totalSum += sum;
        score[i].textContent = totalSum;
        sum = 0;
    }
    if (i === 0) {
        child1.classList.remove('active');
    }
    else {
        child1.classList.add('active');
    }
}

const reloadPage = function () {
    location.reload();
}

rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdFunc);
newGameBtn.addEventListener('click', reloadPage);
