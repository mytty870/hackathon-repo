from io import BytesIO
import openai



def voice_to_text(url):
    audio = open(url, "rb")
    # audio_data = BytesIO(audio)
    # audio_data.name = 'from_mic.wav'
    transcript = openai.audio.transcriptions.create(
        file = audio,
        model = 'whisper-1',
        language='ja')
    return transcript.text
    