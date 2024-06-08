export default function Chatbot() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-screen-lg p-4 md:p-8">
        <div className="bg-white py-4">
          <h2 className="mb-8 text-center text-xl font-bold md:text-2xl">
            就活関連チャットボット
          </h2>
          <div className="mt-12 flex flex-col items-center justify-center">
            <iframe
              src="https://udify.app/chatbot/mrF83K66TGHwlexp"
              className="min-h-[400px] w-full md:min-h-[500px] md:w-[70%]"
              allow="microphone"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
