'use client'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import {
  Feature,
  FeaturesStackedAlternatingWithDemos,
} from '@/components/sections/features-stacked-alternating-with-demos'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type ImkereiContent = {
  name: string
  text: string
  website: string
  email: string
  telefon: string
  adresse: string
  imageSrc: string
}

const imkereiContent: ImkereiContent[] = [
  {
    name: 'Imkerei Frenzel',
    text: 'Wir betreiben unsere Imkerei mit der Carnica Biene. Dabei ist unser Ziel, im Einklang mit der Natur hochwertige Bienenprodukte zu gewinnen. Unsere Bienen sind dabei nicht nur Mittel zum Zweck sondern der wichtigste Teil unserer Imkerei.',
    website: 'https://www.imkerei-frenzel.de',
    email: 'info@imkerei-frenzel.de',
    telefon: '08165 909632',
    adresse: 'Mohnweg 18, 85375 Neufahrn',
    imageSrc: '/honig/frenzel.jpg',
  },
  {
    name: 'Bio-Imkerei Willing',
    text: 'In unserer seit 2013 bestehenden Imkerei betreuen und pflegen wir derzeit 85 Bienenvölker hier bei uns am Standort in Hallbergmoos und im Raum Freising. Wir verarbeiten ausschließlich aus den eigenen Bienenvölkern Honig, Pollen, Propolis und das Bienenwachs. Seit 2022 sind wir eine Bioland-Zertifizierte Imkerei.',
    website: 'https://www.imkerei-willing.de',
    email: 'info@imkerei-willing.de',
    telefon: '0811 89949954',
    adresse: 'Ludwigstraße 8, 85399 Hallbergmoos',
    imageSrc: '/honig/willing.webp',
  },
  {
    name: 'Imkerei Eckert',
    text: 'Wir betreiben unsere kleine Hobby Imkerei in Pulling und ernten dort besten Honig aus Wald und der Isarau. Den Honig bekommt ihr direkt bei mir und auch in unserem Honig Kasterl direkt am Gartenzaun.',
    website: 'https://imkerei-eckert.org',
    email: 'imkerei-eckert@gmx.de',
    telefon: '0160 5203653',
    adresse: 'Dürnecker Strasse 8, 85354 Freising-Pulling',
    imageSrc: '/honig/eckert.jpeg',
  },
]

export default function Page() {
  const [shuffledImkereien, setShuffledImkereien] = useState<ImkereiContent[]>(imkereiContent)

  useEffect(() => {
    const randomIndex = (maxExclusive: number) => {
      const randomBuffer = new Uint32Array(1)
      crypto.getRandomValues(randomBuffer)
      return randomBuffer[0] % maxExclusive
    }

    const shuffled = [...imkereiContent]
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = randomIndex(i + 1)
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    const timeoutId = window.setTimeout(() => {
      setShuffledImkereien(shuffled)
    }, 0)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="Produkte von unseren Imkern"
        subheadline={
          <>
            <p>
              Auf dieser Seite stellen unsere Mitglieder ihre imkerlichen Erzeugnisse vor. Die angebotenen Produkte
              stammen aus regionaler, verantwortungsvoller Imkerei und stehen für hohe Qualität, Sorgfalt und
              Fachwissen. Vom Honig über Produkte aus Neben­erzeugnissen bis hin zu Königinnen oder Bienenvölkern
              spiegeln sie die Vielfalt unserer Vereinsarbeit wider.
            </p>
            <p>
              Die jeweiligen Angebote werden direkt von den Imkern selbst bereitgestellt. Je nach Anbieter finden Sie
              hier eine Verlinkung zur eigenen Homepage oder die Möglichkeit zur direkten Kontaktaufnahme per Telefon
              oder E-Mail.
            </p>
          </>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#imker" size="lg">
              Zum Honig
            </ButtonLink>

            <PlainButtonLink href="#imker" size="lg">
              Zu den Produkten <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        photo={
          <Image src="/bees.jpg" alt="Bienen bei der Arbeit" width={1920} height={1080} className="h-auto w-full" />
        }
      />

      <FeaturesStackedAlternatingWithDemos
        id="imker"
        headline="Unsere Imker und ihre Produkte"
        subheadline={
          <p>
            Jeder unserer Imker bringt seine eigene Expertise und Leidenschaft in die Honigproduktion ein. Kontaktieren
            Sie die Imker direkt für frischen, regionalen Honig.
          </p>
        }
        features={
          <>
            {shuffledImkereien.map((imkerei) => (
              <Feature
                key={imkerei.name}
                headline={imkerei.name}
                subheadline={<p>{imkerei.text}</p>}
                cta={
                  <div className="flex flex-col gap-2 text-sm">
                    <p className="text-honey-950 dark:text-white">
                      <strong>Kontakt</strong>
                    </p>
                    <p className="text-honey-700 dark:text-honey-400">
                      Website:{' '}
                      <a
                        href={imkerei.website}
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-honey-950 dark:hover:text-white"
                      >
                        {imkerei.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </a>
                    </p>
                    <p className="text-honey-700 dark:text-honey-400">
                      Email:{' '}
                      <a
                        href={`mailto:${imkerei.email}`}
                        className="underline hover:text-honey-950 dark:hover:text-white"
                      >
                        {imkerei.email}
                      </a>
                    </p>
                    <p className="text-honey-700 dark:text-honey-400">
                      Telefon:{' '}
                      <a
                        href={`tel:${imkerei.telefon.replace(/\s+/g, '')}`}
                        className="underline hover:text-honey-950 dark:hover:text-white"
                      >
                        {imkerei.telefon}
                      </a>
                    </p>
                    <p className="text-honey-700 dark:text-honey-400">Adresse: {imkerei.adresse}</p>
                  </div>
                }
                demo={
                  <Image
                    src={imkerei.imageSrc}
                    alt={imkerei.name}
                    width={900}
                    height={900}
                    className="aspect-square h-full rounded-lg bg-honey-300/20 object-cover dark:bg-honey-700/20"
                  />
                }
              />
            ))}
          </>
        }
      />

      <TestimonialTwoColumnWithLargePhoto
        id="testimonial"
        quote={
          <p>
            Der Honig von unseren lokalen Imkern ist einfach unvergleichlich. Die Qualität und der Geschmack sind
            hervorragend. Man schmeckt die Liebe und Sorgfalt, die in jedem Glas steckt.
          </p>
        }
        img={
          <Image src="/probeimkern.png" alt="Zufriedene Kunden" width={1400} height={1000} className="h-auto w-full" />
        }
        name=""
        byline=""
      />
    </>
  )
}
