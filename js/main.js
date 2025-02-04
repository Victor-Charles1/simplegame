

 
//  function getHumanChoice(){
//     let response = prompt('Let\'play a game chose between these three options\n Type rock, paper, or scissors: ');
//     response= response.toLowerCase();
 
//     if(response === 'rock' || response === 'paper' || response === 'scissors'){
//      return response;
//     }else{
//      console.log('Invalid input. Please try again.');
//          return null;
//     }
//  }
 
 // ******************************

document.addEventListener('DOMContentLoaded', () => {
    // Function to get the computer's choice
    function getComputerChoice(){
        let compChoice =Math.floor(Math.random() *3) + 1;
     
        if(compChoice == 1){
         return 'rock';
         
        }else if(compChoice == 2){
         return 'paper';
     
        }else{
         return 'scissors';
     
        }   
     }
    // Function to play a single round
    function playRound(humanChoice, roboChoice) {
        const resultDiv = document.getElementById('result');
        if (humanChoice === roboChoice) {
            resultDiv.textContent = `You chose: ${humanChoice}, \nComputer chose: ${roboChoice}. \nIt's a tie!`;
            return 'tie';
        } else if (
            (humanChoice === 'rock' && roboChoice === 'scissors') ||
            (humanChoice === 'scissors' && roboChoice === 'paper') ||
            (humanChoice === 'paper' && roboChoice === 'rock')
        ) {
            resultDiv.textContent = `You chose: ${humanChoice}, \nComputer chose: ${roboChoice}. \nYou win this round!`;
            return 'human';
        } else {
            resultDiv.textContent = `You chose: ${humanChoice}, \nComputer chose: ${roboChoice}. \nYou lose this round!`;
            return 'computer';
        }
    }

    // Main game function
    let gameRound = 0;
    let humanScore = 0;
    let computerScore = 0;

    function handleButtonClick(humanChoice) {
        if (gameRound >= 5) {
            alert('Game over! Please refresh the page to play again.');
            return;
        }

        const roboChoice = getComputerChoice();
        const result = playRound(humanChoice, roboChoice);

        if (result === 'human') {
            humanScore++;
        } else if (result === 'computer') {
            computerScore++;
        }

        gameRound++;

        // Update the result display
        const resultDiv = document.getElementById('result');
        resultDiv.textContent += `\nYour Score: ${humanScore} , \nComputer Score: ${computerScore}`;

        // Check if the game is over
        if (gameRound === 5) {
            if (humanScore > computerScore) {
                resultDiv.textContent += '\nYou win the game! Congratulations!';
            } else if (humanScore < computerScore) {
                resultDiv.textContent += '\nYou lost the game. Better luck next time!';
            } else {
                resultDiv.textContent += '\nThe game is a tie!';
            }
        }
    }

    // Add event listeners to the buttons
    document.getElementById('rock').addEventListener('click', () => handleButtonClick('rock'));
    document.getElementById('paper').addEventListener('click', () => handleButtonClick('paper'));
    document.getElementById('scissors').addEventListener('click', () => handleButtonClick('scissors'));
});