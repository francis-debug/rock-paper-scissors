function playRound() {
    let computerChoice = getComputerChoice()
    let playerChoice = getPlayerChoice()
    let roundResult = endRound()

    function getPlayerChoice(playerChoice) {
        let playerInput = prompt("What's your choice?")
        return playerInput.toLowerCase()
    }

    function getComputerChoice(computerChoice) {
        let compChoice = Math.random()
        if (compChoice <= .33) {
            return "rock"
        } else if (compChoice <= .67) {
            return "paper"}
        else { return "scissors"
        }
    }

    function endRound(roundResult) {
        if (playerChoice == computerChoice)
            return ('you tied!')
        else if (playerChoice == "rock" && computerChoice == "scissors")
            return ('your opponent played scissors, you win!')
        else if (playerChoice == "scissors" && computerChoice == "paper")
            return ('your opponent played paper, you win!')
        else if (playerChoice == "paper" && computerChoice == "rock")
            return ('your opponent played rock, you win!')
        else if (playerChoice == "rock" && computerChoice == "paper")
            return ('your opponent played paper, you lose!')
        else if (playerChoice == "scissors" && computerChoice == "rock")
            return ('your opponent played rock, you lose!')
        else if (playerChoice == "paper" && computerChoice == "scissors")
            return ('your opponent played scissors, you lose!')
    }

    console.log (roundResult)
}

playRound()