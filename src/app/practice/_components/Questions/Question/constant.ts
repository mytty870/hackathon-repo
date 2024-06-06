export const dummyResult = [
  {
    filename: 'recording_1.wav',
    input_text: '2枚でーす',
    response: {
      evaluation1: {
        score: 5,
        reason:
          'わずか2文字の発言からは口癖があるかどうか判断できませんが、短い言葉の場合でも「でーす」といった形で語尾が持続音になっている点が見られました。このような口癖はビジネスシーンでは控えた方が良いです。',
      },
      evaluation2: {
        score: 10,
        reason:
          '今回の例では一人称が登場しませんでした。したがって一人称の使い方について評価する情報が不足しています。',
      },
      evaluation3: {
        score: 5,
        reason:
          '敬語の使い方として「でーす」が適切ではありません。「です」を使用することで、より丁寧な印象を与えることができます。',
      },
      evaluation4: {
        score: 5,
        reason:
          '情報が短すぎて論理性を評価するのが困難です。しかし少なくとも、具体的な事柄について言及していません。',
      },
      evaluation5: {
        score: 5,
        reason:
          '短い言葉ですが、「2枚でーす」という言い方は少しカジュアルすぎます。より具体的な表現や明確な言葉を使うことが求められます。例としては「2枚あります」、「2枚提出します」などの方が適切です。',
      },
    },
  },
  {
    filename: 'recording_2.wav',
    input_text: 'ありません',
    response: {
      evaluation1: {
        score: 20,
        reason:
          '無意識の発声や特定のフレーズの癖が見られず、非常にスムーズな表現でした。',
      },
      evaluation2: {
        score: 20,
        reason: '一人称を使用しないことで、一貫性と適切さが保たれていました。',
      },
      evaluation3: {
        score: 15,
        reason:
          '敬語が使われていないため、これに対する評価が難しい。ただし、適切な一人称や話し方を考慮すると、間違った敬語の使用も見られない点を評価します。',
      },
      evaluation4: {
        score: 20,
        reason:
          '簡潔で無駄がないため、結論から話したと言えます。また、不必要な情報が含まれていない点が良いです。',
      },
      evaluation5: {
        score: 20,
        reason:
          '非常に簡潔で具体性がありました。抽象的な言葉や曖昧な表現が一切含まれていませんでした。',
      },
    },
  },
  {
    filename: 'recording_3.wav',
    input_text: 'すいません',
    response: {
      evaluation1: {
        score: 15,
        reason:
          '非常に短い表現のため、口癖の解析が難しいですが、特段の無意識の発声や癖は見受けられません。しかし、文章が短すぎて詳細な解析ができません。',
      },
      evaluation2: {
        score: 20,
        reason:
          '一人称が使用されておらず、混在の可能性もないため、特に問題は見当たりません。',
      },
      evaluation3: {
        score: 15,
        reason:
          '敬語に問題があります。「すいません」よりも「申し訳ありません」や「失礼いたしました」が適切です。',
      },
      evaluation4: {
        score: 10,
        reason:
          '論理性が全く見られません。短い表現のため、背景や詳細が不足しています。',
      },
      evaluation5: {
        score: 10,
        reason:
          '非常に曖昧かつ抽象的な表現です。もう少し具体的な言葉を使用して、何を謝罪しているのか明確にする必要があります。',
      },
    },
  },
  {
    filename: 'recording_4.wav',
    input_text: 'ここにあります。',
    response: {
      evaluation1: {
        score: 15,
        reason:
          '評価理由: 文章が非常に短く、口癖を評価するための十分な情報が提供されていないため、口癖の有無は判断できませんでした。',
      },
      evaluation2: {
        score: 15,
        reason:
          '評価理由: 一人称の使用が見られないため、一貫性や適切さについての判断が困難です。しかし、文章の短さから特に問題は見られませんでした。',
      },
      evaluation3: {
        score: 15,
        reason:
          '評価理由: 敬語の使用も見られないため、二重敬語や尊敬語、謙譲語、丁寧語の使い分けを評価することはできません。ただし、不適切な敬語使用は見られませんでした。',
      },
      evaluation4: {
        score: 10,
        reason:
          '評価理由: 文章が非常に短いため、論理性を評価するための情報が不足しています。結論もエピソードも存在しないため、評価が難しいです。',
      },
      evaluation5: {
        score: 15,
        reason:
          '評価理由: 言葉の使い方においても、具体的かどうかや明確さを判断するための情報が不足しています。ただし、不適切な表現は見られませんでした。',
      },
    },
  },
  {
    filename: 'recording_5.wav',
    input_text: 'ですかね',
    response: {
      evaluation1: {
        score: 10,
        reason:
          '複数の評価項目に対応していませんが、語尾に「ですかね」と無意識の発声が見られました。これは不適切な表現ですが、回数が少ない場合には問題になりにくいかもしれません。',
      },
      evaluation2: {
        score: 0,
        reason:
          '一人称については一切触れられていないため、評価不能です。一人称の適切な使用について考慮する必要があります。',
      },
      evaluation3: {
        score: 0,
        reason:
          '敬語の使い方に関しても言及がないため、評価不能です。ビジネスの場での敬語の正しい使用を意識することが求められます。',
      },
      evaluation4: {
        score: 0,
        reason:
          '論理性についても言及がないため、評価不能です。論理的な構成やエピソードを提供することが重要です。',
      },
      evaluation5: {
        score: 0,
        reason:
          '言葉の使い方についても言及がないため、評価不能です。具体的で明確な表現を使用することが求められます。',
      },
    },
  },
  {
    reason:
      '評価の情報が非常に短く、一部では適切な分析が困難でした。「でーす」などの口癖やカジュアルな言葉遣いはビジネスシーンでは控えるべきです。一人称や敬語の使用については情報が不足していますが、短いながらも論理的で具体的な表現や無駄のない点は良かったです。今後は適切な敬語と具体的な表現に努めましょう。',
  },
]