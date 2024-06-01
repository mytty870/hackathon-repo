from typing import Union
from fastapi import FastAPI, File, UploadFile
import requests


import openai
from dotenv import load_dotenv, find_dotenv
import os
from os.path import join, dirname



dotenv_path = join(dirname(__file__), '.env')
load_dotenv(verbose=True, dotenv_path=dotenv_path)

OPENAI_APIKEY = os.getenv("APIKEY")
openai.api_key = OPENAI_APIKEY


app = FastAPI()

@app.get("/")
def read_root():
    return { dotenv_path : find_dotenv()}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None, n: Union[str,None] = "a"):
    n = f"{n}ですよー"
    return {"item_id": item_id + 1, "q": q, "n": n}

