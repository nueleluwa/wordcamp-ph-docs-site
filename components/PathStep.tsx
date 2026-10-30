import Link from 'next/link'
import type { ReactNode } from 'react'

export function PathStep({
  n,
  total,
  title,
  href,
  label,
  later,
  children
}: {
  n: number
  total: number
  title: string
  href: string
  /** Short tag above the title, e.g. "Start here", "Next", "Read when relevant" */
  label?: string
  /** De-emphasise steps that aren't needed straight away */
  later?: boolean
  children: ReactNode
}) {
  return (
    <Link href={href} className={later ? 'wc-step wc-step-later' : 'wc-step'}>
      <span className="wc-step-n">
        {n}
        <span className="wc-step-of">/{total}</span>
      </span>
      <span className="wc-step-main">
        {label && <span className="wc-step-label">{label}</span>}
        <span className="wc-step-title">{title}</span>
        <span className="wc-step-desc">{children}</span>
      </span>
      <span className="wc-step-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  )
}
