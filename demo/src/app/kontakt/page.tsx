import { Section } from '@/components/elements/section'

export default function Page() {
  return (
    <>
      {/* Hero - Kontakt */}
      <Section id="kontakt">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-medium tracking-tight text-honey-950 dark:text-white sm:text-5xl">
            Kontakt
          </h1>
          <p className="mt-6 text-lg/8 text-honey-700 dark:text-honey-400">
            Bei Fragen rund um unseren Verein oder die Imkerei erreichen Sie uns gerne per E-Mail.
          </p>
        </div>
      </Section>

      {/* Contact Information */}
      <Section id="kontakt-info">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg bg-honey-950/2.5 p-8 dark:bg-white/5">
            <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white">
              Bienenzuchtverein Massenhausen e.V.
            </h2>
            <div className="mt-6 space-y-2 text-base/7 text-honey-700 dark:text-honey-400">
              <p>
                <strong className="text-honey-950 dark:text-white">1. Vorstand:</strong> Dr. Elke Frenzel
              </p>
              <p>
                <strong className="text-honey-950 dark:text-white">E-Mail:</strong>{' '}
                <a
                  href="mailto:info@bienenzuchtverein-massenhausen.de"
                  className="underline hover:text-honey-950 dark:hover:text-white"
                >
                  info@bienenzuchtverein-massenhausen.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
