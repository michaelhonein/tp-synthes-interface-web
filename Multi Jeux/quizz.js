const elements = {
  correct1: document.getElementById("correct1"),
  correct2: document.getElementById("correct2"),
  correct3: document.getElementById("correct3"),
  correct4a: document.getElementById("correct4.1"),
  correct4b: document.getElementById("correct4.2"),
  correct4c: document.getElementById("correct4.3"),
  correct4d: document.getElementById("correct4.4"),
  correct5: document.getElementById("correct5"),

  submitBtn: document.getElementById("submitBtn"),
  corrigerBtn: document.getElementById("corrigerBtn"),
  restartBtn: document.getElementById("restartBtn"),

  dernierScore: document.getElementById("dernierScore"),
  score: document.getElementById("score"),
};

const scoreSauvegarder = localStorage.getItem("dernierScoreQuiz");

if (scoreSauvegarder !== null) {
  elements.dernierScore.textContent =
    "Dernier score : " + scoreSauvegarder + "/5";
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
  if (
    elements.correct4a.checked ||
    elements.correct4b.checked ||
    elements.correct4c.checked ||
    elements.correct4d.checked
  ) {
    score++;
  }
  if (elements.correct5.checked) {
    score++;
  }
  localStorage.setItem("dernierScoreQuiz", score);
  elements.score.textContent = "Ton score : " + score + "/5";
});
elements.corrigerBtn.addEventListener("click", () => {
  const toutesReponses = document.querySelectorAll("input[type='radio']");
  // Liste des bonnes réponses d'après elements
  const bonnes = [
    elements.correct1,
    elements.correct2,
    elements.correct3,
    elements.correct4a,
    elements.correct4b,
    elements.correct4c,
    elements.correct4d,
    elements.correct5,
  ];

  // Mettre les bonnes réponses en vert
  bonnes.forEach((rep) => {
    rep.parentElement.style.color = "green";
  });

  // Mettre les mauvaises réponses en rouge
  toutesReponses.forEach((rep) => {
    if (!bonnes.includes(rep)) {
      rep.parentElement.style.color = "red";
    }
  });
});

elements.restartBtn.addEventListener("click", () => {
  const toutesReponses = document.querySelectorAll("input[type='radio']");
  toutesReponses.forEach((rep) => {
    rep.checked = false;
    rep.parentElement.style.color = "white";
  });
  elements.score.textContent = "";
  elements.dernierScore.textContent = "";
  localStorage.removeItem("dernierScoreQuiz");
});
