function getComputerChoice () {

    let num = Math.ceil(Math.random() * 3);

    let choice;

    switch (num) {
        case 1: choice = "rock";
        break;

        case 2: choice = "paper";
        break;

        case 3: choice = "strippers";
        break;
    }
    console.log(choice);
    return choice;
}

function getHumanChoice () {
    let choice = prompt("Choose rock, paper, or strippers:").toLowerCase();
    console.log(choice);
    return choice;
}

let computerScore = 0;
let humanScore = 0;

function playRound (computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log ("its a tie");
    } else if (computerChoice === "rock" && humanChoice === "strippers") {
        console.log("computer wins!");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("computer wins!");
    } else if (computerChoice === "strippers" && humanChoice === "paper") {
        console.log("computer wins!");
    } else if (humanChoice === "rock" && computerChoice === "strippers") {
        console.log("human wins!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("human wins!");
    } else if (humanChoice === "strippers" && computerChoice === "paper") {
        console.log("human wins!");
    }
 

 }

playRound(getComputerChoice(), getHumanChoice());