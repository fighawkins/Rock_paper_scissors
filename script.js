const myArray =["Rock", "Paper", "Scissors"];


function getComputerChoice() {
    const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
return randomElement;

}

getComputerChoice();
