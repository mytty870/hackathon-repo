export default function Chatbot() {
  return (
    <div className="mx-auto max-w-screen-lg p-4 md:p-8">
      <h1 className="mb-8 text-center text-xl font-bold md:text-2xl">
        就活関連チャットボット
      </h1>

      <div className="mt-12 flex items-center justify-center bg-white">
        <iframe
          src="https://udify.app/chatbot/mrF83K66TGHwlexp"
          className="min-h-[400px] w-full bg-white md:min-h-[500px] md:w-[70%]"
          allow="microphone"
        ></iframe>
      </div>
    </div>
  )
}
