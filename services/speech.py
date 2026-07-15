from io import BytesIO

from gtts import gTTS


def generate_speech(text, language):
    """
    Generate speech in memory and return it as a BytesIO object.
    """

    if not text.strip():
        raise ValueError("No text provided.")

    # gTTS language codes
    language_map = {
        "en": "en",
        "ur": "ur",
        "ar": "ar",
        "fr": "fr",
        "de": "de",
        "es": "es",
        "it": "it",
        "pt": "pt",
        "ru": "ru",
        "tr": "tr",
        "hi": "hi",
        "zh": "zh-CN",
        "ja": "ja",
        "ko": "ko"
    }

    language = language_map.get(language, "en")

    audio = BytesIO()

    tts = gTTS(
        text=text,
        lang=language,
        slow=False
    )

    tts.write_to_fp(audio)

    audio.seek(0)

    return audio