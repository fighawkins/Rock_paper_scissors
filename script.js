const myArray =["Rock", "Paper", "Scissors"];


function getComputerChoice() {
    const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
return randomElement;

}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Tie";
    }

    else if(
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
         (playerSelection === "Paper" && computerSelection === "Rock") ||
         (playerSelection === "Scissors" && computerSelection === "Paper")
    
    ){
        return "Player";
    }

    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
const result = checkWinner(playerSelection,computerSelection);
if (result == "Tie"){
    return "It's a tie!"
}
else if (result == "Player"){
    return `You Win! ${playerSelection} beats ${computerSelection}`

}
else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
}
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));