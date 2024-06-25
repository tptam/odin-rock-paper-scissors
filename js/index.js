const ROCK = "rock";
const PAPER = "paper"
const SCISSORS = "scissors"

let humanScore = 0;
let computerScore = 0;



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


function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let message;
    if (humanChoice === computerChoice) {
        message = `Tie! ${humanChoice} is as strong as ${computerChoice}!`;
    } else if (
        humanChoice === ROCK && computerChoice === PAPER ||
        humanChoice === PAPER && computerChoice === ROCK ||
        humanChoice === SCISSORS && computerChoice === PAPER
    ) {
        message = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    } else {
        message = `You Lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }
    console.log(message);
}
