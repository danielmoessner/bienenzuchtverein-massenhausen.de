'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Text } from '@/components/elements/text'

const cookieText =
  'Wir verwenden ausschließlich technisch notwendige Cookies, damit diese Website funktioniert. Es findet kein Tracking statt und wir erstellen keine Nutzerprofile.'

const storageKey = 'cookie_banner_accepted'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState<boolean | null>(null)

  useEffect(() => {
    let nextVisible = true
    try {
      const accepted = localStorage.getItem(storageKey) === '1'
      nextVisible = !accepted
    } catch {
      nextVisible = true
    }

    const frame = requestAnimationFrame(() => setIsVisible(nextVisible))
    return () => cancelAnimationFrame(frame)
  }, [])

  if (isVisible !== true) return null

  return (
    <div
      role="region"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-honey-950/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-honey-950/80"
    >
      <Container className="py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Text className="text-sm/6">{cookieText}</Text>
          <Button
            size="md"
            className="w-full sm:w-auto"
            onClick={() => {
              try {
                localStorage.setItem(storageKey, '1')
              } catch {
                // ignore
              }
              setIsVisible(false)
            }}
          >
            Akzeptieren
          </Button>
        </div>
      </Container>
    </div>
  )
}
