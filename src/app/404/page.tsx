import { Link } from '@/components/elements/link'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'

export default function Page() {
  return (
    <>
      <HeroSimpleCentered
        headline="Seite nicht gefunden"
        subheadline={<p>Entschuldigung, die von Ihnen gesuchte Seite wurde nicht gefunden.</p>}
        cta={
          <Link href="/" className="text-honey-700">
            Zurück zur Startseite <ArrowNarrowRightIcon />
          </Link>
        }
      />
    </>
  )
}
