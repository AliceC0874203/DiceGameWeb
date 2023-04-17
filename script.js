function rollDice() {
    // Get references to the dice images and score displays
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    const scoreDisplay1 = document.getElementById("score-display-1");
    const scoreDisplay2 = document.getElementById("score-display-2");
    const scoreDisplay1Label = document.getElementById("score-display-1-label");
    const scoreDisplay2Label = document.getElementById("score-display-2-label");

    // Generate random numbers between 1 and 6 for each dice
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    // Update the dice images
    dice1.src = "dice" + roll1 + ".png";
    dice2.src = "dice" + roll2 + ".png";

    // Update the scores
    const diff = Math.abs(roll1 - roll2);
    if (roll1 > roll2) {
        scoreDisplay1.textContent = parseInt(scoreDisplay1.textContent || 0) + diff;
    } else if (roll2 > roll1) {
        scoreDisplay2.textContent = parseInt(scoreDisplay2.textContent || 0) + diff;
    }

    // Update the score display for each player
    scoreDisplay1Label.textContent = "Player 1 Score: " + parseInt(scoreDisplay1.textContent || 0);
    scoreDisplay2Label.textContent = "Player 2 Score: " + parseInt(scoreDisplay2.textContent || 0);

    // Check for a winner
    if (parseInt(scoreDisplay1.textContent) >= 20) {
        alert("Player 1 wins!");
    } else if (parseInt(scoreDisplay2.textContent) >= 20) {
        alert("Player 2 wins!");
    }
}
