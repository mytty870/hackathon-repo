'use client'
import { Accordion, AccordionItem } from '@nextui-org/react'

type ScoreDetailsProps = {
  createdAt: Date
  summary: string | null
}

export const ScoreDetails = ({ createdAt, summary }: ScoreDetailsProps) => {
  return (
    <Accordion title="詳細">
      <AccordionItem>
        <p className="text-sm text-gray-500">
          Date: {new Date(createdAt).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-700">Summary: {summary}</p>
      </AccordionItem>
    </Accordion>
  )
}
