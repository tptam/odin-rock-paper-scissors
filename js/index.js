playGame();

function playGame() {
    const ROCK = "rock";
    const PAPER = "paper"
    const SCISSORS = "scissors"
    
    let humanScore = 0;
    let computerScore = 0;

    const btnRock = document.createElement("button");
    btnRock.id = ROCK;
    btnRock.textContent = getPropCase(ROCK);
    const btnPaper = document.createElement("button");
    btnPaper.id = PAPER;
    btnPaper.textContent = getPropCase(PAPER);
    const btnScissors = document.createElement("button");
    btnScissors.id = SCISSORS;
    btnScissors.textContent = getPropCase(SCISSORS);

    const humanChoiceBtns = [btnRock, btnPaper, btnScissors];
    const humanChoice = document.querySelector("#humanChoice");

    humanChoiceBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let humanChoice = e.target.id;
            playRound(humanChoice, getComputerChoice());
            declareWinner();
        });
        humanChoice.appendChild(btn);
    });


    // Helper Functions

    function declareWinner(){
        if (computerScore < 5 && humanScore < 5) {
            return;
        }
        const winner = document.querySelector("#winner");
        let message = "";
        if (humanScore > computerScore) {
            message = "You win!" + message;
        } else {
            message = "You Lose!" + message;
        }
        winner.textContent = message;
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