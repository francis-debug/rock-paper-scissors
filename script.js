const gameResult = document.getElementById('game-result');
const roundResult = document.getElementById('result-box');
const scorePlayer = document.getElementById('player-score');
const scoreComputer = document.getElementById('computer-score');
const playerRock = document.getElementById('rock-button');
const playerPaper = document.getElementById('paper-button');
const playerScissors = document.getElementById('scissors-button');
const compChoiceDisplayed = document.getElementById('comp-choice');

let playerScore = 0;
let computerScore = 0;
let resultOfRound = ''

// Start a round based on player choice

playerRock.addEventListener('click', function() {
    playRound('rock');
    roundResult.textContent = resultOfRound;
});

playerPaper.addEventListener('click', function() {
    playRound('paper')
    roundResult.textContent = resultOfRound
});

playerScissors.addEventListener('click', function() {
    playRound('scissors')
    roundResult.textContent = resultOfRound
});

// Play a round

function playRound(playerChoice){
    DetermineWinner(playerChoice);
    tallyScore();
    checkForGameWinner();
}

// Determine computer choice

function getComputerChoice() {
    let compChoice = Math.random()
    if (compChoice <= .33) {
        return 'rock'
    } else if (compChoice <= .67) {
        return 'paper'}
    else { return 'scissors'
    }
};

// Determine round winner

function DetermineWinner(playerChoice) {;
    gameResult.textContent = ''; // Reset the game result if starting a new game
    let computerChoice = getComputerChoice();
    compChoiceDisplayed.textContent = computerChoice;
    if (playerChoice == computerChoice) {
        resultOfRound = 'You tied!'
    } else if (playerChoice == 'rock' && computerChoice == 'scissors'){
        playerScore += 1
        resultOfRound = 'You win!'
    } else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        playerScore += 1
        resultOfRound = 'You win!'
    } else if (playerChoice == 'paper' && computerChoice == 'rock'){
        playerScore += 1
        resultOfRound = 'You win!'
    } else if (playerChoice == 'rock' && computerChoice == 'paper'){
        computerScore += 1
        resultOfRound = 'You lose!'
    } else if (playerChoice == 'scissors' && computerChoice == 'rock'){
        computerScore += 1
        resultOfRound = 'You lose!'
    } else if (playerChoice == 'paper' && computerChoice == 'scissors'){
        computerScore += 1
        resultOfRound = 'You lose!'
    }
};

// Tally the score

function tallyScore() {
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
}

// Check if game has been won and reset scores

function checkForGameWinner(){
    if (playerScore >= 5) {
        gameResult.textContent = 'You Won the Game!'
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore >= 5) {
        gameResult.textContent = 'You Lost the Game!'
        playerScore = 0;
        computerScore = 0;
    }
    else return
};