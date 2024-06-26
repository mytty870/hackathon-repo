// export const dummyResult = [
//   {
//     input_text: 'dddddddddddd',
//     response: {
//       text1: {
//         添削前文章: 'dddddddddddd',
//         添削語文章: '（この文章は空白または不完全です）',
//         添削理由: '入力された文章は意味がなく、評価および添削ができません。',
//       },
//       text2: {
//         添削前文章: 'dddddddddddd',
//         添削語文章: '（この文章は空白または不完全です）',
//         添削理由:
//           '入力された文章は内容が明確でなく、評価項目に基づく添削が不可能です。',
//       },
//     },
//   },
//   {
//     input_text: 'dddddddddddd',
//     response: {
//       error: {
//         message:
//           '申し訳ありませんが、提供された内容が適したエントリーシートの文章ではないため、添削ができません。具体的な文章を送っていただければ、評価項目に基づいて添削を行います。',
//       },
//     },
//   },
//   {
//     input_text: 'ddddddddddd',
//     response: {
//       text1: {
//         添削前文章:
//           '指定されたエントリーシートの文章の添削に必要な具体的な文章が提供されていないため、添削を行うことができません。',
//         添削後文章:
//           'エントリーシートの添削には具体的な文章が必要ですので、提供をお願いします。',
//         添削理由: '文章を簡潔にし、依頼内容を明確にするため。',
//       },
//       text2: {
//         添削前文章:
//           'エントリーシートの具体的な文章を提供していただくか、例文を提示してください。',
//         添削後文章:
//           '具体的なエントリーシートの文章を提供するか、例文を提示してください。',
//         添削理由: '文章の主語を明示し、呼びかけの内容を明確にするため。',
//       },
//     },
//   },
// ]

