export type Termin = {
  date: Date
  time: string
  name: string
  ort: string
  person?: string
}

export const termine: Termin[] = [
  {
    date: new Date(2026, 2, 6),
    time: '19:00 Uhr',
    name: 'JHV',
    ort: 'Hepting Massenhausen',
  },
  {
    date: new Date(2026, 2, 14),
    time: '08:30 Uhr bis 12:00 Uhr',
    name: 'Aktion Ramadama – „Saubere Landschaft“',
    ort: 'Feuerwehrhaus Massenhausen (Treffpunkt)',
  },
  {
    date: new Date(2026, 2, 27),
    time: '19:00 Uhr',
    name: 'Rechtsgrundlagen, Förderungen und alles rund ums Imkern',
    ort: 'Gasthof Maisberger',
    person: 'Fachwart: Dr. Elke Frenzel',
  },
  {
    date: new Date(2026, 3, 17),
    time: '19:00 Uhr',
    name: 'BEUTENSYSTEME - Beutensysteme im Vergleich',
    ort: 'Gasthof Maisberger',
    person: 'Fachwart: Dr. Elke Frenzel',
  },
  {
    date: new Date(2026, 4, 8),
    time: '19:00 Uhr',
    name: 'BIOLOGIE - Biologie der Biene',
    ort: 'Gasthof Maisberger',
    person: 'Fachwart: Dr. Elke Frenzel',
  },
  {
    date: new Date(2026, 4, 13),
    time: '19:00 Uhr',
    name: 'Bienenstammtisch',
    ort: 'Gasthof Hepting in Massenhausen',
    // person: 'Offener Austausch für alle Imker – von Anfängern bis zu erfahrenen Bienenhaltern',
  },
  {
    date: new Date(2026, 5, 11),
    time: '19:00 Uhr',
    name: 'Bienenstammtisch',
    ort: 'Gasthof Hepting in Massenhausen',
  },
  {
    date: new Date(2026, 5, 12),
    time: '19:00 Uhr',
    name: 'JUNGVOLKBILDUNG - Ableger- und Kunstschwarmbildung',
    ort: 'Gasthof Maisberger',
    person: 'Fachwart: Dr. Elke Frenzel',
  },
  {
    date: new Date(2026, 5, 26),
    time: '19:00 Uhr',
    name: 'VARROABEKÄMPFUNG - Varroa und Varroabehandlung',
    ort: 'Gasthof Maisberger',
    person: 'Bienensachverständiger: Markus Besl',
  },
  {
    date: new Date(2026, 6, 3),
    time: '19:00 Uhr',
    name: 'EINWINTERUNG - Fütterung und Futtermittel',
    ort: 'Gasthof Maisberger',
    person: 'Fachwart: Dr. Elke Frenzel',
  },
  {
    date: new Date(2026, 6, 9),
    time: '19:00 Uhr',
    name: 'Bienenstammtisch',
    ort: 'Gasthof Hepting in Massenhausen',
  },
  {
    date: new Date(2026, 6, 17),
    time: '19:00 Uhr',
    name: 'ARBEITSKALENDER - Überblick übers Bienenjahr, ein Arbeitskalender',
    ort: 'Gasthof Maisberger',
    person: 'Fachwart: Dr. Elke Frenzel',
  },
]
