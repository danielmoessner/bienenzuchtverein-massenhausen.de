'use client'

import { useEffect, useMemo, useState } from 'react'
import { termine } from '../termine'
import { formatTerminDateNumeric, getTerminStartTimeMs } from './termine-utils'

export function TermineList() {
  const [nowMs, setNowMs] = useState<number | null>(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setNowMs(Date.now()))
    return () => cancelAnimationFrame(frame)
  }, [])

  const { upcoming, past } = useMemo(() => {
    const sorted = [...termine].sort((a, b) => getTerminStartTimeMs(a) - getTerminStartTimeMs(b))

    if (nowMs === null) {
      return { upcoming: sorted, past: [] }
    }

    const past = sorted
      .filter((termin) => getTerminStartTimeMs(termin) < nowMs)
      .reverse()
    const upcoming = sorted.filter((termin) => getTerminStartTimeMs(termin) >= nowMs)

    return { upcoming, past }
  }, [nowMs])

  return (
    <>
      <section>
        <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white">
          Kommende Termine
        </h2>
        <ul className="mt-6 ml-6 list-disc space-y-3 text-base/7 text-honey-700 dark:text-honey-400">
          {upcoming.length === 0 ? <li>Derzeit keine kommenden Termine.</li> : null}
          {upcoming.map((termin) => (
            <li key={`${termin.date.toISOString()}-${termin.time}-${termin.name}`}>
              {formatTerminDateNumeric(termin.date)}, {termin.time} - {termin.name}, {termin.ort}
              {termin.person ? (
                <span className="text-sm italic">
                  <br />({termin.person})
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white">
          Vergangene Termine
        </h2>
        <ul className="mt-6 ml-6 list-disc space-y-3 text-base/7 text-honey-700 dark:text-honey-400">
          {past.length === 0 ? <li>Keine vergangenen Termine.</li> : null}
          {past.map((termin) => (
            <li key={`${termin.date.toISOString()}-${termin.time}-${termin.name}`}>
              {formatTerminDateNumeric(termin.date)}, {termin.time} - {termin.name}, {termin.ort}
              {termin.person ? (
                <span className="text-sm italic">
                  <br />({termin.person})
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
