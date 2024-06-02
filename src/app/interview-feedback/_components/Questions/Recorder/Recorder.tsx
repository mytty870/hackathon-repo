import { Button } from '@nextui-org/react'
import { useEffect, useRef, useState } from 'react'

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
      <Button
        color="primary"
        onClick={handleStartStopRecording}
        isDisabled={isDisabled}
      >
        {isRecording ? '停止' : '録音開始'}
      </Button>
    </div>
  )
}
