'use client'

import { useEffect, useState } from 'react'
import { termine } from '../termine'
import { formatTerminDateNumeric, getTerminStartTimeMs, oneDayMs } from './termine-utils'

export function TermineList() {
  const [nowMs, setNowMs] = useState<number | null>(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setNowMs(Date.now()))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <ul className="mt-6 ml-6 list-disc space-y-3 text-base/7 text-honey-700 dark:text-honey-400">
      {termine.map((termin) => {
        const isOlderThanOneDay = nowMs !== null && getTerminStartTimeMs(termin) < nowMs - oneDayMs

        const content = (
          <>
            {formatTerminDateNumeric(termin.date)}, {termin.time} - {termin.name}, {termin.ort}
            {termin.person ? (
              <span className="text-sm italic">
                <br />({termin.person})
              </span>
            ) : null}
          </>
        )

        return (
          <li key={`${termin.date.toISOString()}-${termin.time}-${termin.name}`}>
            {isOlderThanOneDay ? <span>{content}</span> : content}
          </li>
        )
      })}
    </ul>
  )
}
