function playGame() {
    const ROCK = "rock";
    const PAPER = "paper"
    const SCISSORS = "scissors"
    
    let humanScore = 0;
    let computerScore = 0;

    // Play 5 times
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    // Declare winner;
    let message = `(You: ${humanScore} vs Computer: ${computerScore})`;
    if (humanScore === computerScore) {
        message = "Tie! " + message;
    } else if (humanScore > computerScore) {
        message = "You win!" + message;
    } else {
        message = "You Lose!" + message;
    }
    console.log(message);


    // Helper Functions

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
    function getHumanChoice() {
        const input = prompt("rock, paper, scissors?", ROCK);
        switch (input.toLowerCase()) {
            case ROCK:
                return ROCK;
            case PAPER:
                return PAPER;
            case SCISSORS:
                return SCISSORS;
            default:
                // May be changed later
                return ROCK;
        }
    }


    // Plays one round and disply the result
    function playRound (humanChoice, computerChoice) {

        // let message = `Your hand: ${getPropCase(humanChoice)}\n`;
        // message += `Computer's hand: ${getPropCase(computerChoice)}\n`

        let message = "";

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
        console.log(message);
    }

}


// Returns proper-cased string
function getPropCase(str) {
    return str.at(0).toUpperCase() + str.slice(1).toLowerCase();
}