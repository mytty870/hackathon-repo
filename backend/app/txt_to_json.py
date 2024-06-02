import openai
import json
from dotenv import load_dotenv, find_dotenv
import os
from os.path import join, dirname


def txt_to_json(text) -> str:
    dotenv_path = join(dirname(__file__), '.env')
    load_dotenv(verbose=True, dotenv_path=dotenv_path)

    OPENAI_APIKEY = os.getenv("API_KEY")
    openai.api_key = OPENAI_APIKEY


    result = openai.chat.completions.create(
        model='gpt-4o',
        response_format={ "type": "json_object" },
        messages=[
            {"role": "system", "content": """
以下はjson形式に変換できなかった形式になります。正しいjson形式に変換して出力してください。
                         """},
            {"role": "user", "content": text},
        ]
    )

    response_text = result.choices[0].message.content
    print(response_text)
    
    try:
        response_json = json.loads(response_text)
        return response_json
    except json.JSONDecodeError as e:
        print("Error: Response is not in JSON format")
        print("Details:", e)
        return None
    
