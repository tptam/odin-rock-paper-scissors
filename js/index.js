playGame();

function playGame() {
    const ROCK = "rock";
    const PAPER = "paper"
    const SCISSORS = "scissors"
    
    let humanScore = 0;
    let computerScore = 0;

    const humanChoice = document.querySelector("#humanChoice");

    [ROCK, PAPER, SCISSORS].forEach((hand) => {
        const button = document.createElement("button");
        button.value = hand;
        button.textContent = getPropCase(hand);
        button.addEventListener("click", (e) => {
            let humanChoice = e.target.value;
            playRound(humanChoice, getComputerChoice());
            declareWinner();
        });
        humanChoice.appendChild(button);
    });

    // Helper Functions

    function declareWinner(){
        if (computerScore < 5 && humanScore < 5) {
            return;
        }

        const winner = document.createElement("div");
        const results = document.querySelector("#results");
        
        let message = "";
        if (humanScore > computerScore) {
            message = `Game End. You Win by ${humanScore}-${computerScore}`;
        } else {
            message = `Game End. You Lose by ${humanScore}-${computerScore}`;
        }

        winner.textContent = message;
        results.appendChild(winner);
    }


    // Returns a randomly selected hand
    function getComputerChoice() {
        switch (Math.floor(Math.random()*3)) {
            case 0:
                return ROCK;
            case 1:
                return PAPER;
            case 2:
                return SCISSORS;
        }
    }
    

    // Ask player their hand and returns the value
    // Returns the default value of ROCK when given invalid input
    function getHumanChoice() {
        const input = prompt("rock, paper, scissors?", ROCK);
        if (input === null) {
            return ROCK;
        }
        switch (input.toLowerCase()) {
            case ROCK:
                return ROCK;
            case PAPER:
                return PAPER;
            case SCISSORS:
                return SCISSORS;
            default:
                return ROCK;
        }
    }


    // Plays one round and disply the result
    function playRound (humanChoice, computerChoice) {

        const results = document.querySelector("#results");
        const humanScoreBoard = document.querySelector(".human .score");
        const computerScoreBoard = document.querySelector(".computer .score");

        let message = "";
        // message = `Your hand: ${getPropCase(humanChoice)}\n`;
        // message += `Computer's hand: ${getPropCase(computerChoice)}\n`

        if (humanChoice === computerChoice) {
            message += "Tie! "
            message += `${getPropCase(humanChoice)} is as strong as ${getPropCase(computerChoice)}!`;
        } else if (
            humanChoice === ROCK && computerChoice === PAPER ||
            humanChoice === PAPER && computerChoice === ROCK ||
            humanChoice === SCISSORS && computerChoice === PAPER
        ) {
            message += "You win! "
            message += `${getPropCase(humanChoice)} beats ${getPropCase(computerChoice)}!`;
            humanScore++;
        } else {
            message += "You Lose! "
            message += `${getPropCase(computerChoice)} beats ${getPropCase(humanChoice)}!`;
            computerScore++;
        }

        results.textContent = message;
        humanScoreBoard.textContent = humanScore;
        computerScoreBoard.textContent = computerScore;
    }

}


// Returns proper-cased string
function getPropCase(str) {
    return str.at(0).toUpperCase() + str.slice(1).toLowerCase();
}