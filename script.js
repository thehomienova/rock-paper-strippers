function getComputerChoice () {

    let num = Math.ceil(Math.random() * 3);

    let choice;

    switch (num) {
        case 1: choice = "rock";
        console.log(choice);
        break;

        case 2: choice = "paper";
        console.log(choice);
        break;

        case 3: choice = "strippers";
        console.log(choice);
        break;


    }
}

getComputerChoice();

function getHumanChoice () {
    let choice = prompt("Choose rock, paper, or strippers:")
    
    console.log(choice);

}

getHumanChoice();