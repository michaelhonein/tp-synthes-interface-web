// Chargement des scores depuis le localStorage
let scoreJoueur = parseInt(localStorage.getItem("scoreJoueur")) || 0;
let scoreOrdi = parseInt(localStorage.getItem("scoreOrdi")) || 0;

// Mise à jour affichage initial
document.getElementById("player-score").textContent = scoreJoueur;
document.getElementById("computer-score").textContent = scoreOrdi;

function jouer(choixJoueur) {

    const emojis = {
        roche: "🪨",
        papier: "📄",
        ciseaux: "✂️"
    };

    const options = ["roche", "papier", "ciseaux"];
    const choixOrdi = options[Math.floor(Math.random() * options.length)];

    const iconeJoueur = document.getElementById("user-choice");
    const iconeOrdi = document.getElementById("computer-choice");
    const texteResultat = document.getElementById("result");

    // Reset classes
    texteResultat.className = "result";

    // Affichage icônes
    iconeJoueur.textContent = emojis[choixJoueur];
    iconeOrdi.textContent = emojis[choixOrdi];

    let resultat;

    // Déterminer le résultat
    if (choixJoueur === choixOrdi) {
        resultat = "draw";
    } else if (
        (choixJoueur === "roche" && choixOrdi === "ciseaux") ||
        (choixJoueur === "papier" && choixOrdi === "roche") ||
        (choixJoueur === "ciseaux" && choixOrdi === "papier")
    ) {
        scoreJoueur++;
        resultat = "win";
    } else {
        scoreOrdi++;
        resultat = "lose";
    }

    // Sauvegarde dans le localStorage
    localStorage.setItem("scoreJoueur", scoreJoueur);
    localStorage.setItem("scoreOrdi", scoreOrdi);

    // Texte du résultat
    if (resultat === "win") {
        texteResultat.textContent = "Vous gagnez !";
        texteResultat.classList.add("win");
    } else if (resultat === "lose") {
        texteResultat.textContent = "Vous perdez !";
        texteResultat.classList.add("lose");
    } else {
        texteResultat.textContent = "Égalité !";
        texteResultat.classList.add("draw");
    }

    // Mise à jour affichage des scores
    document.getElementById("player-score").textContent = scoreJoueur;
    document.getElementById("computer-score").textContent = scoreOrdi;
}
