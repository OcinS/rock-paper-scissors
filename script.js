// Assign a blank value that will be updated as soon as the round plays.
let playerSelection = '';


// Assign the scores of Computer and Player with 0 as this will be incremented depending on the round result.
let playerScore = 0;
let computerScore = 0;


// Return the choice of the computer randomly either rock, paper or scissor.
function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
    }
}


// Get the Player's selection and decide whoever wins the Round. Once the winner of the round has been indentified the score will be incremented.
function playRound(playerSelection, computerSelection) {

    playerSelection = prompt(`What's your pick? Rock, Paper or Scissor?`).toLowerCase();

    console.log(`Player Selection: ${playerSelection}`);

    if (playerSelection == computerSelection) {
        return `It's a tie!`;
    } else if (
        playerSelection == `rock` && computerSelection == `scissor` || 
        playerSelection == `paper` && computerSelection == `rock` || 
        playerSelection == `scissor` && computerSelection == `paper`) {
        playerScore++;
        return `You win the Round!`;
        
    } else if (
        computerSelection == `rock` && playerSelection == `scissor` || 
        computerSelection == `paper` && playerSelection == `rock` || 
        computerSelection == `scissor` && playerSelection == `paper`) {
        computerScore++;
        return `Computer wins the Round!`;
        
    }
}


// Check whoever wins the game
function winnerChecker() {
        if (playerScore == computerScore) {
            return `The Game is Tie!`;
        } else if (playerScore > computerScore) {
            return `You win the Game!`;
        } else if (playerScore < computerScore) {
            return `You lose the Game!`;
        }
}


// Function that will start the whole game of Rock, Paper & Scissor for 5 rounds.
function game() {
    for (let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();                        //Assign the return value from getComputerChoice
        console.log(`Computer Selection: ${computerSelection}`);            //Console log the Computer Selection
        console.log(playRound(playerSelection, computerSelection));         //Console log the Player Selection and the Winner of the Round
        console.log(`Computer Score: ${computerScore}`);                    //Console log the Computer Score
        console.log(`Player Score: ${playerScore}`);                        //Console log the Player Score
    }
    console.log(winnerChecker());                                           //Console log the Winner of the Game
}