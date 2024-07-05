document.getElementById('roll-button').addEventListener('click', rollDice);

function rollDice() {
    const diceA = rollSingleDice();
    const diceB = rollSingleDice();
    const diceC = rollSingleDice();
    
    document.getElementById('diceA').textContent = diceA;
    document.getElementById('diceB').textContent = diceB;
    document.getElementById('diceC').textContent = diceC;
    
    const scores = [diceA, diceB, diceC];
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);
    
    const diceElements = [
        document.getElementById('diceA'),
        document.getElementById('diceB'),
        document.getElementById('diceC')
    ];

    diceElements.forEach((dice, index) => {
        dice.classList.remove('green', 'yellow', 'red', 'blue');
        if (scores[index] === maxScore && scores.filter(score => score === maxScore).length === 1) {
            dice.classList.add('green');
        } else if (scores[index] === minScore && scores.filter(score => score === minScore).length === 1) {
            dice.classList.add('red');
        } else if (scores[index] === maxScore || scores[index] === minScore) {
            dice.classList.add('blue');
        } else {
            dice.classList.add('yellow');
        }
    });

    declareWinner(scores);
}

function rollSingleDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function declareWinner(scores) {
    const winnerDiv = document.getElementById('winner');
    const maxScore = Math.max(...scores);
    const winners = scores.filter(score => score === maxScore);

    if (winners.length === 1) {
        const winnerIndex = scores.indexOf(maxScore);
        winnerDiv.textContent = `Member ${String.fromCharCode(65 + winnerIndex)} Wins!`;
    } else {
        winnerDiv.textContent = 'It\'s a Draw!';
    }
}
