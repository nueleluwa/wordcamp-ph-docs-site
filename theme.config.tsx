import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { PageFeedback } from './components/PageFeedback'

const SITE_TITLE = 'WordCamp Port Harcourt: Team Documentation'
const SITE_DESCRIPTION = 'Operating documentation and playbook for WordCamp Port Harcourt'

const config: DocsThemeConfig = {
  logo: (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/wordcamp-logo.webp" alt="WordCamp Port Harcourt" height={32} style={{ height: 32, width: 'auto' }} />
  ),
  project: {
    link: 'https://github.com/nueleluwa/WordCamp-Port-Harcourt-Core',
  },
  docsRepositoryBase: 'https://github.com/nueleluwa/wordcamp-ph-docs-site/blob/main',
  footer: {
    text: 'WordCamp Port Harcourt: Building the WordPress Community in South-South Nigeria',
  },
  // WordPress blue (#3858e9 is hsl(228, 79%, 56%)), distinct from Nextra's
  // default blue. Nextra derives its light/dark shades from this hue/saturation.
  primaryHue: 228,
  primarySaturation: 79,
  // Auto prev/next crossed unrelated sections (e.g. Recruiting → Sponsorship)
  // with no real relationship — disabled in favor of the hand-written
  // "Related" links already present throughout the content.
  // Sections start collapsed so the sidebar shows a handful of groups,
  // with the detailed pages tucked underneath.
  sidebar: { defaultMenuCollapseLevel: 1 },
  navigation: false,
  // Replaces Nextra's default "– Nextra" suffix in the browser tab title.
  useNextSeoProps() {
    const { asPath } = useRouter()
    // The home page title already names the site, so don't repeat it.
    return { titleTemplate: asPath === '/' ? '%s' : '%s – WordCamp Port Harcourt' }
  },
  main({ children }) {
    return (
      <>
        {children}
        <PageFeedback />
      </>
    )
  },
  head: (
    <>
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta name="theme-color" content="#3858e9" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SITE_TITLE} />
      <meta name="twitter:description" content={SITE_DESCRIPTION} />
      <meta name="twitter:image" content="/og-image.png" />
      <style>{`footer .nx-py-12 { padding-top: 1.25rem !important; padding-bottom: 1.25rem !important; }`}</style>
    </>
  ),
}

export default config
