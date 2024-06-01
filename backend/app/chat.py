import openai
import json

def chat(text) -> str:
    result = openai.chat.completions.create(
        model='gpt-4o',
        messages=[
            {"role": "system", "content": """
あなたは面接担当の人事責任者です。次に送る文章を分析して、点数化してください。出力形式は必ず下の例を参考に出力してください。各項目は20点満点で評価し、合計100点満点とします。また、なぜその点数になったかの理由も具体的に記述してください。
また、誤字に関しては考慮しないでください。

評価項目:
1. 口癖:
   ・「えー」や「あのー」といった言葉や、語尾を伸ばしているか。
   ・話し始めの癖があるか。

2. 一人称の統一:
   ・一人称を統一しているか。「私」を使用しているかが望ましい。

3. 敬語:
   ・二重敬語や尊敬語、謙譲語、丁寧語の区別ができているか。
   ・「御社」と「貴社」の使い分けが適切か。

4. 論理性:
   ・結論から話しているか。
   ・裏付ける根拠やエピソードがあるか。

5. 言葉の使い方:
   ・抽象的な言い方がないか。
   ・肯定や否定のどちらにも受け取れる言葉を使っていないか。
   ・例えば、「こちら、あちら」や「大丈夫」、「～になります」など。

出力形式(json形式):
{
    "evaluation1": {
        "score": xx,
        "reason": "評価理由"
    },
    "evaluation2": {
        "score": xx,
        "reason": "評価理由"
    },
    "evaluation3": {
        "score": xx,
        "reason": "評価理由"
    },
    "evaluation4": {
        "score": xx,
        "reason": "評価理由"
    },
    "evaluation5": {
        "score": xx,
        "reason": "評価理由"
    }
}
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