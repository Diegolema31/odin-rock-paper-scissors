// console.log("Hello world!");

let round = 1;
let humanScore = 0;
let computerScore = 0;

function playGame() {
    console.log(`Round ${round}`);

    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random() * 3)
        if (computerChoice === 0) {
            return "Rock";
        } else if (computerChoice === 1) {
            return "Paper";
        } else if (computerChoice === 2) {
            return "Scissors";
        }
    }
    
    let allowedChoices = ["rock", "paper", "scissors"];
    
    function getHumanChoice() {
        let myChoice = prompt("Rock, Paper or Scissors?");
        while (!allowedChoices.includes(myChoice.toLowerCase())) {
            console.log("Invalid choice. Please choose between: Rock, Paper or Scissors");
            myChoice = prompt("Rock, Paper or Scissors?");
        }
        return myChoice;
    }

    function playRound(humanChoice, computerChoice) {

        if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
            console.log("It's a tie!");
            
        } else if (
            (humanChoice.toLowerCase() === "rock" && computerChoice === "Scissors") || 
            (humanChoice.toLowerCase() === "scissors" && computerChoice === "Paper") || 
            (humanChoice.toLowerCase() === "paper" && computerChoice === "Rock")
            ){
            console.log("You win this round!");
            humanScore++;
            
        } else {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
        round++;
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log("---------------------");
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}


for (let i = 0; i < 5; i++) {
    playGame();
}

if (humanScore === computerScore) {
    console.log("It's a tie! Playing one more round to determine the winner...");
    playGame();
}

if (humanScore < computerScore) {
    console.log("Computer wins!");
    
} else if (humanScore > computerScore){
    console.log("Human wins!");
}