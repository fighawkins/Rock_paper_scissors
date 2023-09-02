const myArray =["Rock", "Paper", "Scissors"];


function getComputerChoice() {
    const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
return randomElement;

}

function checkWinner(playerSelection, computerSelection);{
    if(playerSelection === computerSelection) {
        return "Tie!";
    }

    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
         (playerSelection === "paper" && computerSelection === "rock") ||
         (playerSelection === "scissors" && computerSelection === "paper")
    
    ){
        return "Player Wins!";
    }

    else {
        return "Computer Wins!";
    }
}
