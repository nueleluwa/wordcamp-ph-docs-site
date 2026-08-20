import Link from 'next/link'

const CARDS = [
  {
    tag: 'Organiser',
    title: "I'm organising WCPHC",
    body: 'A step-by-step path through team structure, planning, and your first weeks as an organiser.',
    href: '/00-start-here/organiser-getting-started'
  },
  {
    tag: 'Volunteer',
    title: "I'm volunteering",
    body: 'What you signed up for, how shifts work, and what to do if something changes.',
    href: '/00-start-here/volunteer-getting-started'
  },
  {
    tag: 'Reference',
    title: 'I need a template or checklist',
    body: 'Application forms, tracking sheets, and report templates, ready to copy.',
    href: '/templates'
  },
  {
    tag: 'Help',
    title: "Something's broken",
    body: "Fast answers to problems that come up repeatedly, and who to escalate to.",
    href: '/troubleshooting/faq-and-common-problems'
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
