'use client'
import Image from 'next/image'

export default function ServiceDescription() {
  return (
    <div>
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">機能の紹介</h2>
          <div className="flex flex-col items-center">
            <div className="w-full p-4 sm:w-3/4 lg:w-1/2">
              <div className="mb-6 rounded-lg bg-gray-100 p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold">AIによる面接対策</h3>
                <Image
                  src="/interviewinput.jpeg"
                  alt="AI Interview Preparation"
                  width={300}
                  height={200}
                  className="mx-auto mb-4 rounded-lg"
                />
                <Image
                  src="/interview-full.jpeg"
                  alt="AI Interview Preparation"
                  width={300}
                  height={200}
                  className="mx-auto mb-4 rounded-lg"
                />
                <p className="text-left">
                  面接対策ではよくある質問を音声で入力すると、口癖や論理性などの評価項目からAIが評価を行い、点数付きで採点をしてくれます。改善点なども教えてくれます。そして、面接対策はランキングがあり、点数が高い人はランキングに表示されるようになります。他にも、マイページから自身の面接結果履歴を記録しているので、確認することができます。
                </p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-3/4 lg:w-1/2">
              <div className="mb-6 rounded-lg bg-gray-100 p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold">ESの添削</h3>
                <Image
                  src="/es-feedback.png"
                  alt="Essay Correction"
                  width={500}
                  height={200}
                  className="mx-auto mb-4 rounded-lg"
                />
                <p className="text-left">
                  ES添削は、自己PRなどの文章をテキストで入力すると、添削をしてくれます。添削理由などもAIが出力してくれます。
                </p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-3/4 lg:w-1/2">
              <div className="mb-6 rounded-lg bg-gray-100 p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold">
                  就活QAに関するチャットボット
                </h3>
                <Image
                  src="/qa.png"
                  alt="Job Hunting Chatbot"
                  width={500}
                  height={200}
                  className="mx-auto mb-4 rounded-lg"
                />
                <p className="text-left">
                  チャットボットは、就活に関する疑問に答えてくれます。ちょっとした気になる就活の質問に答えます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
