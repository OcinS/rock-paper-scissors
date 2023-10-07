// Query variables present in the introduction
const main = document.querySelector(`main`);
const introduction = document.querySelector('.introduction.container');
const startButton = document.querySelector(`#start-btn`);


// Variables for the game
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = '';
let resultMessage = '';

// Function to Start the Game
startButton.addEventListener(`click`, () => {

    introduction.remove();

    // Create the container for wrapper and append to the Main
    const container  = document.createElement(`div`);
    container.className = `container`;

    main.insertBefore(container, main.children[0]);

        // Create a section tag and append to the container
        const gameEnvironmentSection = document.createElement(`section`);
        gameEnvironmentSection.setAttribute(`id`,`game-environment`);

        container.appendChild(gameEnvironmentSection);

            // Container for the Game Proper and append to Game Section
            const gameContainer = document.createElement(`div`);
            gameContainer.className = `game-container`;

            gameEnvironmentSection.appendChild(gameContainer);

                // Div that contains the Header of the Game
                const gameHeader = document.createElement(`div`);
                gameHeader.className = `game-header`;

                    const gameTitle = document.createElement(`h1`);
                    gameTitle.className = `game-title`;
                    gameTitle.textContent = `Rock, Paper or Scissor`
                    
                    gameHeader.appendChild(gameTitle);

                // Div that contains the Cards for the selection
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

                // Div that contains the Selection of Player and Result Message of every Round
                const selectionOutput = document.createElement(`div`);
                selectionOutput.className = `selection output`;

                    let playerSelectionOutput = document.createElement(`p`);
                    playerSelectionOutput.textContent = ``;

                    let roundResult = document.createElement(`p`);
                    roundResult.className = `round-result`;
                    roundResult.textContent = ``;

                    selectionOutput.append(playerSelectionOutput,roundResult)

                // Div that contains the Score Board for the Player and Computer
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

                // Button to start every round
                const startRound = document.createElement(`button`);
                startRound.className = `btn`;
                startRound.setAttribute(`id`,`start-round`);
                startRound.textContent = `Start Round`

                // Append the divs of Game Header, Selection Cards, Selection Output, Score Board and Start Round Button
                gameContainer.append(gameHeader,selectionCards,selectionOutput,scoreBoard,startRound)

    // Update the Player selection based from the selection of buttons
    let selectionButtons = document.querySelectorAll(`.selection.btn`); 
    selectionButtons.forEach(function(selectionButton) {
        selectionButton.addEventListener("click", function() {
          playerSelection = selectionButton.textContent.toLowerCase();
          playerSelectionOutput.textContent = `You select: ${playerSelection.toUpperCase()}`;
        });
    });

    // Also update the Player selection based from the selection of images (in case they choose to click the images)
    let selectionImages = document.querySelectorAll(`.card > img`); 
    selectionImages.forEach(function(selectionImage) {
        selectionImage.addEventListener("click", function() {
          playerSelection = selectionImage.alt;
          playerSelectionOutput.textContent = `You select: ${playerSelection.toUpperCase()}`;
        });
    });

    // Play a Round and update specific variables once run
    function playRound(playerSelection, computerSelection) {

        if (playerSelection == computerSelection) {
            resultMessage = `It's a tie! No one get a score.`;
            roundResult.style.color = `orange`;
            roundResult.textContent = `${resultMessage}`;
        } else if (
            playerSelection == `rock` && computerSelection == `scissor` || 
            playerSelection == `paper` && computerSelection == `rock` || 
            playerSelection == `scissor` && computerSelection == `paper`) {
            playerScore++;
            score1.textContent = `${playerScore}`;
            resultMessage = `You win the Round!`;
            roundResult.style.color = `var(--playerColor)`;
            roundResult.textContent = `${resultMessage}`;
        } else if (
            computerSelection == `rock` && playerSelection == `scissor` || 
            computerSelection == `paper` && playerSelection == `rock` || 
            computerSelection == `scissor` && playerSelection == `paper`) {
            computerScore++;
            roundResult.style.color = `var(--playerColor)`;
            score2.textContent = `${computerScore}`;
            resultMessage = `Computer wins the Round!`;
            roundResult.style.color = `var(--computerColor)`;
            roundResult.textContent = `${resultMessage}`;
        }
    }

    // Click button function to play every round
    startRound.addEventListener(`click`, () => {
        computerSelection = getComputerChoice(); 
        playRound(playerSelection, computerSelection)
        winnerChecker();
    });

}); 


// Function to select Computer's Choice randomly
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


// Check whoever wins the game
function winnerChecker() {
        if (playerScore == 5) {
            alert(`You Win the Game`);
            location.reload();
        }
        if (computerScore == 5) {
            alert(`Computer Wins the Game`);
            location.reload();
        }
}