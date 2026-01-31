import { Section } from '@/components/elements/section'

export default function Page() {
  return (
    <>
      {/* Hero - Termine & Kurse */}
      <Section id="termine-kurse">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-medium tracking-tight text-honey-950 dark:text-white sm:text-5xl">
            Termine & Kurse
          </h1>
          <p className="mt-6 text-lg/8 text-honey-700 dark:text-honey-400">
            Hier finden Sie alle wichtigen Termine und Kursangebote unseres Vereins.
          </p>
        </div>
      </Section>

      {/* Termine List */}
      <Section id="termine-list">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white">
            Kommende Termine
          </h2>
          <p className="mt-4 text-base/7 text-honey-700 dark:text-honey-400">
            Derzeit sind keine Termine verfügbar. In Kürze finden Sie hier Informationen zu:
          </p>
          <ul className="mt-6 space-y-3 text-base/7 text-honey-700 dark:text-honey-400">
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Vereinsversammlungen</span>
            </li>
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Fachvorträge</span>
            </li>
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Praktische Übungen</span>
            </li>
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Gemeinsame Aktivitäten</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Kurse List */}
      <Section id="kurse-list">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white">
            Unsere Kurse
          </h2>
          <p className="mt-4 text-base/7 text-honey-700 dark:text-honey-400">
            Derzeit sind keine Kurse verfügbar. In Kürze finden Sie hier Informationen zu:
          </p>
          <ul className="mt-6 space-y-3 text-base/7 text-honey-700 dark:text-honey-400">
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Anfängerkurs für Neu- und Jungimker</span>
            </li>
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Fortgeschrittenenkurse</span>
            </li>
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Workshops zu speziellen Themen</span>
            </li>
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Praktische Schulungen</span>
            </li>
          </ul>
        </div>
      </Section>

      {/*
        Future extension pattern - replace the lists above with actual event/course cards:

        <Section id="termine-list">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white">
              Kommende Termine
            </h2>
            <div className="mt-8 space-y-4">
              <div className="rounded-lg bg-honey-950/2.5 p-6 dark:bg-white/5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-medium text-honey-950 dark:text-white">
                      Vereinsversammlung
                    </h3>
                    <p className="mt-1 text-sm text-honey-700 dark:text-honey-400">
                      Monatsversammlung mit Fachvortrag
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-honey-950 dark:text-white">
                      15. März 2024
                    </p>
                    <p className="text-sm text-honey-700 dark:text-honey-400">
                      19:00 Uhr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      */}
    </>
  )
}
