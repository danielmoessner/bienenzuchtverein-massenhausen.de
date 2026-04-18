import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import {
  Feature,
  FeaturesStackedAlternatingWithDemos,
} from '@/components/sections/features-stacked-alternating-with-demos'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'
import Image from 'next/image'

export default function Page() {
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
            <Feature
              headline="Imkerei Frenzel"
              subheadline={
                <p>
                  Wir betreiben unsere Imkerei mit der Carnica Biene. Dabei ist unser Ziel, im Einklang mit der Natur
                  hochwertige Bienenprodukte zu gewinnen. Unsere Bienen sind dabei nicht nur Mittel zum Zweck sondern
                  der wichtigste Teil unserer Imkerei.
                </p>
              }
              cta={
                <div className="flex flex-col gap-2 text-sm">
                  <p className="text-honey-950 dark:text-white">
                    <strong>Kontakt</strong>
                  </p>
                  <p className="text-honey-700 dark:text-honey-400">
                    Website:{' '}
                    <a
                      href="https://www.imkerei-frenzel.de/"
                      target="_blank"
                      className="underline hover:text-honey-950 dark:hover:text-white"
                    >
                      imkerei-frenzel.de
                    </a>
                  </p>
                  <p className="text-honey-700 dark:text-honey-400">
                    Email:{' '}
                    <a
                      href="mailto:info@imkerei-frenzel.de"
                      className="underline hover:text-honey-950 dark:hover:text-white"
                    >
                      info@imkerei-frenzel.de
                    </a>
                  </p>
                  <p className="text-honey-700 dark:text-honey-400">
                    Telefon:{' '}
                    <a href="tel:08165909632" className="underline hover:text-honey-950 dark:hover:text-white">
                      08165 909632
                    </a>
                  </p>
                  <p className="text-honey-700 dark:text-honey-400">Adresse: Mohnweg 18, 85375 Neufahrn</p>
                </div>
              }
              demo={
                <Image
                  src="/honig/frenzel.jpg"
                  alt="Imkerei Frenzel"
                  width={900}
                  height={900}
                  className="h-full rounded-lg bg-honey-300/20 object-cover dark:bg-honey-700/20"
                />
              }
            />

            {/* <Feature
              headline="Waldhonig"
              subheadline={
                <p>
                  Kräftiger, aromatischer Waldhonig mit würzigem Geschmack. Reich an Mineralstoffen und Spurenelementen.
                </p>
              }
              cta={
                <div className="flex flex-col gap-2 text-sm">
                  <p className="text-honey-950 dark:text-white">
                    <strong>Kontakt:</strong> Maria Müller
                  </p>
                  <p className="text-honey-700 dark:text-honey-400">Email: maria.mueller@example.com</p>
                  <p className="text-honey-700 dark:text-honey-400">Tel: 08165 / 123456</p>
                </div>
              }
              demo={<div className="aspect-4/3 rounded-lg bg-honey-300/20 dark:bg-honey-700/20" />}
            /> */}

            {/* <Feature
              headline="Sommertracht"
              subheadline={
                <p>
                  Goldener Sommerhonig mit blumigem Aroma. Gesammelt aus der Sommerblüte für einen besonders feinen
                  Geschmack.
                </p>
              }
              cta={
                <div className="flex flex-col gap-2 text-sm">
                  <p className="text-honey-950 dark:text-white">
                    <strong>Kontakt:</strong> Hans Schmidt
                  </p>
                  <p className="text-honey-700 dark:text-honey-400">
                    Website:{' '}
                    <a
                      href="https://imkerei-beispiel.de"
                      className="underline hover:text-honey-950 dark:hover:text-white"
                    >
                      imkerei-beispiel.de
                    </a>
                  </p>
                </div>
              }
              demo={<div className="aspect-4/3 rounded-lg bg-honey-300/20 dark:bg-honey-700/20" />}
            /> */}
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
