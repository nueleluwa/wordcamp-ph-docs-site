import Link from 'next/link'

const CARDS = [
  {
    tag: 'Organiser',
    title: "I'm an organiser",
    body: 'A step-by-step path through your team, the plan, and your first weeks.',
    href: '/00-start-here/organiser-getting-started'
  },
  {
    tag: 'Volunteer',
    title: "I'm a volunteer",
    body: 'What you signed up for, how shifts work, and what to do if something changes.',
    href: '/00-start-here/volunteer-getting-started'
  },
  {
    tag: 'Help',
    title: 'I need help or a template',
    body: 'Forms, tracking sheets, and report templates, plus a link to common-problem answers.',
    href: '/templates'
  }
] as const

export function RoleCards() {
  return (
    <div className="wc-role-grid">
      {CARDS.map(card => (
        <Link key={card.href} href={card.href} className="wc-role-card">
          <span className="wc-role-tag">{card.tag}</span>
          <span className="wc-role-title">{card.title}</span>
          <span className="wc-role-body">{card.body}</span>
          <span className="wc-role-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  )
}
