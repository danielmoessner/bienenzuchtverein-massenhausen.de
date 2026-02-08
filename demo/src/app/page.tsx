import Image from 'next/image'
import Link from 'next/link'
import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { ChevronIcon } from '@/components/icons/chevron-icon'

export default function Page() {
  return (
    <>
      <HeroLeftAlignedWithDemo
        id="hero"
        eyebrow={
          <AnnouncementBadge href="/zum-honig" text="Frischer Honig von unseren Imkern verfügbar" cta="Mehr erfahren" />
        }
        headline="Willkommen beim Bienenzuchtverein Massenhausen"
        subheadline={
          <p>
            Seit 1905 widmen wir uns der Förderung der Imkerei und des Naturschutzes. Mit über 120 Mitgliedern bieten
            wir eine lebendige Gemeinschaft für Imker jeden Erfahrungsstands – von Anfängerkursen bis zu Fachvorträgen.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/jungimker" size="lg">
              Jungimker werden
            </ButtonLink>
            <PlainButtonLink href="/verein" size="lg">
              Mehr über uns <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        demo={
          <Image
            src="/bees.jpg"
            alt="Honigbienen"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg"
            priority
          />
        }
        footer={null}
      />
      
      <FeaturesTwoColumnWithDemos
        id="termine-kurse"
        features={
          <>
            <Feature
              demo={<div className="aspect-[16/9] bg-honey-300/20 dark:bg-honey-700/20" />}
              headline={
                <Link href="/termine" className="hover:underline">
                  Nächsten Termine
                </Link>
              }
              subheadline={
                <ul>
                  <li>6. März 2026, 19:00 Uhr, JHV im Hepting Massenhausen</li>
                  <li>Neulingskurs Beginn 27. März 2026 (insgesamt 7 Termine)</li>
                </ul>
              }
              cta={<ButtonLink href="/termine">Zu allen Terminen</ButtonLink>}
            />

            <Feature
              demo={<div className="aspect-[16/9] bg-honey-300/20 dark:bg-honey-700/20" />}
              headline={
                <Link href="/leihgeraete" className="hover:underline">
                  Leihgeräte
                </Link>
              }
              subheadline={
                <p>
                  Leihgeräte für Imker. Entdecken Sie unsere Auswahl an hochwertigen Geräten, die Sie für Ihre Imkerei ausleihen können.
                </p>
              }
              cta={<ButtonLink href="/leihgeraete">Zu den Leihgeräten</ButtonLink>}
            />
          </>
        }
      />
      
      <StatsWithGraph
        id="jungimker"
        eyebrow="Nachwuchsförderung"
        headline="Imker werden"
        subheadline={
          <p>
            Dem Bienenzuchtverein Massenhausen ist es ein Anliegen, dass die Bienenhaltung von gut ausgebildeten Imkern
            mit umfassenden Kenntnissen durchgeführt wird. Werden Sie Imker auf Probe und stellen Sie fest, ob Sie Spaß
            an der Imkerei haben.{' '}
            <Link href="/jungimker" className="font-medium text-honey-950 hover:underline dark:text-white">
              Mehr erfahren →
            </Link>
          </p>
        }
      >
        <Stat stat="120+" text="Mitglieder in unserem lebendigen Verein" />
        <Stat stat="1905" text="Gegründet – über 100 Jahre Tradition" />
      </StatsWithGraph>
      
      <CallToActionSimple
        id="call-to-action"
        headline="Honig von unseren Mitgliedern"
        subheadline={
          <p>
            Viele unserer Vereinsmitglieder bieten ihren hochwertigen, regional produzierten Honig zum Verkauf an.
            Entdecken Sie die Vielfalt unserer Honigsorten aus der Region.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/zum-honig" size="lg">
              Zum Honig
            </ButtonLink>
            <PlainButtonLink href="#" size="lg">
              Mehr erfahren <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
