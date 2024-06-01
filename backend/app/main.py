from typing import Union
from fastapi import FastAPI, File, UploadFile

import requests
import openai
from chat import chat
from whisper import voice_to_text
from dotenv import load_dotenv, find_dotenv
import os
from os.path import join, dirname
import aiofiles



dotenv_path = join(dirname(__file__), '.env')
load_dotenv(verbose=True, dotenv_path=dotenv_path)

OPENAI_APIKEY = os.getenv("APIKEY")
openai.api_key = OPENAI_APIKEY


app = FastAPI()

@app.get("/")
def read_root():
    return { dotenv_path : find_dotenv()}

@app.post("/upload/")
async def upload_audio(file: UploadFile = File(...)):
    async with aiofiles.open('tmp/input.wav', 'wb') as out_file:
        content = await file.read()  # Read file content
        await out_file.write(content)
    # 音声ファイルをテキストに変換
    text = voice_to_text('tmp/input.wav')
    # テキストをLLMに渡して応答を取得
    response = chat(text)
    return {"input_text": text, "response": response}