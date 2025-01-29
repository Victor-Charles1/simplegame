console.log("hello world");

const HumanScore =0;
const ComputerScore =0;


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
   response.toLowerCase;

   if(response === 'rock' || response === 'paper' || response === 'scissors'){
    return response;
   }else{
    response = 'invalid'
    return response;
   }
   

//    response = (response === 'rock' || response === 'paper' || response === 'scissors')
//    ?  response
//    :  'Wrong input, please type rock, paper, or scissors';
// } can't return response with this approach.
}

// console.log(getHumanChoice())

function playRound(humanChoice, roboChoice){
    humanChoice=getHumanChoice();
    roboChoice=getComputerChoice();

    if(humanChoice === 'invalid'){
        console.log('Invalid input try again')
        playRound();

    }else if(humanChoice === roboChoice){
        console.log('The computer chose: '+ roboChoice)
        console.log('Tie !')
        // HumanScore++;
        // ComputerScore++;

    }else if(humanChoice === 'rock' && roboChoice=== 'scissors'){
        console.log('The computer chose: '+ roboChoice)
        console.log('You won this round !!!!')
        // HumanScore++;

    }else if(humanChoice === 'scissors' && roboChoice=== 'paper'){
        console.log('The computer chose: '+ roboChoice)
        console.log('You won this round !!!!')
        // HumanScore++;

    }else if(humanChoice === 'paper' && roboChoice=== 'rock'){
        console.log('The computer chose: '+ roboChoice)
        console.log('You won this round !!!!')
        // HumanScore++;

    }else{
        console.log('The computer chose: '+ roboChoice)
        console.log('You lost !')
        // ComputerScore++;
    }

}

console.log(playRound());