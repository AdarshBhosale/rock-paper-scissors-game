let userWinCount = 0;
let computerWinCount = 0;

// Array to choose computer's input randomly
const computerSelectionArray = ["ROCK", "PAPER", "SCISSOR"];

// Paragraphs to update user score and choice
const userChoicePara = document.getElementById("user-choice");
const userWinCountPara = document.getElementById("user-win-count");

// Paragraphs to update computer's score and choice
const compChoicePara = document.getElementById("comp-chioce");
const compWinCountPara = document.getElementById("comp-win-count");

// Rock, paper, scissor buttons
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorButton = document.getElementById("scissor-btn");

// Adding click event listeners on all three buttons
rockButton.addEventListener("click", () => handleClick("ROCK"));
paperButton.addEventListener("click", () => handleClick("PAPER"));
scissorButton.addEventListener("click", () => handleClick("SCISSOR"));

// Function to handle user selection
function handleClick(userChoice) {
  // Get random choice of computer
  const randomIndex = Math.floor(Math.random() * 3);
  const computersChoice = computerSelectionArray[randomIndex];

  // Updating DOM
  userChoicePara.textContent = userChoice;
  compChoicePara.textContent = computersChoice;

  // Check who has won
  if (userChoice === computersChoice) {
    // No action needed for a draw
  } else if (
    (userChoice === "ROCK" && computersChoice === "SCISSOR") ||
    (userChoice === "SCISSOR" && computersChoice === "PAPER") ||
    (userChoice === "PAPER" && computersChoice === "ROCK")
  ) {
    userWinCount++;
    userWinCountPara.innerHTML = `Player: ${userWinCount}`;
  } else {
    computerWinCount++;
    compWinCountPara.innerHTML = `Computer: ${computerWinCount}`;
  }

  // Check if either the user or computer has won 5 rounds
  if (userWinCount === 5) {
    showWinner("Player");
  } else if (computerWinCount === 5) {
    showWinner("Computer");
  }
}

// Function to handle displaying the winner
function showWinner(winner) {
  const winnerModal = document.getElementById("winner-modal");
  const winnerMessage = document.getElementById("winner-message");
  winnerMessage.textContent = `${winner} Wins!`;
  winnerModal.style.display = "block";
}

// Event listener for "Play Again" button
const playAgainButton = document.getElementById("play-again-btn");
playAgainButton.addEventListener("click", resetGame);

// Function to reset the game
function resetGame() {
  userWinCount = 0;
  computerWinCount = 0;
  userWinCountPara.textContent = "Player: 0";
  compWinCountPara.textContent = "Computer: 0";
  userChoicePara.textContent = "?";
  compChoicePara.textContent = "?";
  document.getElementById("winner-modal").style.display = "none";
}
