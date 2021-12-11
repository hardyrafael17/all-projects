let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  let humanDifference = Math.abs(secretTarget - humanGuess);
  let computerDifference = Math.abs(secretTarget - computerGuess);

if (humanDifference === computerDifference){
    return true;
  } else if (humanDifference < computerDifference) {
    return true;
  } else {
    return false;
  }
}

const updateScore = (winner) => {
  winner === "human" ? humanScore++ : computerScore++;
}
const advanceRound = () => {
  currentRoundNumber++;
}

