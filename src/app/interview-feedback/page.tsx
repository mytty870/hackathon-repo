import { Questions } from './_components/Questions'

export default function Page() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="rounded-lg border border-gray-300 bg-white p-4 text-center shadow-md md:w-[70%]">
        <Questions />
      </div>
    </div>
  )
}
