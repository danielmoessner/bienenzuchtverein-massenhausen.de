import type { Termin } from '../termine'

export const oneDayMs = 24 * 60 * 60 * 1000

export function formatTerminDateNumeric(date: Date) {
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export function formatTerminDateLong(date: Date) {
  return date.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function getTerminStartTimeMs(termin: Termin) {
  const match = termin.time.match(/(\d{1,2}):(\d{2})/)
  const hours = match ? Number(match[1]) : 0
  const minutes = match ? Number(match[2]) : 0

  const dateTime = new Date(termin.date)
  dateTime.setHours(hours, minutes, 0, 0)
  return dateTime.getTime()
}
