import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const HIDDEN_PREFIXES = ['/templates', '/00-start-here/organiser-getting-started', '/00-start-here/volunteer-getting-started']
const CONTACT_EMAIL = 'portharcourt@wordcamp.org'

type Answer = 'yes' | 'no' | null

export function PageFeedback() {
  const router = useRouter()
  const [answer, setAnswer] = useState<Answer>(null)
  const [note, setNote] = useState('')

  const storageKey = `wcphc:feedback:${router.pathname}`

  useEffect(() => {
    setAnswer(null)
    setNote('')
    try {
      const saved = window.sessionStorage.getItem(storageKey) as Answer
      if (saved === 'yes' || saved === 'no') setAnswer(saved)
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  if (router.pathname === '/') return null
  if (HIDDEN_PREFIXES.some(p => router.pathname.startsWith(p))) return null

  const record = (value: Exclude<Answer, null>) => {
    setAnswer(value)
    try {
      window.sessionStorage.setItem(storageKey, value)
    } catch {
      // ignore
    }
  }

  const mailtoHref = () => {
    const url = typeof window !== 'undefined' ? window.location.href : router.pathname
    const subject = encodeURIComponent(`Docs feedback: ${router.pathname}`)
    const body = encodeURIComponent(`Page: ${url}\n\nWhat's wrong or out of date:\n${note}\n`)
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <div className="wc-feedback" aria-live="polite">
      {answer === null && (
        <>
          <span className="wc-feedback-prompt">Was this page helpful?</span>
          <div className="wc-feedback-actions">
            <button type="button" className="wc-feedback-btn" onClick={() => record('yes')}>
              Yes
            </button>
            <button type="button" className="wc-feedback-btn" onClick={() => record('no')}>
              No
            </button>
          </div>
        </>
      )}
      {answer === 'yes' && <span className="wc-feedback-thanks">Thanks, noted.</span>}
      {answer === 'no' && (
        <div className="wc-feedback-followup">
          <label htmlFor="wc-feedback-note" className="wc-feedback-label">
            What's wrong or out of date? (optional)
          </label>
          <textarea
            id="wc-feedback-note"
            className="wc-feedback-note"
            rows={2}
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="e.g. this contact is no longer correct"
          />
          <a className="wc-feedback-send" href={mailtoHref()}>
            Send to {CONTACT_EMAIL}
          </a>
        </div>
      )}
    </div>
  )
}
