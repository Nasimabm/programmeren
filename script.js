console.log("Hello world");

// DOM-elementen ophalen
const genereerKnop = document.querySelector(".genereer"); // Knop om kleurenpalet te genereren
const colorBoxes = document.querySelectorAll(".color-box"); // De vakjes waarin de kleuren worden weergegeven
const audioPlayer = document.getElementById("audioPlayer"); // Audio-element voor geluidseffect
const errorMelding = document.querySelector(".errorMelding"); 
const audioSrc = "320887__rhodesmas__win-04.wav";

// Stel de audiobron in via JavaScript
audioPlayer.src = audioSrc;

// Arrays met kleuren
const kleurenSets = [
    ["#FF5733", "#FFC300", "#DAF7A6"], // Eerste kleurenpalet
    ["#581845", "#900C3F", "#C70039"], // Tweede kleurenpalet
    ["#28B463", "#1F618D", "#7FB3D5"], // Derde kleurenpalet
    ["#F39C12", "#8E44AD", "#2E86C1"]  // Vierde kleurenpalet
];

// Functie: Genereer een willekeurig kleurenpalet
function genereerpalet() {
    // Kiest een willekeurige set kleuren
    const gekozenKleuren = kleurenSets[Math.floor(Math.random() * kleurenSets.length)];

    // Update de kleuren van de vakken
    colorBoxes.forEach((box, index) => {
        if (gekozenKleuren[index]) {
            // Verwijder bestaande kleurklassen
            box.className = "color-box";

            // Voeg de nieuwe kleurklasse toe op basis van de kleur
            const kleurClass = `color-${gekozenKleuren[index].replace("#", "")}`; // Maak een CSS-klasse op basis van de gekozen kleur
            box.classList.add(kleurClass); // Nieuwe kleur toepassen via CSS-klasse
        }
    });

    console.log("Nieuwe kleuren:", gekozenKleuren); // Log de nieuwe kleuren in de console
}

// Functie: Speel geluid af
function speelGeluid() {
    if (audioPlayer) {
        audioPlayer.currentTime = 0; // Reset het geluid naar het begin
        audioPlayer.play();         // Speel het geluid af
    } else {
        errorMelding.textContent = "Audio-element niet gevonden!"; // Zet de foutmelding tekst
        errorMelding.classList.add("show"); // Voeg de 'show' klasse toe om de foutmelding zichtbaar te maken
    }
}

// Event listeners toevoegen
if (genereerKnop) {
    genereerKnop.addEventListener("click", () => {
        genereerpalet(); // Kleurenpalet genereren
        speelGeluid();   // Geluid afspelen
    });
} else {
    errorMelding.textContent = "De genereer-knop is niet gevonden!"; // Foutmelding in de HTML
}

document.querySelector(".controleerKnop").addEventListener("click", function() {
    const leeftijd = document.querySelector(".leeftijdInput").value; // Haal ingevoerde leeftijd op
    const melding = document.querySelector(".melding"); // Selecteer de melding

    if (leeftijd >= 16) {
        melding.textContent = "Welkom! Je bent oud genoeg.";
    } else {
        melding.textContent = "Helaas, je bent nog niet oud genoeg.";
    }
});

//bronnen: 
// Function speelgeluid: Chatgpt
// colorBoxes.forEach: Chatgpt
// audio: https://freesound.org/s/320887/ 



