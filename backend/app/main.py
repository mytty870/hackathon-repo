from typing import Union, List
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
async def upload_audio(files: List[UploadFile] = File(...)):
    results = []
    # for file in files:
    #     async with aiofiles.open(f'tmp/{file.filename}', 'wb') as out_file:
    #         content = await file.read()  # Read file content
    #         await out_file.write(content)
    #     # 音声ファイルをテキストに変換
    #     text = voice_to_text(f'tmp/{file.filename}')
    #     # テキストをLLMに渡して応答を取得
    #     response = chat(text)
    #     results.append({"filename": file.filename, "input_text": text, "response": response})
    # return results
    for file in files:
        # テキストをLLMに渡して応答を取得
        text = "私の強みは誰とでもうまくやっていける社交性です 私は学生時代ダンス部に所属しており1年の文化祭で文員全員でのステージを披露することが決まりました 私は幼少期からダンスを習っていた経験を変われ ダンスステージのセンターに抜粋されました 初めはプレッシャーから堂々と踊ることができなかったんですが 部長から自 分らしく踊るのが一番大切とアドバイスをいただき 肩の荷が折れた気持ちになり無事センターとしてステージを成功させることがで きました はい以上です"
        response = chat(text)
        results.append({"filename": file.filename, "input_text": text, "response": response})
    return results