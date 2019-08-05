//Global variables
let playerScore = 0;
let computerScore = 0;


for(var i = 1; i <= 5; i++) {
//Computer's choice
let matrice = ["ROCK", "PAPER", "SCISSORS"];
function computerPlay() {
    computerChoice = matrice[Math.floor(Math.random() * matrice.length)];
    return computerChoice;
}   
computerSelection = computerPlay();


// Player's choice
let playerSelection = prompt("Pick one among the three: rock, paper, scissors == " + computerSelection).toUpperCase();


// Situation to lose or win the game
function playRound (playerSelection, computerSelection) {
        // Same choice, the game is a tie
if(playerSelection == computerSelection) {
        console.log("You chose " + playerSelection + ";" + " the computer also chose " + computerSelection + " The game is tie! ");
        console.log(" Play again! ");
        return parseInt(0);
    }

    // Situation the player wins
    else if
    ((playerSelection == "PAPER" && computerSelection == "ROCK") 
    || (playerSelection  == "SCISSORS" && computerSelection == "PAPER")
    || (playerSelection == "ROCK" && computerSelection == "SCISSORS")){
       console.log("Rounds: " + i + " --------> " + "You win, Computer loses! " + playerSelection + " beats " + computerSelection);
       return parseInt(1);
    }

    // Situation the computer wins
    else if((playerSelection == "PAPER" && computerSelection == "SCISSORS") 
    || (playerSelection =="SCISSORS" && computerSelection == "ROCK")
    || (playerSelection == "ROCK" && computerSelection == "PAPER")){
        console.log("Rounds: " + i + " --------> " + " You lose, Computer wins! " + computerSelection + " beats " + playerSelection);
        return parseInt(2);
    }
    
    // The player enter nothing or another input
    else{
        console.log("Try again: "+ playerSelection + " is different from "+computerSelection);
        console.log("Check your spelling!")
        return parseInt(0);
    }
} 
var result = playRound (playerSelection, computerSelection);


// 
if(result === 1) {
    playerScore++;
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    
} else if(result === 2){
    computerScore++;
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
   
} else {
    computerScore === 0 && playerScore === 0;
}

}


function theWinner() {
   
    if(playerScore >  computerScore) {
        console.log(" ");
        console.log("Congratulations, You won!");
    }
    else if(computerScore > playerScore){
        console.log(" ");
        console.log("The computer won! But don't give up!");
    }
    else {
        console.log(" ");
        console.log("The game ending in a tie, Try again!");
    } 
}
theWinner();