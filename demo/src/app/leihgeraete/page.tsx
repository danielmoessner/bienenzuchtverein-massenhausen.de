import { Section } from '@/components/elements/section'

export default function Page() {
  return (
    <>
      {/* Hero - Leihgeräte */}
      <Section id="leihgeraete">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-medium tracking-tight text-honey-950 dark:text-white sm:text-5xl">
            Leihgeräte
          </h1>
          <p className="mt-6 text-lg/8 text-honey-700 dark:text-honey-400">
            Unser Gerätepool steht allen Mitgliedern zur Verfügung.
          </p>
        </div>
      </Section>

      {/* Content */}
      <Section id="leihgeraete-content">
        <div className="mx-auto max-w-3xl space-y-6 text-base/7 text-honey-700 dark:text-honey-400">
          <p>
            Der Bienenzuchtverein Massenhausen stellt seinen Mitgliedern einen Gerätepool zur
            Ausleihe zur Verfügung. Ziel ist es, insbesondere Neu- und Jungimkern den Einstieg zu
            erleichtern und gleichzeitig allen Mitgliedern den Zugang zu professioneller Technik zu
            ermöglichen, ohne jede Anschaffung selbst tätigen zu müssen.
          </p>

          <p>
            Im Gerätebestand befinden sich unter anderem Honigschleudern, elektrische
            Dampfwachsschmelzer, gasbetriebene Dampfwachsschmelzer sowie weitere imkerliche Geräte
            für unterschiedliche Arbeitsschritte im Jahresverlauf. Die Ausleihe erfolgt
            vereinsintern und nach Absprache.
          </p>

          <p>
            Selbstverständlich erhalten die Mitglieder bei der Ausleihe eine Einweisung in die
            Funktionsweise der Geräte. Ergänzend werden praktische Tipps und bewährte Tricks aus
            der Vereinspraxis weitergegeben, um die Handhabung zu erleichtern und möglichst gute
            Ergebnisse zu erzielen.
          </p>

          <p>
            Durch die gemeinsame Nutzung der Geräte fördern wir Wirtschaftlichkeit, Nachhaltigkeit
            und den fachlichen Austausch innerhalb des Vereins. So profitieren alle Mitglieder von
            funktionierender Technik und dem gesammelten Wissen der Gemeinschaft.
          </p>
        </div>
      </Section>

      {/* Contact Information */}
      <Section id="leihgeraete-kontakt">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg bg-honey-950/2.5 p-8 dark:bg-white/5">
            <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white">
              Ansprechpartner
            </h2>
            <div className="mt-6 space-y-2 text-base/7 text-honey-700 dark:text-honey-400">
              <p>
                <strong className="text-honey-950 dark:text-white">Ansprechpartner:</strong> Markus Besl
              </p>
              <p>
                <strong className="text-honey-950 dark:text-white">Telefon:</strong>{' '}
                <a
                  href="tel:08165 981939"
                  className="underline hover:text-honey-950 dark:hover:text-white"
                >
                  08165 981939
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
