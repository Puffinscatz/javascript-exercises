function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let value = Math.floor(Math.random()*3);
    return choices[value]
}

function getHumanChoice() {
    return prompt("Select Rock Paper or Scissors: ")
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()

        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") 
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }  
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`Current score: Human ${humanScore} - Computer ${computerScore}`);
    }

    
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game!");
    } else {
        console.log("The game is a draw!");
    }
}

playGame()