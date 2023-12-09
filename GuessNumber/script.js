const minNumber = 1;
const maxNumber = 100;
let randomNumber = generateRandomNumber();
let attempts = 0;

const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartButton = document.getElementById("restart");
const leaderboardList = document.getElementById("leaderboard-list");

checkButton.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        guessInput.disabled = true;
        checkButton.disabled = true;
        updateLeaderboard(attempts);
    } else if (userGuess < randomNumber) {
        message.textContent = "Try a higher number.";
    } else {
        message.textContent = "Try a lower number.";
    }
});

restartButton.addEventListener("click", function () {
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    guessInput.value = "";
    guessInput.disabled = false;
    checkButton.disabled = false;
    message.textContent = "";
    randomNumber = generateRandomNumber();
});

function generateRandomNumber() {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function updateLeaderboard(attempts) {
    const leaderboardItem = document.createElement("li");
    leaderboardItem.textContent = `Attempts: ${attempts}`;
    leaderboardList.appendChild(leaderboardItem);
}
