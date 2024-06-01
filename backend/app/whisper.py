from io import BytesIO
import openai
from dotenv import load_dotenv, find_dotenv
import os
from os.path import join, dirname


def voice_to_text(url):
    dotenv_path = join(dirname(__file__), '.env')
    load_dotenv(verbose=True, dotenv_path=dotenv_path)
    OPENAI_APIKEY = os.getenv("API_KEY")
    openai.api_key = OPENAI_APIKEY

    audio = open(url, "rb")
    # audio_data = BytesIO(audio)
    # audio_data.name = 'from_mic.wav'
    transcript = openai.audio.transcriptions.create(
        file = audio,
        model = 'whisper-1',
        language='ja')
    return transcript.text
    