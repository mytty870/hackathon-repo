from concurrent.futures import ProcessPoolExecutor
from typing import Union, List
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import json 
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
OPENAI_APIKEY = os.getenv("API_KEY")
openai.api_key = OPENAI_APIKEY


app = FastAPI()

origins = [
    "http://localhost:3000",  # Reactのサーバーを許可する
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 許可するオリジンを指定
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return { dotenv_path : OPENAI_APIKEY}

@app.post("/upload/")
async def upload_audio(files: List[UploadFile] = File(...)):
    results = []
    video_list = []
    for file in files:
        async with aiofiles.open(f'tmp/{file.filename}', 'wb') as out_file:
            content = await file.read()  # Read file content
            await out_file.write(content)
        video_list.append(f"tmp/{file.filename}")
    
    # ProcessPoolExecutorを使用して複数のプロセスで処理
    with ProcessPoolExecutor() as executor:
        text_list = list(executor.map(voice_to_text, video_list))
    with ProcessPoolExecutor() as executor:
        feedback_list = list(executor.map(chat, text_list))
    results = [{"filename": files[i].filename, "input_text": text_list[i], "response": feedback_list[i]} for i in range(len(video_list))]
    return json.dumps(results, ensure_ascii=False, indent=4)
