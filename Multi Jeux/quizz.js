const elements = {
    correct1: document.getElementById("correct1"),
    correct2: document.getElementById("correct2"),
    correct3: document.getElementById("correct3"),
    submitBtn: document.getElementById("submitBtn"),
    dernierScore: document.getElementById("dernierScore"),
    score: document.getElementById("score")
};

const scoreSauvegarder = localStorage.getItem("dernierScoreQuiz");

if (scoreSauvegarder !== null) {
    elements.dernierScore.textContent = "Dernier score : " + scoreSauvegarder + "/3";
}

elements.submitBtn.addEventListener("click", () => {
    let score = 0;
    if (elements.correct1.checked) {
        score++;
    }
    if (elements.correct2.checked) {
        score++;
    }
    if (elements.correct3.checked) {
        score++;
    }
    localStorage.setItem("dernierScoreQuiz", score);
    elements.score.textContent = "Ton score : " + score + "/3";
});