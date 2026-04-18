import { Link } from '@/components/elements/link'
import { Section } from '@/components/elements/section'
import { Text } from '@/components/elements/text'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'
import { TeamFourColumnGrid, TeamMember } from '@/components/sections/team-four-column-grid'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="Über den Bienenzuchtverein Massenhausen"
        subheadline={
          <>
            <p>
              Unser Verein hat in den letzten Jahren starken Zuwachs an Jungimkern verzeichnen können. Dadurch bieten
              wir eine nette Gemeinschaft, in der auch viel Kommunikation und Austausch stattfindet.
            </p>
            <p>
              Der Bienenzuchtverein Massenhausen e.V. hat eine lange Geschichte. Er wurde bereits im Frühjahr 1905 als
              Bienenzucht- und Gartenbauverein Massenhausen - Giggenhausen gegründet. Damals lag die Mitgliederzahl bei
              45.
            </p>
            <p>Aktuell liegt im Jahr 2024 die Mitgliederzahl bei ca. 120 Mitgliedern.</p>
          </>
        }
        photo={
          <Image
            src="/probeimkern.png"
            alt="Imkerei Bienenzuchtverein Massenhausen"
            width={1800}
            height={945}
            className="h-auto w-full"
          />
        }
      />

      <TeamFourColumnGrid
        id="team"
        headline="Unser Vorstand"
        subheadline={<p>Bei Fragen rund ums Imkern und unseren Verein sind wir gerne für Sie da.</p>}
      >
        <TeamMember
          img={<Image src="/placeholder-avatar.jpg" alt="" width={800} height={1000} />}
          name="Dr. Elke Frenzel"
          byline="1. Vorstand"
          phone="08165 909632"
          email="vorstand@bzv-massenhausen.de"
        />
        <TeamMember
          img={<Image src="/placeholder-avatar.jpg" alt="" width={800} height={1000} />}
          name="Markus Besl"
          byline="2. Vorstand & Leihgeräte"
          phone="08165 981939"
          email="2.vorstand@bienenzuchtverein-massenhausen.de"
        />
        <TeamMember
          img={<Image src="/placeholder-avatar.jpg" alt="" width={800} height={1000} />}
          name="Helmut Eckert"
          byline="Kassierer &amp; Beiträge"
          email="kassierer@bienenzuchtverein-massenhausen.de "
        />
        <TeamMember
          img={<Image src="/placeholder-avatar.jpg" alt="" width={800} height={1000} />}
          name="Alexander Frenzel"
          byline="Online-Auftritt &amp; Schriftführer"
          phone="08165 909632"
          email="schriftfuehrer@bienenzuchtverein-massenhausen.de"
        />
      </TeamFourColumnGrid>

      <Section id="ort" eyebrow="Wir freuen uns über neue Mitglieder" headline="Mitglied werden">
        <Text className="space-y-2 text-pretty">
          <p>So werden Sie Mitglied im Bienenzuchtverein Massenhausen:</p>
          <p>
            Schreiben Sie uns kurz eine E-Mail an{' '}
            <a
              href="mailto:info@bienenzuchtverein-massenhausen.de"
              className="underline hover:text-honey-950 dark:hover:text-white"
            >
              info@bienenzuchtverein-massenhausen.de
            </a>
            , dann schicken wir Ihnen gerne alle Infos und die Unterlagen zu.
          </p>
          <p>
            Oder direkt online starten: Laden Sie im{' '}
            <Link
              href="/downloads"
              className="text-base/7 font-normal text-honey-700 underline hover:text-honey-950 dark:text-honey-400 dark:hover:text-white"
            >
              Downloadbereich
            </Link>{' '}
            den Mitgliedsantrag und die Datenschutzvereinbarung herunter, füllen Sie beides aus und senden Sie die
            Unterlagen anschließend an den Vorstand (Kontakte siehe oben).
          </p>
        </Text>
      </Section>

      <Section
        id="ort"
        eyebrow="Vereinsgelände"
        headline="Unser Vereins- und Standortbereich an der ehemaligen Radarstation"
      >
        <Text className="space-y-2 text-pretty">
          <p>
            Das Vereinsgelände des Bienenzuchtvereins Massenhausen liegt in einem historisch interessanten Umfeld:
            Früher war das Gebiet zwischen Massenhausen und Giggenhausen Teil einer militärischen Anlage mit
            Radarstation und Luftabwehrstellung, die lange Zeit als Sperrgebiet diente. Nach der Stilllegung wurde das
            Gelände für zivile Nutzung freigegeben und ist seitdem schrittweise offen für verschiedene gemeindliche,
            naturnahe und gemeinschaftliche Aktivitäten.
          </p>
          <p>
            Heute verbindet unser Standort diese regionale Besonderheit mit dem aktiven Vereinsleben: Er bietet
            ausreichend Raum für Bienenstände, Schulungs- und Praxisflächen sowie gemeinschaftliche Begegnungen. Die
            Nutzung als Vereinsfläche ist Ausdruck unseres Engagements für Natur, nachhaltige Landschaftspflege und
            lebendige Gemeinschaft.
          </p>
          <p>
            <a
              href="https://maps.app.goo.gl/NQudaDVBKegLeY1a9"
              className="underline hover:text-honey-950 dark:hover:text-white"
            >
              Zu Google Maps
            </a>
          </p>
        </Text>
      </Section>

      <Section id="geschichte" eyebrow="Historie" headline="Geschichte des Vereins">
        <Text className="space-y-2 text-pretty">
          <p>
            Der Bienenzuchtverein Massenhausen e. V. blickt auf eine lange und gewachsene Geschichte zurück. Gegründet
            wurde der Verein bereits im Frühjahr 1905 als Bienenzucht- und Gartenbauverein Massenhausen–Giggenhausen.
            Schon zur Gründungszeit engagierten sich 45 Mitglieder für die Förderung der Bienenzucht und den damaligen
            Gesundheitsdienst – ein frühes Zeichen für die Bedeutung der Imkerei in der Region.
          </p>
          <p>
            Wie viele Vereine kam auch das Vereinsleben während des Zweiten Weltkriegs zeitweise zum Erliegen. Mit einer
            Generalversammlung im März 1946 wurde der Verein wiederbelebt; zu diesem Zeitpunkt zählte er noch 23
            Mitglieder. In den folgenden Jahrzehnten entwickelte sich der Verein kontinuierlich weiter und passte sich
            den fachlichen und gesellschaftlichen Veränderungen der Imkerei an.
          </p>
          <p>
            Im Jahr 2005 feierte der Bienenzuchtverein Massenhausen sein 100-jähriges Gründungsjubiläum – ein
            Meilenstein, der für Beständigkeit, ehrenamtliches Engagement und generationsübergreifende Vereinsarbeit
            steht.
          </p>
          <p>
            Einen wichtigen Schritt in der modernen Vereinsarbeit markierte das Jahr 2012, als erstmals das „Imkern auf
            Probe“ für Imkerneulinge angeboten wurde. In Kombination mit dem Anfängerkurs entstand daraus ein bis heute
            erfolgreiches Ausbildungskonzept, das vielen Menschen den Einstieg in die Imkerei ermöglicht hat.
          </p>
          <p>
            Seit 2017 ist der Bienenzuchtverein Massenhausen als eingetragener Verein organisiert. Zweck des Vereins ist
            der Erhalt und die Verbreitung der Bienenzucht sowie die Förderung von Naturschutz und Landschaftspflege
            durch die Bestäubung von Kultur- und Wildpflanzen. Damit verbindet der Verein seine lange Tradition mit
            einer klaren Verantwortung für Gegenwart und Zukunft.
          </p>
        </Text>
      </Section>
    </>
  )
}
