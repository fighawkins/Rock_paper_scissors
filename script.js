
const myArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
  return randomElement;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result === "Tie") {
    return "It's a tie!";
  } else if (result === "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt ("rock paper scissors");
    if (choice === null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (myArray.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome!");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  if (checkWinner(playerSelection, computerSelection) == "Player"){
    scorePlayer++
  }
  else if (checkWinner(playerSelection, computerSelection) == "Computer"){
    scoreComputer++
  }
}


  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log("Player was the winner");
  } else if (scoreComputer > scorePlayer) {
    console.log("Computer wins!");
  } else {
    console.log("We have a tie!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
    game();
});



