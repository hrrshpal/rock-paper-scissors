function getComputerChoice(){
    let random = Math.floor(Math.random()*3 + 1)
    if(random == 1) return "rock";
    else if(random == 2) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let userChoice = prompt("Choose either rock or paper or scissors");
    return userChoice.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            console.log("It's a tie!");
            console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        }
        else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
            humanScore++;
            console.log("You won this round!")
            console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        } else {
            computerScore++;
            console.log("You lose this round.")
            console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        }
    }

    console.log("Best of 5 wins!!!")

    for(let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore) console.log("YOU WON THIS GAME!!!")
    else console.log("YOU LOSE THIS GAME :-(")
}

playGame();
