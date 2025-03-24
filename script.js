let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random()*3 + 1)
    if(random == 1) return "rock";
    else if(random == 2) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice){
    finalResultDiv.textContent = ""

    if(humanChoice === computerChoice){
        resultDiv.textContent = `YOU: ${humanChoice.toUpperCase()}, COMPUTER: ${computerChoice.toUpperCase()} ----- IT'S A TIE ----- YOUR SCORE: ${humanScore}, COMPUTER'S SCORE: ${computerScore} `;
    }
    else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
        resultDiv.textContent = `YOU: ${humanChoice.toUpperCase()}, COMPUTER: ${computerChoice.toUpperCase()} ----- YOU WON ----- YOUR SCORE: ${humanScore}, COMPUTER'S SCORE: ${computerScore} `;
    } else {
        computerScore++;
        resultDiv.textContent = `YOU: ${humanChoice.toUpperCase()}, COMPUTER: ${computerChoice.toUpperCase()} ----- YOU LOSE ----- YOUR SCORE: ${humanScore}, COMPUTER'S SCORE: ${computerScore} `;
    }
    
    if(humanScore === 5){
        finalResultDiv.textContent = "YOU WON THIS GAME"
        resultDiv.textContent = ""
        humanScore = 0
        computerScore = 0
    } else if(computerScore === 5){
        finalResultDiv.textContent = "YOU LOSE THIS GAME"
        resultDiv.textContent = ""
        humanScore = 0
        computerScore = 0
    }
}


// UI PART

//Adding game name
const h1 = document.createElement("h1")
h1.textContent = "ROCK PAPER SCISSORS"
h1.style.textAlign = "center"
document.body.appendChild(h1)

//Adding game div
const div = document.createElement("div")
div.setAttribute("class", "container")
document.body.appendChild(div)

//Adding result div
const resultDiv = document.createElement("div")
resultDiv.setAttribute("id","result")
resultDiv.style.textAlign = "center"
document.body.appendChild(resultDiv)

//Adding final-result div
const finalResultDiv = document.createElement("div")
finalResultDiv.setAttribute("id","final-result")
finalResultDiv.style.textAlign = "center"
document.body.appendChild(finalResultDiv)

//Adding rock button
const rockBtn = document.createElement("button")
rockBtn.setAttribute("class","rock btn")
rockBtn.textContent = "ROCK"
div.appendChild(rockBtn);
rockBtn.addEventListener("click", () => playRound("rock",getComputerChoice()))

//Adding paper button
const paperBtn = document.createElement("button")
paperBtn.setAttribute("class","paper btn")
paperBtn.textContent = "PAPER"
div.appendChild(paperBtn);
paperBtn.addEventListener("click", () => playRound("paper",getComputerChoice()))

//Adding scissors button
const scissorsBtn = document.createElement("button")
scissorsBtn.setAttribute("class","scissors btn")
scissorsBtn.textContent = "SCISSORS"
div.appendChild(scissorsBtn);
scissorsBtn.addEventListener("click", () => playRound("scissors",getComputerChoice()))

// Adding styles to buttons

div.style.display = "flex"
div.style.justifyContent = "center"

const allButtons = document.querySelectorAll(".btn")
for(let i=0; i<allButtons.length; i++){
    allButtons[i].style.margin = "200px 20px 50px 20px"
    allButtons[i].style.padding = "50px 50px"
    allButtons[i].style.backgroundColor = "Pink"
    allButtons[i].style.borderRadius = "20px"
}
