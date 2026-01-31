import Image from 'next/image'
import {
  Feature,
  FeaturesStackedAlternatingWithDemos,
} from '@/components/sections/features-stacked-alternating-with-demos'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'

export default function Page() {
  return (
    <>
      {/* Hero - About Honey */}
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="Regionaler Honig von unseren Imkern"
        subheadline={
          <p>
            Entdecken Sie die Vielfalt und Qualität unseres regionalen Honigs. Unsere
            Vereinsmitglieder produzieren mit viel Liebe und Erfahrung hochwertigen Honig
            aus der Region Massenhausen. Jeder Honig ist ein Unikat, geprägt von den
            Blüten und der Natur unserer Heimat.
          </p>
        }
        photo={
          <Image
            src="/bees.jpg"
            alt="Bienen bei der Arbeit"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        }
      />

      {/* Beekeepers - Honey Offerings */}
      <FeaturesStackedAlternatingWithDemos
        id="imker"
        headline="Unsere Imker und ihre Honigsorten"
        subheadline={
          <p>
            Jeder unserer Imker bringt seine eigene Expertise und Leidenschaft in die
            Honigproduktion ein. Kontaktieren Sie die Imker direkt für frischen,
            regionalen Honig.
          </p>
        }
        features={
          <>
            <Feature
              headline="Cremiger Blütenhonig"
              subheadline={
                <p>
                  Milder, cremiger Honig aus verschiedenen Blüten der Region. Perfekt
                  zum Frühstück oder als natürliche Süße.
                </p>
              }
              cta={
                <div className="flex flex-col gap-2 text-sm">
                  <p className="text-honey-950 dark:text-white">
                    <strong>Kontakt:</strong> Max Mustermann
                  </p>
                  <p className="text-honey-700 dark:text-honey-400">
                    Email: max.mustermann@example.com
                  </p>
                  <p className="text-honey-700 dark:text-honey-400">
                    Adresse: Musterstraße 1, 85368 Massenhausen
                  </p>
                </div>
              }
              demo={
                <div className="aspect-[4/3] rounded-lg bg-honey-300/20 dark:bg-honey-700/20" />
              }
            />

            <Feature
              headline="Waldhonig"
              subheadline={
                <p>
                  Kräftiger, aromatischer Waldhonig mit würzigem Geschmack. Reich an
                  Mineralstoffen und Spurenelementen.
                </p>
              }
              cta={
                <div className="flex flex-col gap-2 text-sm">
                  <p className="text-honey-950 dark:text-white">
                    <strong>Kontakt:</strong> Maria Müller
                  </p>
                  <p className="text-honey-700 dark:text-honey-400">
                    Email: maria.mueller@example.com
                  </p>
                  <p className="text-honey-700 dark:text-honey-400">
                    Tel: 08165 / 123456
                  </p>
                </div>
              }
              demo={
                <div className="aspect-[4/3] rounded-lg bg-honey-300/20 dark:bg-honey-700/20" />
              }
            />

            <Feature
              headline="Sommertracht"
              subheadline={
                <p>
                  Goldener Sommerhonig mit blumigem Aroma. Gesammelt aus der
                  Sommerblüte für einen besonders feinen Geschmack.
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
                      href="https://imkerei-schmidt.de"
                      className="underline hover:text-honey-950 dark:hover:text-white"
                    >
                      imkerei-schmidt.de
                    </a>
                  </p>
                </div>
              }
              demo={
                <div className="aspect-[4/3] rounded-lg bg-honey-300/20 dark:bg-honey-700/20" />
              }
            />
          </>
        }
      />

      {/* Testimonial - Customer Review */}
      <TestimonialTwoColumnWithLargePhoto
        id="testimonial"
        quote={
          <p>
            Der Honig von unseren lokalen Imkern ist einfach unvergleichlich. Die
            Qualität und der Geschmack sind hervorragend. Man schmeckt die Liebe
            und Sorgfalt, die in jedem Glas steckt.
          </p>
        }
        img={
          <Image
            src="/probeimkern.png"
            alt="Zufriedene Kunden"
            width={1400}
            height={1000}
            className="w-full h-auto"
          />
        }
        name="Familie Weber"
        byline="Langjährige Honig-Liebhaber"
      />
    </>
  )
}
