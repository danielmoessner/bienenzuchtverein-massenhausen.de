import { Instrument_Serif, Inter } from 'next/font/google'
import Image from 'next/image'

import { ButtonLink } from '@/components/elements/button'
import { CookieBanner } from '@/components/elements/cookie-banner'
import { Main } from '@/components/elements/main'
import { FooterLink, FooterWithLinksAndSocialIcons } from '@/components/sections/footer-with-links-and-social-icons'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Bienenzuchtverein Massenhausen',
  description:
    'Förderung der Imkerei und des Naturschutzes seit 1905. Mit über 120 Mitgliedern bieten wir eine lebendige Gemeinschaft für Imker jeden Erfahrungsstands.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="BZV" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <>
          <NavbarWithLinksActionsAndCenteredLogo
            id="navbar"
            links={
              <>
                <NavbarLink href="/">Startseite</NavbarLink>
                <NavbarLink href="/verein">Verein & Vorstand</NavbarLink>
                <NavbarLink href="/jungimker">Jungimker</NavbarLink>
                <NavbarLink href="/leihgeraete" className="lg:hidden">
                  Leihgeräte
                </NavbarLink>
                <NavbarLink href="/termine" className="lg:hidden">
                  Termine
                </NavbarLink>
                <NavbarLink href="/downloads" className="lg:hidden">
                  Downloads
                </NavbarLink>
                <NavbarLink href="/kontakt" className="lg:hidden">
                  Kontakt
                </NavbarLink>
              </>
            }
            logo={
              <NavbarLogo href="/">
                <Image src="/wappen.png" alt="Bienenzuchtverein Massenhausen" width={50} height={61.75} />
              </NavbarLogo>
            }
            actions={
              <>
                <NavbarLink href="/leihgeraete" className="max-lg:hidden">
                  Leihgeräte
                </NavbarLink>
                <NavbarLink href="/termine" className="max-lg:hidden">
                  Termine
                </NavbarLink>
                <NavbarLink href="/downloads" className="max-lg:hidden">
                  Downloads
                </NavbarLink>
                <NavbarLink href="/kontakt" className="max-lg:hidden">
                  Kontakt
                </NavbarLink>
                <ButtonLink href="/zum-honig">Zum Honig</ButtonLink>
              </>
            }
          />

          <Main>{children}</Main>

          <FooterWithLinksAndSocialIcons
            id="footer"
            links={
              <>
                <FooterLink href="/">Startseite</FooterLink>
                <FooterLink href="/verein">Verein & Vorstand</FooterLink>
                <FooterLink href="/jungimker">Jungimker</FooterLink>
                <FooterLink href="/leihgeraete">Leihgeräte</FooterLink>
                <FooterLink href="/termine">Termine</FooterLink>
                <FooterLink href="/downloads">Downloads</FooterLink>
                <FooterLink href="/kontakt">Kontakt</FooterLink>
                <FooterLink href="/zum-honig">Zum Honig</FooterLink>
                <FooterLink href="/impressum">Impressum</FooterLink>
                <FooterLink href="/datenschutz">Datenschutz</FooterLink>
              </>
            }
            fineprint="Bienenzuchtverein Massenhausen e.V. – Förderung der Imkerei und des Naturschutzes seit 1905."
          />

          <CookieBanner />
        </>
      </body>
    </html>
  )
}
