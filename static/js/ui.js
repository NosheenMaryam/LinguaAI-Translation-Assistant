// ======================================
// ui.js
// Handles UI interactions
// ======================================


// ======================================
// ELEMENTS
// ======================================

const sourceLanguage = document.getElementById("source-language");
const targetLanguage = document.getElementById("target-language");

const inputText = document.getElementById("input-text");
const translatedText = document.getElementById("translated-text");

const listenInputBtn = document.getElementById("listen-input-btn");
const listenOutputBtn = document.getElementById("listen-output-btn");


// ======================================
// SUPPORTED LANGUAGES
// ======================================

const languages = {
    en: "English",
    ur: "Urdu",
    ar: "Arabic",
    fr: "French",
    de: "German",
    es: "Spanish",
    it: "Italian",
    pt: "Portuguese",
    ru: "Russian",
    tr: "Turkish",
    hi: "Hindi",
    zh: "Chinese",
    ja: "Japanese",
    ko: "Korean"
};


// ======================================
// POPULATE LANGUAGE DROPDOWNS
// ======================================

function populateLanguages() {

    sourceLanguage.innerHTML = "";
    targetLanguage.innerHTML = "";

    // Source language auto detect
    const autoOption = document.createElement("option");
    autoOption.value = "auto";
    autoOption.textContent = "Auto Detect";
    sourceLanguage.appendChild(autoOption);

    // Add languages
    Object.entries(languages).forEach(([code, name]) => {

        const sourceOption = document.createElement("option");
        sourceOption.value = code;
        sourceOption.textContent = name;
        sourceLanguage.appendChild(sourceOption);

        const targetOption = document.createElement("option");
        targetOption.value = code;
        targetOption.textContent = name;
        targetLanguage.appendChild(targetOption);

    });

    sourceLanguage.value = "auto";
    targetLanguage.value = "ur";

}


// ======================================
// TEXT TO SPEECH (gTTS BACKEND)
// ======================================

async function speakText(text, language) {

    if (!text.trim()) {
        return;
    }

    try {

        const response = await fetch("/speak", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                text: text,
                language: language
            })

        });

        if (!response.ok) {

            throw new Error("Speech generation failed.");

        }

        const audioBlob = await response.blob();

        const audioUrl = URL.createObjectURL(audioBlob);

        const audio = new Audio(audioUrl);

        audio.play();

        audio.onended = () => {

            URL.revokeObjectURL(audioUrl);

        };

    }

    catch (error) {

        console.error(error);

        showMessage("Unable to generate speech.");

    }

}


// ======================================
// LISTEN TO INPUT
// ======================================

listenInputBtn.addEventListener("click", () => {

    const language =
        sourceLanguage.value === "auto"
            ? "en"
            : sourceLanguage.value;

    speakText(
        inputText.value,
        language
    );

});


// ======================================
// LISTEN TO TRANSLATION
// ======================================

listenOutputBtn.addEventListener("click", () => {

    speakText(
        translatedText.value,
        targetLanguage.value
    );

});


// ======================================
// SIMPLE MESSAGE
// ======================================

function showMessage(message) {

    alert(message);

}


// ======================================
// INITIALIZE
// ======================================

populateLanguages();