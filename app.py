from flask import (
    Flask,
    render_template,
    request,
    jsonify,
    send_file
)

from services.translator import translate_text
from services.speech import generate_speech

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/translate", methods=["POST"])
def translate():

    data = request.get_json()

    text = data.get("text", "").strip()
    source = data.get("source", "auto")
    target = data.get("target", "en")

    if not text:
        return jsonify({
            "error": "No text provided."
        }), 400

    try:

        translated = translate_text(
            text=text,
            source=source,
            target=target
        )

        return jsonify({
            "translation": translated
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500


@app.route("/speak", methods=["POST"])
def speak():

    data = request.get_json()

    text = data.get("text", "").strip()
    language = data.get("language", "en")

    if not text:

        return jsonify({
            "error": "No text provided."
        }), 400

    try:

        audio = generate_speech(
            text=text,
            language=language
        )

        return send_file(
    audio,
    mimetype="audio/mpeg"
)
        

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)