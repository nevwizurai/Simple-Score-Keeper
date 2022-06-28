// Variables
let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let isOver = false;

// DOM refer
const p1Button = document.querySelector("#p1Add");
const p2Button = document.querySelector("#p2Add");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const maxScore = document.querySelector("#maxScore");

// Add Event
// P1 score add
p1Button.addEventListener("click", () => {
    if (!isOver) {
        p1Score++;
        if (p1Score === winScore) {
            isOver = true
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            isDisableButton(true);
        }
        p1Display.textContent = p1Score;
    }
});

// P2 score add
p2Button.addEventListener("click", () => {
    if (!isOver) {
        p2Score++;
        if (p2Score === winScore) {
            isOver = true
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            isDisableButton(true);
        }
        p2Display.textContent = p2Score;
    }
});

// Reset Button
resetButton.addEventListener("click", () => {
    resetGame();
});

// Select score
maxScore.addEventListener("change", function () {
    winScore = parseInt(this.value);
    resetGame();
})


const resetGame = () => {
    isOver = false;
    p1Score = 0;
    p2Score = 0;
    isDisableButton(false);
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
}

const isDisableButton = (act) => {
    p1Button.disabled = act;
    p2Button.disabled = act;
}