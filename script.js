let gameResult = playGame()
alert (gameResult)

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
    return ("you win the game!")
    else if (computerScore > playerScore)
    return ("you lost the game")
    else return ("you tied the game!") 

    function playRound() {
        let playerChoice = getPlayerChoice()
        let computerChoice = getComputerChoice()
        let roundResult = endRound()

        function getPlayerChoice() {
            let playerInput = prompt("What is your choice?")
            return playerInput.toLowerCase()
        }

        function getComputerChoice() {
            let compChoice = Math.random()
            if (compChoice <= .33) {
                return "rock"
            } else if (compChoice <= .67) {
                return "paper"}
            else { return "scissors"
            }
        }

        function endRound() {
            if (playerChoice == computerChoice) {
                return ("you tied!")
            } else if (playerChoice == "rock" && computerChoice == "scissors"){
                playerScore += 1
                return ("you win!")
            } else if (playerChoice == "scissors" && computerChoice == "paper"){
                playerScore += 1
                return ("you win!")
            } else if (playerChoice == "paper" && computerChoice == "rock"){
                playerScore += 1
                return ("you win!")
            } else if (playerChoice == "rock" && computerChoice == "paper"){
                computerScore += 1
                return ("you lose!")
            } else if (playerChoice == "scissors" && computerChoice == "rock"){
                computerScore += 1
                return ("you lose!")
            } else if (playerChoice == "paper" && computerChoice == "scissors")
                computerScore += 1
                return ("you lose!")
        }    
        console.log (roundResult)
    }
}