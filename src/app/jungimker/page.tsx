import Image from 'next/image'
import { ButtonLink } from '@/components/elements/button'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'

export default function Page() {
  return (
    <>
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="Jungimker Kurs"
        subheadline={
          <>
            <p>
              Wie sieht der richtige Einstieg in die Imkerei aus? Was brauche ich? Was muss ich wissen?
            </p>
            <p>
              Sie interessieren sich für die Bienenhaltung und stellen sich solche oder ähnliche Fragen!
            </p>
            <p>
              Dann sind Sie in unserem Anfängerkurs richtig aufgehoben. Hier bekommen Sie an sieben Kurstagen alle notwendigen Informationen um mit dem Imkern zu beginnen:
            </p>
            <p>
              Sie erhalten einen Überblick über die Rechtsgrundlagen und Formalitäten, die erledigt werden müssen. Auch Materialkunde  und notwendige Anschaffungen werden ausführlich besprochen, so dass Sie wissen, was bereits am Anfang angeschafft werden sollte und was Sie noch nicht gleich am Anfang benötigen. Hier bietet zur Unterstützung der Bienenzuchtverein Massenhausen für seine Mitglieder auch Geräte wie z.B. Schleuder oder Dampfwachsschmelzer, aus seinem Gerätepool zur Ausleihe an.
            </p>
            <p>
              Ein großer Teil des Kurses beschäftigt sich mit dem notwendigen Wissen zur Bienenhaltung: Sie bekommen Grundwissen zur Arbeit mit Bienen, deren Bedürfnisse und notwendige Arbeiten über das Jahr.
            </p>
            <p>
              Mit allen diesen Informationen sind Sie gut gewappnet, um selbst mit der Bienenhaltung durchzustarten und mit einem faszinierenden Hobby zu beginnen.
            </p>
            <p>
              Wenn Sie Interesse am Anfängerkurs haben, melden Sie sich bei oder einfach über: {' '}
              <a className='underline hover:text-honey-950 dark:hover:text-white' href="mailto:kursanmeldung@bienenzuchtverein-massenhausen.de">kursanmeldung@bienenzuchtverein-massenhausen.de</a>.
            </p>
          </>
        }
        photo={
          <Image
            src="/biene.jpeg"
            alt="Probeimkern im Bienenzuchtverein Massenhausen"
            width={1800}
            height={945}
            className="w-full h-auto"
          />
        }
      />

      <CallToActionSimple
        id="call-to-action"
        headline="Interesse am Probeimkern?"
        subheadline={
          <>
            <p>
              Als Probeimker erhalten Sie gegen eine Materialpauschale ein Bienenvolk zur eigenen
              Betreuung. Dabei hilft Ihnen Ihr Imkerpate, ein erfahrener Imker, den Sie über die
              Bienensaison an Ihre Seite gestellt bekommen.
            </p>
            <p>
              Nach der Saison können Sie sich entscheiden, ob Sie Spaß an der Bienenhaltung und
              Imkerei haben und weitermachen möchten.
            </p>
            <p className="font-medium">
              Also: schnuppern Sie rein und lassen Sie sich von den Bienen und ihrem Honig verzaubern!
            </p>
          </>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="mailto:kursanmeldung@bienenzuchtverein-massenhausen.de" size="lg">
              Jetzt registrieren
            </ButtonLink>
          </div>
        }
      />
    </>
  )
}
