import Image from 'next/image'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'
import { TeamFourColumnGrid, TeamMember } from '@/components/sections/team-four-column-grid'

export default function Page() {
  return (
    <>
      {/* Hero - Association Information */}
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="Über den Bienenzuchtverein Massenhausen"
        subheadline={
          <>
            <p>
              Unser Verein hat in den letzten Jahren starken Zuwachs an Jungimkern
              verzeichnen können. Dadurch bieten wir eine nette Gemeinschaft, in der
              auch viel Kommunikation und Austausch stattfindet.
            </p>
            <p>
              Der Bienenzuchtverein Massenhausen e.V. hat eine lange Geschichte. Er wurde
              bereits im Frühjahr 1905 als Bienenzucht- und Gartenbauverein Massenhausen -
              Giggenhausen gegründet. Damals lag die Mitgliederzahl bei 45.
            </p>
            <p>
              Aktuell liegt im Jahr 2024 die Mitgliederzahl bei ca. 120 Mitgliedern.
            </p>
          </>
        }
        photo={
          <Image
            src="/probeimkern.png"
            alt="Imkerei Bienenzuchtverein Massenhausen"
            width={1800}
            height={945}
            className="w-full h-auto"
          />
        }
      />

      {/* Leadership Team */}
      <TeamFourColumnGrid
        id="team"
        headline="Unser Vorstand"
        subheadline={
          <p>
            Bei Fragen rund ums Imkern und unseren Verein sind wir gerne für Sie da.
          </p>
        }
      >
        <TeamMember
          img={
            <img
              src="/placeholder-avatar.jpg"
              alt=""
              width={800}
              height={1000}
            />
          }
          name="Dr. Elke Frenzel"
          byline="1. Vorstand"
        />
        <TeamMember
          img={
            <img
              src="/placeholder-avatar.jpg"
              alt=""
              width={800}
              height={1000}
            />
          }
          name="Markus Besl"
          byline="2. Vorstand"
        />
        <TeamMember
          img={
            <img
              src="/placeholder-avatar.jpg"
              alt=""
              width={800}
              height={1000}
            />
          }
          name="Helmut Eckert"
          byline="Kassierer"
        />
        <TeamMember
          img={
            <img
              src="/placeholder-avatar.jpg"
              alt=""
              width={800}
              height={1000}
            />
          }
          name="Alexander Frenzel"
          byline="Schriftführer"
        />
      </TeamFourColumnGrid>
    </>
  )
}
