import NextLink from 'next/link'

import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Link({
  href,
  className,
  ...props
}: {
  href: string
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <NextLink
      href={href}
      className={clsx('underline hover:text-honey-950 dark:hover:text-white', className)}
      {...props}
    />
  )
}
