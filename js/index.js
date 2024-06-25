const ROCK = "rock";
const PAPER = "paper"
const SCISSORS = "scissors"

let humanScope = 0;
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

