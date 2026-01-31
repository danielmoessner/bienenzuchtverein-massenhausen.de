import Image from 'next/image'

import { ButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import {
  FooterLink,
  FooterWithLinksAndSocialIcons,
} from '@/components/sections/footer-with-links-and-social-icons'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
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
                <NavbarLink href="/termine" className="sm:hidden">
                  Termine & Kurse
                </NavbarLink>
                <NavbarLink href="/downloads" className="sm:hidden">
                  Downloads
                </NavbarLink>
                <NavbarLink href="/kontakt" className="sm:hidden">
                  Kontakt
                </NavbarLink>
              </>
            }
            logo={
              <NavbarLogo href="/">
                <Image src="/wappen.png" alt="Bienenzuchtverein Massenhausen" width={50} height={50} />
              </NavbarLogo>
            }
            actions={
              <>
                <NavbarLink href="/termine" className="max-sm:hidden lg:max-xl:hidden">
                  Termine & Kurse
                </NavbarLink>
                <NavbarLink href="/downloads" className="max-sm:hidden lg:max-xl:hidden">
                  Downloads
                </NavbarLink>
                <NavbarLink href="/kontakt" className="max-sm:hidden">
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
                <FooterLink href="/termine">Termine & Kurse</FooterLink>
                <FooterLink href="/downloads">Downloads</FooterLink>
                <FooterLink href="/kontakt">Kontakt</FooterLink>
                <FooterLink href="/zum-honig">Zum Honig</FooterLink>
                <FooterLink href="/impressum">Impressum</FooterLink>
                <FooterLink href="/datenschutz">Datenschutz</FooterLink>
              </>
            }
            fineprint="Bienenzuchtverein Massenhausen e.V. – Förderung der Imkerei und des Naturschutzes seit 1905."
          />
        </>
      </body>
    </html>
  )
}
