const main = document.querySelector(`main`);
const introduction = document.querySelector('.introduction.container');
const startButton = document.querySelector(`#start-btn`);



let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = getComputerChoice(); 
let resultMessage = '';


startButton.addEventListener(`click`, () => {

    introduction.remove();

    const container  = document.createElement(`div`);
    container.className = `container`;

    main.appendChild(container);


        const gameEnvironmentSection = document.createElement(`section`);
        gameEnvironmentSection.setAttribute(`id`,`game-environment`);

        container.appendChild(gameEnvironmentSection);


            const gameContainer = document.createElement(`div`);
            gameContainer.className = `game-container`;

            gameEnvironmentSection.appendChild(gameContainer);


                const gameHeader = document.createElement(`div`);
                gameHeader.className = `game-header`;

                    const gameTitle = document.createElement(`h1`);
                    gameTitle.className = `game-title`;
                    gameTitle.textContent = `Rock, Paper or Scissor`
                    
                    gameHeader.appendChild(gameTitle);


                const selectionCards = document.createElement(`div`);
                selectionCards.className = `selection cards`;

                    const card1 = document.createElement(`div`);
                    card1.className = `card`;

                        const cardImage1 = document.createElement(`img`);
                        cardImage1.src = `./images/rock-illustration.png`;
                        cardImage1.alt = `rock`;

                        const cardButton1 = document.createElement(`button`);
                        cardButton1.className = `rock selection btn`;
                        cardButton1.textContent = `Rock`;

                        card1.append(cardImage1,cardButton1);

                    
                    const card2 = document.createElement(`div`);
                    card2.className = `card`;

                        const cardImage2 = document.createElement(`img`);
                        cardImage2.src = `./images/paper-illustration.png`;
                        cardImage2.alt = `paper`;

                        const cardButton2 = document.createElement(`button`);
                        cardButton2.className = `paper selection btn`;
                        cardButton2.textContent = `Paper`;

                        card2.append(cardImage2,cardButton2);


                    const card3 = document.createElement(`div`);
                    card3.className = `card`;
                    
                        const cardImage3 = document.createElement(`img`);
                        cardImage3.src = `./images/scissor-illustration.jpg`;
                        cardImage3.alt = `scissor`;

                        const cardButton3 = document.createElement(`button`);
                        cardButton3.className = `scissor selection btn`;
                        cardButton3.textContent = `Scissor`;

                        card3.append(cardImage3,cardButton3);

                    
                    selectionCards.append(card1,card2,card3);


                const selectionOutput = document.createElement(`div`);
                selectionOutput.className = `selection output`;

                    let playerSelectionOutput = document.createElement(`p`);
                    playerSelectionOutput.textContent = ``;

                    const roundResult = document.createElement(`p`);
                    roundResult.className = `round-result`;
                    roundResult.textContent = ``;

                    selectionOutput.append(playerSelectionOutput,roundResult)


                const scoreBoard = document.createElement(`div`);
                scoreBoard.className = `scoreboard`;

                    const playerScoreBoard = document.createElement(`div`);
                    playerScoreBoard.className = `playerscore`;

                        const score1 = document.createElement(`p`);
                        score1.textContent = `${playerScore}`;

                        const scoredescription1 = document.createElement(`p`);
                        scoredescription1.textContent = `Player Score`;

                        playerScoreBoard.append(score1, scoredescription1);

                    const computerScoreBoard = document.createElement(`div`);
                    computerScoreBoard.className = `computerscore`;

                        const score2 = document.createElement(`p`);
                        score2.textContent = `${computerScore}`;

                        const scoredescription2 = document.createElement(`p`);
                        scoredescription2.textContent = `Computer Score`;

                        computerScoreBoard.append(score2, scoredescription2);

                    scoreBoard.append(playerScoreBoard,computerScoreBoard);


                const startRound = document.createElement(`button`);
                startRound.className = `btn`;
                startRound.setAttribute(`id`,`start-round`);
                startRound.textContent = `Start Round`


                gameContainer.append(gameHeader,selectionCards,selectionOutput,scoreBoard,startRound)

    let selectionButtons = document.querySelectorAll(`.selection.btn`); 
    selectionButtons.forEach(function(selectionButton) {
        selectionButton.addEventListener("click", function() {
          playerSelection = selectionButton.textContent.toLowerCase();
          playerSelectionOutput.textContent = `You select: ${playerSelection.toUpperCase()}`;
        });
    });
}); 

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