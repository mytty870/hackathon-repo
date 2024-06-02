import { Questions } from './_components/Questions'

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[70%] rounded-lg border border-gray-300 bg-white p-4 text-center shadow-md">
        <Questions />
      </div>
    </div>
  )
}
