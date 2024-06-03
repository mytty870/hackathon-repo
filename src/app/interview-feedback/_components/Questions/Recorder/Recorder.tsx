import { Button } from '@nextui-org/react'
import { useEffect, useRef, useState } from 'react'
import MicIcon from '@mui/icons-material/Mic'
import StopCircle from '@mui/icons-material/StopCircle'

type RecorderProps = {
  setRecordings: React.Dispatch<React.SetStateAction<Blob[]>>
  questionNum: number
  isRecording: boolean
  setIsRecording: (isRecording: boolean) => void
  setIsRecorded: (isRecorded: boolean) => void
}

export const Recorder = ({
  setRecordings,
  questionNum,
  isRecording,
  setIsRecording,
  setIsRecorded,
}: RecorderProps) => {
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    setIsDisabled(false)
  }, [questionNum])

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      mediaRecorder.ondataavailable = (e: BlobEvent) => {
        chunksRef.current.push(e.data)
      }
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/wav' })
        chunksRef.current = []
        setRecordings(prev => [...prev, blob])
        setIsDisabled(true)
      }
      mediaRecorder.start()
      setIsRecording(true)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      setIsRecorded(true)
    }
  }

  const handleStartStopRecording = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  return (
    <div>
      {isRecording ? (
        <Button
          color="danger"
          className="gap-1 bg-red-500 p-5 pl-4 font-semibold text-white"
          size="lg"
          disableRipple={true}
          onClick={handleStartStopRecording}
          isDisabled={isDisabled}
          startContent={<StopCircle className="text-2xl text-white" />}
        >
          停止
        </Button>
      ) : (
        <Button
          color="success"
          className="gap-1 bg-[#00CC00] p-5 pl-3 font-semibold text-white"
          size="lg"
          disableRipple={true}
          onClick={handleStartStopRecording}
          isDisabled={isDisabled}
          startContent={<MicIcon className="text-2xl text-white" />}
        >
          録音開始
        </Button>
      )}
    </div>
  )
}
