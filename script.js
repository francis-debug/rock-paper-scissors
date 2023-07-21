const gameResult = document.getElementById('game-result');
const resultBox = document.getElementById('result-box');
const scorePlayer = document.getElementById('player-score')
const scoreComputer = document.getElementById('computer-score')

let playerScore = 0;
let computerScore = 0;

/*
// Check if game has ended and reset the scoreboard
checkForGameOver() {
    if (document.getElementById('game-result').textContent = ('You Win!' | 'You Lose!')) {
        
    }
}
*/

// End the game if a player hits 5 points

function checkForWinner(){
    if (playerScore >= 5) {
        gameResult.textContent = 'You Win!'
    }
    else if (computerScore >= 5) {
        gameResult.textContent = 'You Lose!'
    }
    else return
};

// Determine player choice

const playerRock = document.getElementById('rock-button');
playerRock.addEventListener('click', function() {
    resultBox.innerHTML = playRound('rock')
});

const playerPaper = document.getElementById('paper-button');
playerPaper.addEventListener('click', function() {
    resultBox.innerHTML = playRound('paper')
});

const playerScissors = document.getElementById('scissors-button');
playerScissors.addEventListener('click', function() {
    resultBox.innerHTML = playRound('paper')
});


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

function playRound(playerChoice) {
    checkForWinner()
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    let computerChoice = getComputerChoice()
    if (playerChoice == computerChoice) {
        return ('you tied!')
    } else if (playerChoice == 'rock' && computerChoice == 'scissors'){
        playerScore += 1
        return ('you win!')
    } else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        playerScore += 1
        return ('you win!')
    } else if (playerChoice == 'paper' && computerChoice == 'rock'){
        playerScore += 1
        return ('you win!')
    } else if (playerChoice == 'rock' && computerChoice == 'paper'){
        computerScore += 1
        return ('you lose!')
    } else if (playerChoice == 'scissors' && computerChoice == 'rock'){
        computerScore += 1
        return ('you lose!')
    } else if (playerChoice == 'paper' && computerChoice == 'scissors')
        computerScore += 1
        return ('you lose!')
};


/*
function playGame() {
    let playerScore = 0
    let computerScore = 0
    playRound ()
    console.log (playerScore, computerScore)
    playRound ()
    console.log (playerScore, computerScore)
    playRound ()
    console.log (playerScore, computerScore)
    playRound ()
    console.log (playerScore, computerScore)
    playRound ()
    console.log (playerScore, computerScore)
    if (playerScore > computerScore)
    return ('you win the game!')
    else if (computerScore > playerScore)
    return ('you lost the game')
    else return ('you tied the game!')
}
*/