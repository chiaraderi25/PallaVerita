// Possibili risposte
const responses = [
    "Sì", "No", "Forse", "Non contarci",
    "Decisamente sì", "NO NO NO", "Dubito fortemente","GO GILR"
];

let lastUpdate = 0;

// Rileva accelerazione del telefono
window.addEventListener("devicemotion", (event) => {
    let acceleration = event.accelerationIncludingGravity;

    if (!acceleration) return;

    let currentTime = new Date().getTime();
    if (currentTime - lastUpdate < 1000) return; // Evita ripetizioni eccessive

    let shakeThreshold = 15; // Sensibilità dello scuotimento

    let totalAcceleration = Math.abs(acceleration.x) + Math.abs(acceleration.y) + Math.abs(acceleration.z);

    if (totalAcceleration > shakeThreshold) {
        lastUpdate = currentTime;
        shakeBall();
    }
});

// Funzione che scuote la palla e mostra la risposta
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

