import type { ReactNode } from 'react'

export function PageInfo({
  purpose,
  owner,
  time,
  prerequisites
}: {
  purpose: ReactNode
  owner: ReactNode
  time?: ReactNode
  prerequisites?: ReactNode
}) {
  return (
    <div className="wc-pageinfo">
      <div className="wc-pageinfo-row wc-pageinfo-purpose">
        <span className="wc-pageinfo-label">Purpose</span>
        <span className="wc-pageinfo-value">{purpose}</span>
      </div>
      <div className="wc-pageinfo-grid">
        <div className="wc-pageinfo-row">
          <span className="wc-pageinfo-label">Owner</span>
          <span className="wc-pageinfo-value">{owner}</span>
        </div>
        {time && (
          <div className="wc-pageinfo-row">
            <span className="wc-pageinfo-label">Est. time</span>
            <span className="wc-pageinfo-value">{time}</span>
          </div>
        )}
        {prerequisites && (
          <div className="wc-pageinfo-row">
            <span className="wc-pageinfo-label">Before you start</span>
            <span className="wc-pageinfo-value">{prerequisites}</span>
          </div>
        )}
      </div>
    </div>
  )
}
