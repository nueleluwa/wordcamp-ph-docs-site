import Link from 'next/link'
import type { ReactNode } from 'react'

export function PathStep({
  n,
  total,
  title,
  href,
  children
}: {
  n: number
  total: number
  title: string
  href: string
  children: ReactNode
}) {
  return (
    <Link href={href} className="wc-step">
      <span className="wc-step-n">
        {n}
        <span className="wc-step-of">/{total}</span>
      </span>
      <span className="wc-step-main">
        <span className="wc-step-title">{title}</span>
        <span className="wc-step-desc">{children}</span>
      </span>
      <span className="wc-step-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  )
}