export const dummyResult = [
  {
    input_text:
      '私の強みは協調性です。組織の中で、自分の立ち位置を理解し、チームに良い影響を与え\nるための行動を取ることができます。例えば小学5年生から大学まで続けてきた野球部で\nは、高校時代にキャプテンに任命されてから、部員とのコミュニケーションを通じてチー\nム全体の課題点の克服するための独自メニューの提案や、個人の持ち味を活かすための練\n習方法の提案を行いました。ドラッグストアのアルバイトでは、バイトメンバーとのコ\nミュニケーションを通じて、その人に合った仕事の割り振りを行いました。結果、野球部\nでは甲子園常連校と善戦できるチーム力を作り、アルバイトではバイトリーダーに推薦さ\nれました。今後は、これまでの協調性を活かしたコミュニケーションを活かし、チームメ\nンバーとの協力を通じて組織全体の発展に貢献していきたいと考えています。',
    response: {
      text1: {
        添削前文章:
          '私の強みは協調性です。組織の中で、自分の立ち位置を理解し、チームに良い影響を与えるための行動を取ることができます。',
        添削後文章:
          '私の強みは協調性であり、組織の中で自分の立ち位置を理解し、チームに良い影響を与える行動を取ることができる点です。',
        添削理由:
          '「行動を取ることができます」の部分を「行動を取ることができる点です」に変更することで、文章の締まりがよくなります。',
      },
      text2: {
        添削前文章:
          '例えば小学5年生から大学まで続けてきた野球部では、高校時代にキャプテンに任命されてから、部員とのコミュニケーションを通じてチーム全体の課題点の克服するための独自メニューの提案や、個人の持ち味を活かすための練習方法の提案を行いました。',
        添削後文章:
          '例えば、小学5年生から大学まで続けてきた野球部では、高校時代にキャプテンに任命され、部員とのコミュニケーションを通じてチーム全体の課題を克服するための独自メニューを提案しました。さらに、個々の持ち味を活かす練習方法も提案しました。',
        添削理由:
          '「克服するための」や「個人の持ち味を活かすための」が冗長なので、簡潔にしました。',
      },
      text3: {
        添削前文章:
          'ドラッグストアのアルバイトでは、バイトメンバーとのコミュニケーションを通じて、その人に合った仕事の割り振りを行いました。',
        添削後文章:
          'ドラッグストアのアルバイトでも、バイトメンバーとのコミュニケーションを通じて、その人に合った仕事の割り振りを行いました。',
        添削理由:
          '「では」と「でも」を入れ替えることで流れをスムーズにしました。',
      },
      text4: {
        添削前文章:
          '結果、野球部では甲子園常連校と善戦できるチーム力を作り、アルバイトではバイトリーダーに推薦されました。',
        添削後文章:
          '結果として、野球部では甲子園常連校と善戦できるチーム力を作り上げ、アルバイトではバイトリーダーに推薦されました。',
        添削理由:
          '「結果」を「結果として」に変更し、文全体を繋げることで自然な流れにしました。',
      },
      text5: {
        添削前文章:
          '今後は、これまでの協調性を活かしたコミュニケーションを活かし、チームメンバーとの協力を通じて組織全体の発展に貢献していきたいと考えています。',
        添削後文章:
          '今後は、これまで培ってきた協調性を発揮し、チームメンバーとの協力を通じて組織全体の発展に貢献していきたいと考えています。',
        添削理由:
          '「協調性を活かしたコミュニケーションを活かし」を「協調性を発揮し」に変えることで、冗長さを解消し、分かりやすくしました。',
      },
    },
  },
  {
    input_text:
      '学生時代では社会に貢献するための必要な知識やスキルを身に付けるために、積極的に行\n動を取りました。大学の講義以外にも、企業や東京大学が提供する長期プログラ厶に参加\nすることでデータサイエンスにに関する知識やスキルを磨き、就業インターンや大学のTA\nに参加することで、実際に勉強した知識やスキルを活かすための実践力を学びました。ま\nた、データサイエンス以外の知識も取り入れるために、アルバイト先のHPもレンタルサー\nバー、ドメインの契約から制作を行いました。この結果、データ分析による提案を行うイ\nンターンシップで最優秀賞に選ばれ、他の企業のHP作成やアプリ制作に携わる機会を得ま\nした。今後も積極的に新たな知識やスキルを磨くことで、自己成長を続けていきたいと思\nいます。',
    response: {
      text1: {
        添削前文章:
          '学生時代では社会に貢献するための必要な知識やスキルを身に付けるために、積極的に行動を取りました。',
        添削後文章:
          '学生時代、社会に貢献するために必要な知識やスキルを身に付けるため、積極的に行動しました。',
        添削理由:
          '文法上、「身に付けるために」や「行動を取りました」といった冗長な表現を避け、簡潔化しました。また、文全体の流れをスムーズにするために句読点を配置しました。',
      },
      text2: {
        添削前文章:
          '大学の講義以外にも、企業や東京大学が提供する長期プログラムに参加することでデータサイエンスにに関する知識やスキルを磨き、就業インターンや大学のTAに参加することで、実際に勉強した知識やスキルを活かすための実践力を学びました。',
        添削後文章:
          '大学の講義以外にも、企業や東京大学が提供する長期プログラムに参加してデータサイエンスに関する知識やスキルを磨き、就業インターンや大学のTAの経験を通じて、学んだ知識やスキルを実践する力を身に付けました。',
        添削理由:
          '冗長な表現を減らし、一文内での情報が整理されました。意味の重複や文法の誤りも修正しました。',
      },
      text3: {
        添削前文章:
          'また、データサイエンス以外の知識も取り入れるために、アルバイト先のHPもレンタルサーバー、ドメインの契約から制作を行いました。',
        添削後文章:
          'さらに、データサイエンス以外の知識も習得するため、アルバイト先のHP制作をレンタルサーバーやドメインの契約から行いました。',
        添削理由: '「も」の重複を避け、文章を簡潔にし、読みやすくしました。',
      },
      text4: {
        添削前文章:
          'この結果、データ分析による提案を行うインターンシップで最優秀賞に選ばれ、他の企業のHP作成やアプリ制作に携わる機会を得ました。',
        添削後文章:
          'その結果、データ分析提案のインターンシップで最優秀賞を受賞し、他企業のHP作成やアプリ開発の機会を得ました。',
        添削理由:
          '意味が重複しないように文章を簡潔にし、受け取りやすくしました。',
      },
      text5: {
        添削前文章:
          '今後も積極的に新たな知識やスキルを磨くことで、自己成長を続けていきたいと思います。',
        添削後文章:
          '今後も新たな知識やスキルの習得に積極的に取り組み、自己成長を続けていく所存です。',
        添削理由: '文末の希望的な表現を職務用文書に適したものに変更しました。',
      },
    },
  },
  {
    input_text:
      '主にデータサイエンスに関わる分野について勉強しています。研究室ではテキストデータを扱う研究室に配属しており、現在はLLMと複数の外部知識を用いた関連企業検索手法の提案を行っています。その他の制作物としてはアルバイト先のHP作成、画像キャプション生成bot（画像から画像の説明文を生成するLINEbot）、img2music（画像から音楽を生成するnotebook）などがあります。',
    response: {
      text1: {
        添削前文章: '主にデータサイエンスに関わる分野について勉強しています。',
        添削語文章:
          '私は主にデータサイエンスに関わる分野について勉強しています。',
        添削理由:
          '一人称を明確にすることで、文章全体の一貫性を維持するためです。',
      },
      text2: {
        添削前文章:
          '研究室ではテキストデータを扱う研究室に配属しており、現在はLLMと複数の外部知識を用いた関連企業検索手法の提案を行っています。',
        添削語文章:
          '研究室ではテキストデータを扱う研究室に配属されており、現在はLLMと複数の外部知識を用いた関連企業の検索手法を提案しています。',
        添削理由:
          '文法の誤り（「配属しており」ではなく「配属されており」）を修正し、「関連企業検索手法の提案」をより明確にするために「関連企業の検索手法」に修正しました。',
      },
      text3: {
        添削前文章:
          'その他の制作物としてはアルバイト先のHP作成、画像キャプション生成bot（画像から画像の説明文を生成するLINEbot）、img2music（画像から音楽を生成するnotebook）などがあります。',
        添削語文章:
          'その他の成果物としては、アルバイト先のHP作成、画像キャプション生成bot（画像から説明文を生成するLINEbot）、img2music（画像から音楽を生成するnotebook）などがあります。',
        添削理由:
          '「制作物」を「成果物」に変更し、より成果として明確にしました。また、「画像から画像の説明文を生成する」を「画像から説明文を生成する」に丁寧に表現を修正しました。',
      },
    },
  },
]
