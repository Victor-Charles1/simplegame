console.log("hello world");




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

function getHumanChoice(){
   let response = prompt('Let\'play a game chose between these three options\n Type rock, paper, or scissors: ');
   response= response.toLowerCase();

   if(response === 'rock' || response === 'paper' || response === 'scissors'){
    return response;
   }else{
    console.log('Invalid input. Please try again.');
        return null;
   }
}

// ******************************

function playGame(){

    let gameRound = 0;
    let humanScore =0;
    let computerScore =0;
    // **************************** 
    function playRound(humanChoice, roboChoice){
    
        if(humanChoice === 'invalid'){
            console.log('Invalid input try again')
            playRound();
            
    
        }else if(humanChoice === roboChoice){
            console.log('You chose: ' + humanChoice);
            console.log('The computer chose: '+ roboChoice)
            console.log('Tie !')
            return 'tie';
    
        }else if(humanChoice === 'rock' && roboChoice=== 'scissors'){
            console.log('The computer chose: '+ roboChoice)
            console.log('You won this round !!!!')
            return 'human';
    
        }else if(humanChoice === 'scissors' && roboChoice=== 'paper'){
            console.log('The computer chose: '+ roboChoice)
            console.log('You won this round !!!!')
            return 'human';
    
        }else if(humanChoice === 'paper' && roboChoice=== 'rock'){
            console.log('The computer chose: '+ roboChoice)
            console.log('You won this round !!!!')
            return 'human';
    
        }else{
            console.log('The computer chose: '+ roboChoice)
            console.log('You lost !')
            return 'computer';
        }
    
    }
    // ***************************
    while (gameRound < 5) {
        console.log(`\nRound ${gameRound + 1}:`);

        const humanChoice = getHumanChoice();
        if (humanChoice === null) {
            console.log('Invalid input. This round will not count.');
            continue; // Skip the rest of the loop and retry the same round
        }
        const roboChoice = getComputerChoice();

        const result = playRound(humanChoice, roboChoice);

        if (result === 'human') {
            humanScore++;
        } else if (result === 'computer') {
            computerScore++;
        }

        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
        gameRound++;
    }

    // Determine the final winner
    console.log('\nGame over!');
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log('You win the game! Congratulations!');
    } else if (humanScore < computerScore) {
        console.log('You lost the game. Better luck next time!');
    } else {
        console.log('The game is a tie!');
    }
    
    

}

console.log(playGame());