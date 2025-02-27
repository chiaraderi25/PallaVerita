// Possibili risposte
const responses = [
    "Sì", "No", "Forse", "Non contarci",
    "Decisamente sì", "NO NO NO", "Dubito fortemente", "GO GIRL","ovvio che si","certo","non pensarci prioprio", "scusa?"
];

// Funzione che mostra una risposta casuale quando si fa clic sulla palla
function shakeBall() {
    let ball = document.querySelector(".ball");
    let answer = document.getElementById("answer");

    // Anima la palla con l'effetto shake
    ball.classList.add("shake");
    
    setTimeout(() => {
        ball.classList.remove("shake");

        // Mostra una risposta casuale
        answer.innerText = responses[Math.floor(Math.random() * responses.length)];
    }, 500);
}

// Aggiungi un evento di clic alla palla
document.querySelector(".ball").addEventListener("click", shakeBall);



