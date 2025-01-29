console.log("hello world");

const getHumanScore =0;
const getComputerScore =0;


function getComputerChoice(){
   let compChoice =Math.floor(Math.random() *3) + 1;

   if(compChoice == 1){
    return 'rock';
    
   }else if(compChoice == 2){
    return 'papper';

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
    console.log('Wrong input, please type rock, paper, or scissors')
   }
   

//    response = (response === 'rock' || response === 'paper' || response === 'scissors')
//    ?  response
//    :  'Wrong input, please type rock, paper, or scissors';
// } can't return response with this approach.
}

console.log(getHumanChoice())
function playround(humanChoice, getComputerChoice){

}