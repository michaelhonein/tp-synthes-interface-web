const zoneScore = document.getElementById("score");
const zoneDernierScore = document.getElementById("dernierScore");
const boutonValider = document.getElementById("submitBtn");
const boutonCorriger = document.getElementById("corrigerBtn");
const boutonRecommencer = document.getElementById("restartBtn");

const ancienScore = localStorage.getItem("dernierScoreQuiz");
if (ancienScore !== null) {
  zoneDernierScore.textContent = "Dernier score : " + ancienScore + "/5";
}

async function loadData() {
  try {
    const response = await fetch("question.json");
    const questions = await response.json();
    afficherQuestions(questions);
  } catch (error) {
    console.error("Erreur lors du chargement :", error);
    alert("Impossible de charger les questions !");
  }
}

loadData();



function melanger(tab) {
  let copie = [...tab];
  for (let i = copie.length - 1; i > 0; i--) {

    let j = Math.floor(Math.random() * (i + 1));

    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}


function afficherQuestions(listeQuestions) {


  const questions = melanger(listeQuestions).slice(0, 5);

  questions.forEach((question, numero) => {


    const txtQuestion = document.getElementById("question" + (numero + 1));
    txtQuestion.textContent = question.question;

    for (let i = 1; i <= 4; i++) {

      const bouton = document.getElementById(`q${numero + 1}r${i}`);
      const label = bouton.parentElement;
      label.innerHTML = "";
      label.appendChild(bouton);
      label.append(" " + question.options[i - 1]);
      bouton.dataset.bonne = (i - 1 === question.correctIndex);
    }
  });
}



boutonValider.addEventListener("click", () => {

  let score = 0;
  const boutons = document.querySelectorAll("input[type='radio']");

  boutons.forEach(bouton => {
    if (bouton.checked && bouton.dataset.bonne === "true") {
      score++;
    }
  });
  zoneScore.textContent = "Score : " + score + "/5";

  localStorage.setItem("dernierScoreQuiz", score);
});


boutonCorriger.addEventListener("click", () => {

  const boutons = document.querySelectorAll("input[type='radio']");

  boutons.forEach(bouton => {
    if (bouton.dataset.bonne === "true") {
      bouton.parentElement.style.color = "green";
    } else {
      bouton.parentElement.style.color = "red";
    }
  });
});


boutonRecommencer.addEventListener("click", () => {
  location.reload();
});
