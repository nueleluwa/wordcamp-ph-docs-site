import React, { Children, cloneElement, isValidElement, useEffect, useState, type ReactNode } from 'react'

function countCheckboxes(node: ReactNode): number {
  if (Array.isArray(node)) return node.reduce((sum: number, n) => sum + countCheckboxes(n), 0)
  if (!isValidElement(node)) return 0
  const props = node.props as { type?: string; children?: ReactNode }
  if (node.type === 'input' && props.type === 'checkbox') return 1
  if (props.children) return countCheckboxes(props.children)
  return 0
}

function enhance(
  node: ReactNode,
  state: { index: number; checked: boolean[]; toggle: (i: number) => void }
): ReactNode {
  if (Array.isArray(node)) {
    return Children.map(node, child => enhance(child, state))
  }
  if (!isValidElement(node)) return node

  const props = node.props as { type?: string; children?: ReactNode; className?: string }

  if (node.type === 'input' && props.type === 'checkbox') {
    const i = state.index++
    return cloneElement(node as React.ReactElement<any>, {
      disabled: false,
      checked: state.checked[i] ?? false,
      onChange: () => state.toggle(i),
      className: [props.className, 'wc-checkbox'].filter(Boolean).join(' ')
    })
  }
  if (props.children) {
    return cloneElement(node as React.ReactElement<any>, { ...props }, enhance(props.children, state))
  }
  return node
}

function useLocalChecklist(storageKey: string, total: number) {
  const [checked, setChecked] = useState<boolean[]>(() => Array(total).fill(false))
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey)
      const saved: boolean[] = raw ? JSON.parse(raw) : []
      setChecked(Array.from({ length: total }, (_, i) => Boolean(saved[i])))
    } catch {
      // ignore corrupt/unavailable storage
    }
    setReady(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, total])

  const persist = (next: boolean[]) => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next))
    } catch {
      // storage unavailable (private browsing, etc.) — state still works in-session
    }
  }

  const toggle = (i: number) =>
    setChecked(prev => {
      const next = [...prev]
      next[i] = !next[i]
      persist(next)
      return next
    })

  const reset = () =>
    setChecked(prev => {
      const next = Array(prev.length).fill(false)
      persist(next)
      return next
    })

  return { checked, toggle, reset, ready }
}

export function Checklist({ id, children }: { id: string; children: ReactNode }) {
  const total = countCheckboxes(children)
  const { checked, toggle, reset, ready } = useLocalChecklist(`wcphc:checklist:${id}`, total)
  const done = checked.filter(Boolean).length
  const pct = total ? Math.round((done / total) * 100) : 0

  return (
    <div className="wc-checklist">
      <div className="wc-checklist-bar" role="group" aria-label="Checklist progress">
        <div className="wc-checklist-track">
          <div className="wc-checklist-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="wc-checklist-count">
          {ready ? `${done} / ${total} done` : `0 / ${total} done`}
        </span>
        {done > 0 && (
          <button type="button" className="wc-checklist-reset" onClick={reset}>
            Reset
          </button>
        )}
      </div>
      <div className="wc-checklist-body">{enhance(children, { index: 0, checked, toggle })}</div>
      <p className="wc-checklist-note">
        Progress is saved to this browser only — it's a personal reading aid, not the team's source of truth.
      </p>
    </div>
  )
}
