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


function playGame () {

    let computerScore = 0;
    let humanScore = 0;
    let round = 1;
    
   
    function playRound (computer, human) {
        if (computer === human) {
         console.log ("its a tie");
        } else if (computer === "rock" && human === "strippers") {
            console.log("computer wins!");
            computerScore += 1;
        } else if (computer === "paper" && human === "rock") {
            console.log("computer wins!");
            computerScore += 1;
        } else if (computer === "strippers" && human === "paper") {
            console.log("computer wins!");
            computerScore += 1;
        } else if (human === "rock" && computer === "strippers") {
            console.log("human wins!");
            humanScore += 1;
        } else if (human === "paper" && computer === "rock") {
            console.log("human wins!");
            humanScore += 1;
        } else if (human === "strippers" && computer === "paper") {
            console.log("human wins!");
            humanScore += 1;
        }
    }
    
    while (round < 6) {
        playRound(getComputerChoice(), getHumanChoice());
        round += 1;
        console.log(computerScore, humanScore);
    }

    if (humanScore > computerScore) {
        console.log("HUMANS RULE");
    } else {
        console.log("COMPUTERS RULE");
    }

}


playGame();