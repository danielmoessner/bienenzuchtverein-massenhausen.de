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
    person: 'Dr. Elke Frenzel, Bienenfachwart',
  },
  {
    date: new Date(2026, 3, 17),
    time: '19:00 Uhr',
    name: 'Ausrüstung und Beuten in der Imkerei, Standortwahl',
    ort: 'Gasthof Maisberger',
    person: 'Dr. Elke Frenzel, Bienenfachwart',
  },
  {
    date: new Date(2026, 4, 8),
    time: '19:00 Uhr',
    name: 'Biologie der Biene',
    ort: 'Gasthof Maisberger',
    person: 'Dr. Elke Frenzel, Bienenfachwart',
  },
  {
    date: new Date(2026, 4, 13),
    time: '19:00 Uhr',
    name: 'Bienenstammtisch',
    ort: 'Gasthof Hepting in Massenhausen',
    // person: 'Offener Austausch für alle Imker – von Anfängern bis zu erfahrenen Bienenhaltern',
  },
  {
    date: new Date(2026, 5, 12),
    time: '19:00 Uhr',
    name: 'Ablegerbildung und Schwarmverhinderung',
    ort: 'Gasthof Maisberger',
    person: 'Dr. Elke Frenzel, Bienenfachwart',
  },
  {
    date: new Date(2026, 5, 26),
    time: '19:00 Uhr',
    name: 'Varroa und Varroabehandlung',
    ort: 'Gasthof Maisberger',
    person: 'Dr. Elke Frenzel, Bienenfachwart',
  },
  {
    date: new Date(2026, 6, 3),
    time: '19:00 Uhr',
    name: 'Fütterung und Futtermittel',
    ort: 'Gasthof Maisberger',
    person: 'Dr. Elke Frenzel, Bienenfachwart',
  },
  {
    date: new Date(2026, 6, 17),
    time: '19:00 Uhr',
    name: 'Überblick übers Bienenjahr',
    ort: 'Gasthof Maisberger',
    person: 'Dr. Elke Frenzel, Bienenfachwart',
  },
]
