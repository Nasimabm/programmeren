console.log("Hello world");

// DOM-elementen ophalen
const genereerKnop = document.querySelector(".genereer"); // Knop om kleurenpalet te genereren
const colorBoxes = document.querySelectorAll(".color-box"); // De vakjes waarin de kleuren worden weergegeven
const audioPlayer = document.getElementById("audioPlayer"); // Audio-element voor geluidseffect

// Arrays met kleuren
const kleurenSets = [
    ["#FF5733", "#FFC300", "#DAF7A6"], // Eerste kleurenpalet
    ["#581845", "#900C3F", "#C70039"], // Tweede kleurenpalet
    ["#28B463", "#1F618D", "#7FB3D5"], // Derde kleurenpalet
    ["#F39C12", "#8E44AD", "#2E86C1"]  // Vierde kleurenpalet
];

// Functie: Genereer een willekeurig kleurenpalet
function genereerpalet() {
    // Kies een willekeurige set kleuren
    const gekozenKleuren = kleurenSets[Math.floor(Math.random() * kleurenSets.length)];

    // Update de kleuren van de vakken
    colorBoxes.forEach((box, index) => {
        if (gekozenKleuren[index]) {
            // Verwijder bestaande kleurklassen
            box.className = "color-box";

            // Voeg de nieuwe kleurklasse toe op basis van de kleur
            const kleurClass = `color-${gekozenKleuren[index].replace("#", "")}`;
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
        console.error("Audio element niet gevonden!"); // Foutmelding als audio-element ontbreekt
    }
}

// Event listeners toevoegen
if (genereerKnop) {
    genereerKnop.addEventListener("click", () => {
        genereerpalet(); // Kleurenpalet genereren
        speelGeluid();   // Geluid afspelen
    });
} else {
    console.warn("Genereer-knop niet gevonden!"); // Waarschuwing als de knop ontbreekt
}

// Toegangsleeftijd check (voorbeeldfunctie)
function controleerLeeftijd() {
    const toegangsleeftijd = 16; // Minimale leeftijd
    const leeftijd = 16;        // Huidige leeftijd (kan dynamisch worden gemaakt)

    if (leeftijd >= toegangsleeftijd) {
        console.log("Welkom"); // Toegang toegestaan
    } else {
        console.log("Helaas, je bent nog niet oud genoeg."); // Toegang geweigerd
    }
}



//bronnen: 
// Function speelgeluid: Chatgpt
// audio: https://freesound.org/s/320887/ -->
