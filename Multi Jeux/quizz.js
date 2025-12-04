const elements = {
    correct1: document.getElementById("correct1"),
    correct2: document.getElementById("correct2"),
    correct3: document.getElementById("correct3"),
    correct4a: document.getElementById("correct4.1"),
    correct4b: document.getElementById("correct4.2"),
    correct4c: document.getElementById("correct4.3"),
    correct4d: document.getElementById("correct4.4"),
    correct4e: document.getElementById("correct4.5"),
    correct5: document.getElementById("correct5"),
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
     if (elements.correct4a.checked || elements.correct4b.checked 
        || elements.correct4c.checked || elements.correct4d.checked
        || elements.correct4e.checked)  {
        score++;
    }
     if (elements.correct5.checked) {
        score++;
    }
    localStorage.setItem("dernierScoreQuiz", score);
    elements.score.textContent = "Ton score : " + score + "/5";
});