import { Questions } from './_components/Questions'

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="mx-auto w-[400px] items-center justify-center">
        <div>Interview Feedback Page</div>
        <Questions />
      </div>
    </div>
  )
}
