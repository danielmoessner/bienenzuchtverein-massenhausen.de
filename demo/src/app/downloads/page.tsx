import { Section } from '@/components/elements/section'

export default function Page() {
  return (
    <>
      {/* Hero - Downloads */}
      <Section id="downloads">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-medium tracking-tight text-honey-950 dark:text-white sm:text-5xl">
            Downloads
          </h1>
          <p className="mt-6 text-lg/8 text-honey-700 dark:text-honey-400">
            Hier finden Sie wichtige Dokumente und Formulare zum Download.
          </p>
        </div>
      </Section>

      {/* Downloads List */}
      <Section id="downloads-list">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white">
            Verfügbare Downloads
          </h2>
          <p className="mt-4 text-base/7 text-honey-700 dark:text-honey-400">
            Derzeit sind keine Downloads verfügbar. In Kürze finden Sie hier folgende Dokumente:
          </p>
          <ul className="mt-6 space-y-3 text-base/7 text-honey-700 dark:text-honey-400">
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Mitgliedsanmeldung</span>
            </li>
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Satzung des Vereins</span>
            </li>
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Beitragsordnung</span>
            </li>
            <li className="flex gap-3">
              <span className="text-honey-500">•</span>
              <span>Informationen zum Datenschutz</span>
            </li>
          </ul>
        </div>
      </Section>

      {/*
        Future extension pattern - replace the list above with actual download links:

        <Section id="downloads-list">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-medium tracking-tight text-honey-950 dark:text-white">
              Verfügbare Downloads
            </h2>
            <div className="mt-8 space-y-4">
              <a
                href="/downloads/mitgliedsanmeldung.pdf"
                download
                className="flex items-center justify-between rounded-lg bg-honey-950/2.5 p-6 transition hover:bg-honey-950/5 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <div>
                  <h3 className="text-base font-medium text-honey-950 dark:text-white">
                    Mitgliedsanmeldung
                  </h3>
                  <p className="mt-1 text-sm text-honey-700 dark:text-honey-400">
                    Formular zur Anmeldung als Vereinsmitglied
                  </p>
                </div>
                <div className="text-honey-700 dark:text-honey-400">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </Section>
      */}
    </>
  )
}
