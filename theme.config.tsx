import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>WordCamp Port Harcourt</span>,
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
    </>
  ),
}

export default config
