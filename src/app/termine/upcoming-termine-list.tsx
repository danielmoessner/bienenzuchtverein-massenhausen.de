'use client'

import { useEffect, useMemo, useState } from 'react'
import { termine } from '../termine'
import { formatTerminDateLong, getTerminStartTimeMs } from './termine-utils'

type Props = {
  count?: number
}

function getUpcoming(count: number, nowMs: number | null) {
  const sorted = [...termine].sort((a, b) => getTerminStartTimeMs(a) - getTerminStartTimeMs(b))

  if (nowMs === null) {
    return sorted.slice(0, count)
  }

  return sorted.filter((t) => getTerminStartTimeMs(t) >= nowMs).slice(0, count)
}

export function UpcomingTermineList({ count = 2 }: Props) {
  const [nowMs, setNowMs] = useState<number | null>(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setNowMs(Date.now()))
    return () => cancelAnimationFrame(frame)
  }, [])

  const upcoming = useMemo(() => getUpcoming(count, nowMs), [count, nowMs])

  return (
    <ul>
      {upcoming.length === 0 ? <li>Derzeit keine kommenden Termine.</li> : null}
      {upcoming.map((termin) => (
        <li key={`${termin.date.toISOString()}-${termin.time}-${termin.name}`}>
          {formatTerminDateLong(termin.date)}, {termin.time} - {termin.name}, {termin.ort}
        </li>
      ))}
    </ul>
  )
}
