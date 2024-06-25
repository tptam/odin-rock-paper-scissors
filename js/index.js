// const ROCK = "rock";
// const PAPER = "paper"
// const SCISSORS = "scissors"

let humanScope = 0;
let computerScore = 0;

function getComputerChoice() {
    switch (Math.floor(Math.random()*3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const input = prompt("rock, paper, scissors?", "rock");
    switch (input.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            // May be changed later
            return "rock";
    }
}

