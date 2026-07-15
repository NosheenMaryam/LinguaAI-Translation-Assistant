// ======================================
// translator.js
// Handles translation functionality
// ======================================


// ======================================
// ELEMENTS
// ======================================

const translateBtn = document.getElementById("translate-btn");
const swapBtn = document.getElementById("swap-btn");

const loading = document.getElementById("loading");


// ======================================
// TRANSLATE
// ======================================

translateBtn.addEventListener("click", async () => {

    const text = inputText.value.trim();

    const source = sourceLanguage.value;

    const target = targetLanguage.value;

    if (text === "") {

        alert("Please enter some text.");

        return;

    }

    loading.hidden = false;

    translateBtn.disabled = true;

    translateBtn.textContent = "Translating...";

    try {

        const response = await fetch("/translate", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                text: text,

                source: source,

                target: target

            })

        });

        const data = await response.json();

        translatedText.value = data.translation;

    }

    catch (error) {

        console.error(error);

        alert("Translation failed. Please try again.");

    }

    finally {

        loading.hidden = true;

        translateBtn.disabled = false;

        translateBtn.textContent = "Translate";

    }

});


// ======================================
// SWAP LANGUAGES
// ======================================

swapBtn.addEventListener("click", () => {

    if (sourceLanguage.value === "auto") return;

    const sourceValue = sourceLanguage.value;

    const targetValue = targetLanguage.value;

    sourceLanguage.value = targetValue;

    targetLanguage.value = sourceValue;

    const input = inputText.value;

    inputText.value = translatedText.value;

    translatedText.value = input;

});
// ======================================
// COPY TRANSLATION
// ======================================

const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", async () => {

    const text = translatedText.value.trim();

    if (text === "") {

        alert("Nothing to copy.");

        return;

    }

    try {

        await navigator.clipboard.writeText(text);

        alert("Translation copied!");

    }

    catch(error){

        console.error(error);

        alert("Copy failed.");

    }

});


// ======================================
// CLEAR BUTTON
// ======================================

const clearBtn = document.getElementById("clear-btn");


clearBtn.addEventListener("click", () => {


    inputText.value = "";

    translatedText.value = "";


});


// ======================================
// DOWNLOAD TRANSLATION TEXT
// ======================================

const downloadBtn = document.getElementById("download-btn");


downloadBtn.addEventListener("click", () => {


    const text = translatedText.value.trim();


    if(text === ""){

        alert("Nothing to download.");

        return;

    }


    const blob = new Blob(
        [text],
        {
            type:"text/plain"
        }
    );


    const url = URL.createObjectURL(blob);


    const link = document.createElement("a");


    link.href = url;

    link.download = "translation.txt";


    link.click();


    URL.revokeObjectURL(url);


});