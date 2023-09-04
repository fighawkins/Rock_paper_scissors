const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelectorAll('result');

buttons.forEach(button => {
  button.addEventListener('click', () => {
      // When any button is clicked, this function is executed.

      // Get the id (choice) of the button clicked, representing the player's choice.
      const playerChoice = button.id;

      // Generate a random computer choice using the getComputerChoice() function.
      const computerChoice = getComputerChoice();

      // Determine the winner of the game using the getWinner() function.
      const winner = checkWinner(playerChoice, computerChoice);

      // Update the text content of an element with the id 'resultDiv' to display the game result.
      // It shows the player's choice, the computer's choice, and the winner.
      resultDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${winner}`;
  });
});
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];

function checkWinner(playerChoice, computerChoice) {
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



    }
  






