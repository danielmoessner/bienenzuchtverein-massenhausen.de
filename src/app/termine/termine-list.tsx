'use client'

import { useEffect, useState } from 'react'
import { Termin, termine } from '../termine'

const oneDayMs = 24 * 60 * 60 * 1000

function formatDate(date: Date) {
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

function getStartTimeMs(termin: Termin) {
  const match = termin.time.match(/(\d{1,2}):(\d{2})/)
  const hours = match ? Number(match[1]) : 0
  const minutes = match ? Number(match[2]) : 0

  const dateTime = new Date(termin.date)
  dateTime.setHours(hours, minutes, 0, 0)
  return dateTime.getTime()
}

export function TermineList() {
  const [nowMs, setNowMs] = useState<number | null>(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setNowMs(Date.now()))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <ul className="mt-6 ml-6 list-disc space-y-3 text-base/7 text-honey-700 dark:text-honey-400">
      {termine.map((termin) => {
        const isOlderThanOneDay = nowMs !== null && getStartTimeMs(termin) < nowMs - oneDayMs

        const content = (
          <>
            {formatDate(termin.date)}, {termin.time} - {termin.name}, {termin.ort}
            {termin.person ? (
              <span className="text-sm italic">
                <br />
                (mit {termin.person})
              </span>
            ) : null}
          </>
        )

        return (
          <li key={`${termin.date.toISOString()}-${termin.time}-${termin.name}`}>
            {isOlderThanOneDay ? <s>{content}</s> : content}
          </li>
        )
      })}
    </ul>
  )
}
