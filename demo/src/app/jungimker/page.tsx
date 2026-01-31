import Image from 'next/image'
import { ButtonLink } from '@/components/elements/button'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'

export default function Page() {
  return (
    <>
      {/* Hero - Becoming a Beekeeper */}
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="Imker werden"
        subheadline={
          <>
            <p>
              Dem Bienenzuchtverein Massenhausen ist es ein Anliegen, dass die Bienenhaltung
              von gut ausgebildeten Imkern mit umfassenden Kenntnissen durchgeführt wird.
              Für Interessierte bieten wir einen Anfängerkurs für Neu- und Jungimker an.
            </p>
            <p>
              Begleitend zum Anfängerkurs steht auch eine begrenzte Anzahl an Plätzen für
              das Imkern auf Probe zur Verfügung.
            </p>
            <p>
              Sie wollen in die Imkerei einsteigen oder Sie sind sich noch nicht sicher, ob
              die Bienenhaltung für Sie das richtige Hobby ist?
            </p>
            <p>
              Werden Sie Imker auf Probe und stellen Sie fest, ob Sie Spaß an der Imkerei haben.
              Das Probeimkern in unserem Verein ermöglicht Ihnen, das Hobby Imkerei kennen zu lernen.
              Wenn Sie glauben, dass Sie Spaß an aktivem Naturschutz durch Bienen und dem Umgang mit
              Bienen haben oder gerne ihren eigenen Honig ernten möchten, dann werden Sie Probeimker
              im Bienenzuchtverein Massenhausen.
            </p>
          </>
        }
        photo={
          <Image
            src="/probeimkern.png"
            alt="Probeimkern im Bienenzuchtverein Massenhausen"
            width={1800}
            height={945}
            className="w-full h-auto"
          />
        }
      />

      {/* CTA - Registration */}
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
