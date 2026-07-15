# LinguaAI - AI Language Translator

LinguaAI is a multilingual language translation web application built using Flask, Python, HTML, CSS, and JavaScript.

The application allows users to translate text between multiple languages and listen to both input and translated text using Google Text-to-Speech (gTTS).

---

## Features

* Translate text between multiple languages
* Automatic language detection
* Swap source and target languages
* Listen to input text using text-to-speech
* Listen to translated text using gTTS
* Copy translated text
* Download translated text
* Responsive and modern user interface
* Support for multiple languages

---

## Technologies Used

## Backend

* Python
* Flask
* deep-translator
* Google Text-to-Speech (gTTS)

## Frontend

* HTML5
* CSS3
* JavaScript

---

## Project Structure

```
LinguaAI/
│
├── app.py
├── requirements.txt
├── README.md
│
├── services/
│   ├── translator.py
│   └── speech.py
│
├── templates/
│   └── index.html
│
└── static/
    ├── css/
    └── js/
```

---

## Application Flow

### Translation Flow

```
User Input
     |
     ↓
Frontend Interface
     |
     ↓
JavaScript Request
     |
     ↓
Flask Backend API
     |
     ↓
deep-translator
     |
     ↓
Translated Output
     |
     ↓
Display Result in Browser
```

### Text-to-Speech Flow

```
User Text
     |
     ↓
Flask Backend
     |
     ↓
Google Text-to-Speech (gTTS)
     |
     ↓
Generated Audio File
     |
     ↓
Browser Playback
```

---

# Installation and Setup

## 1. Clone Repository

```bash
 git clone https://github.com/NosheenMaryam/LinguaAI-Translation-Assistant.git
```

## 2. Navigate to Project Directory

```bash
cd LinguaAI
```

## 3. Create Virtual Environment

```bash
python -m venv venv
```

## 4. Activate Virtual Environment

For Windows:

```bash
venv\Scripts\activate
```

For Linux/Mac:

```bash
source venv/bin/activate
```

## 5. Install Dependencies

```bash
pip install -r requirements.txt
```

## 6. Run Application

```bash
python app.py
```

## 7. Open Application

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

## Requirements

Main dependencies:

```
Flask
deep-translator
gTTS
requests
gunicorn
```

All dependencies are available in:

```
requirements.txt
```

---

## Text-to-Speech Feature

LinguaAI uses Google Text-to-Speech (gTTS) to convert text into speech.

Users can listen to:

* Original input text
* Translated text

The generated audio is processed by the Flask backend and played directly in the browser.

---

## Future Improvements

* Voice input support
* Improved language detection display
* Translation history
* User authentication
* Database integration
* Cloud deployment
* AI-powered translation suggestions

---

## Screenshots

## Screenshots

### LinguaAI Translator Interface

![LinguaAI Interface](static/images/linguaai-interface.png.jpeg)

## Author

Nosheen Maryam

---

## License

This project is created for educational and internship purposes.
