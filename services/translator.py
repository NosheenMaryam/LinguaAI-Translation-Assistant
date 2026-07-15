from deep_translator import GoogleTranslator


SUPPORTED_LANGUAGES = [
    "en",
    "ur",
    "ar",
    "hi",
    "fr",
    "de",
    "ja",
    "ko",
    "es",
    "it"
]


def translate_text(text, source, target):

    text = text.strip()

    if not text:
        return ""

    if target not in SUPPORTED_LANGUAGES:
        return "Unsupported language"


    try:

        if source == "auto":
            source = "auto"

        translated = GoogleTranslator(
            source=source,
            target=target
        ).translate(text)

        return translated


    except Exception as e:

        print("Translation Error:", e)

        return "Translation failed. Please try again."