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

// function getHumanChoice () {
//     let choice = prompt("Choose rock, paper, or strippers:").toLowerCase();
//     console.log(choice);
//     return choice;
// }

let round = document.querySelector("#round");
let humanScore = document.querySelector("#humanScore");
let computerScore = document.querySelector("#computerScore");

let computerScoreNumber = 0;
let humanScoreNumber = 0;

let resultImage = document.querySelector("#result-image");

function playRound (computer, human) {
    round.textContent = "current round: ";
    if (computer === human) {
        round.textContent += "its a tie";
        resultImage.src = "images/tie.jpg"
    } else if (computer === "rock" && human === "strippers") {
        round.textContent += "computer wins";
        computerScoreNumber += 1;
        computerScore.textContent = `computer: ${computerScoreNumber}`;
        resultImage.src = "images/loser1.png"
    } else if (computer === "paper" && human === "rock") {
        round.textContent += "computer wins"
        computerScoreNumber += 1;
        computerScore.textContent = `computer: ${computerScoreNumber}`;
        resultImage.src = "images/loser2.png"
    } else if (computer === "strippers" && human === "paper") {
        round.textContent += "computer wins"
        computerScoreNumber += 1;
        computerScore.textContent = `computer: ${computerScoreNumber}`;
        resultImage.src = "images/loser1.png"
    } else if (human === "rock" && computer === "strippers") {
        round.textContent += "human wins"
        humanScoreNumber += 1;
        humanScore.textContent = `human: ${humanScoreNumber}`;
        resultImage.src = "images/winner2.png"
    } else if (human === "paper" && computer === "rock") {
        round.textContent += "human wins"
        humanScoreNumber += 1;
        humanScore.textContent = `human: ${humanScoreNumber}`;
        resultImage.src = "images/winner2.png"
    } else if (human === "strippers" && computer === "paper") {
        round.textContent += "human wins"
        humanScoreNumber += 1;
        humanScore.textContent = `human: ${humanScoreNumber}`;
        resultImage.src = "images/winner1.png"
    }
}


let rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    playRound(getComputerChoice(), "rock");
});

let paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    playRound(getComputerChoice(), "paper");
});

let strippers = document.querySelector("#strippers");
strippers.addEventListener('click', () => {
    playRound(getComputerChoice(), "strippers");
}); 




function playGame () {

    
    let round = 1;
    
    
    // while (round < 6) {
    //     playRound(getComputerChoice(), getHumanChoice());
    //     round += 1;
    //     console.log(computerScoreNumber, humanScoreNumber);
    // }

    if (humanScoreNumber > computerScoreNumber) {
        console.log("HUMANS RULE");
    } else {
        console.log("COMPUTERS RULE");
    }

}


let gameMusic = document.querySelector("#gameMusic");

function playMusic () {
    gameMusic.volume = 0.5;
    gameMusic.play();
}

document.addEventListener("click", () => {
    if (gameMusic.paused) {
        playMusic();
    }
})