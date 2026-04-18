import { Section } from '@/components/elements/section'

export default function Page() {
  return (
    <>
      {/* Hero - Impressum */}
      <Section id="impressum">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-medium tracking-tight text-honey-950 dark:text-white sm:text-5xl">
            Impressum
          </h1>
        </div>
      </Section>

      {/* Legal Information */}
      <Section id="impressum-content">
        <div className="mx-auto max-w-3xl space-y-8 text-base/7 text-honey-700 dark:text-honey-400">
          {/* Angaben gemäß § 5 TMG */}
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-honey-950 dark:text-white font-medium">Bienenzuchtverein Massenhausen</p>
            <p>Mohnweg 18</p>
            <p>85375 Neufahrn</p>
            <p className="mt-4">Vereinsregister: VR 207411</p>
            <p>Registergericht: Amtsgericht München</p>
            <p className="mt-4">
              <strong className="text-honey-950 dark:text-white">Vertreten durch:</strong>
            </p>
            <p>Dr. Elke Frenzel</p>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white mb-4">
              Kontakt
            </h2>
            <p>Telefon: +49 (08165) 909632</p>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:info@bienenzuchtverein-massenhausen.de"
                className="underline hover:text-honey-950 dark:hover:text-white"
              >
                info@bienenzuchtverein-massenhausen.de
              </a>
            </p>
          </div>

          {/* Verantwortlich */}
          <div>
            <p>
              <strong className="text-honey-950 dark:text-white">ViSdPg:</strong> Alexander Frenzel
            </p>
            <p>
              <strong className="text-honey-950 dark:text-white">Webmaster:</strong> Alexander Frenzel
            </p>
            <p>
              <a
                href="mailto:info@bienenzuchtverein-massenhausen.de"
                className="underline hover:text-honey-950 dark:hover:text-white"
              >
                info@bienenzuchtverein-massenhausen.de
              </a>
            </p>
          </div>

          {/* Haftungsausschluss */}
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white mb-4">
              Haftungsausschluss
            </h2>
            <p className="mb-4">
              Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt recherchiert und implementiert. Fehler sind
              dennoch nicht auszuschließen. Eine Haftung für die Richtigkeit, Vollständigkeit und Aktualität dieser
              Webseiten kann trotz sorgfältiger Prüfung nicht übernommen werden.
            </p>
            <p className="mb-4">
              Wir übernehmen insbesondere keinerlei Haftung, für eventuelle Schäden oder Konsequenzen, die durch die
              direkte oder indirekte Nutzung der angebotenen Inhalte entstehen.
            </p>
            <p>
              Wir sind als Inhaltsanbieter für die eigenen Inhalte, die zur Nutzung bereitgehalten werden, nach den
              allgemeinen Gesetzen verantwortlich. Von diesen eigenen Inhalten sind Querverweise ("externe Links") auf
              die von anderen Anbietern bereitgehaltenen Inhalte zu unterscheiden. Diese fremden Inhalte stammen weder
              von uns, noch haben wir die Möglichkeit, den Inhalt von Seiten Dritter zu beeinflussen. Die Inhalte
              fremder Seiten, auf die wir mittels Links hinweisen, spiegeln nicht unsere Meinung wider, sondern dienen
              lediglich der Information und der Darstellung von Zusammenhängen. Wir haften nicht für fremde Inhalte, auf
              die wir lediglich im oben genannten Sinne hinweisen. Die Verantwortlichkeit liegt alleine bei dem Anbieter
              der Inhalte.
            </p>
          </div>

          {/* Urheberrecht */}
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight text-honey-950 dark:text-white mb-4">
              Urheberrecht
            </h2>
            <p>
              Die auf dieser Website veröffentlichten Inhalte (Texte, Grafiken, Bilder, Layout usw.) unterliegen dem
              Urheberrecht. Jede vom Urheberrechtsgesetz nicht zugelassene Verwertung bedarf vorheriger Zustimmung.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
