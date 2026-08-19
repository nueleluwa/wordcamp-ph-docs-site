import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
    text: 'WordCamp Port Harcourt — Building the WordPress Community in South-South Nigeria',
  },
  head: (
    <>
      <meta name="description" content="Operating documentation and playbook for WordCamp Port Harcourt" />
      <style>{`footer .nx-py-12 { padding-top: 1.25rem !important; padding-bottom: 1.25rem !important; }`}</style>
    </>
  ),
}

export default config
