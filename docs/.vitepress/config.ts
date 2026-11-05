import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'White Tee / Field Notes',
  description: 'A research studio for the plain white T-shirt: competitors, positioning ideas, and evidence to collect next.',
  base: '/is117007-tshirt/',
  lang: 'en-US',
  cleanUrls: false,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#f8f7f2' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/is117007-tshirt/favicon.svg' }]
  ],
  sitemap: { hostname: 'https://kaw393939.github.io/is117007-tshirt/' },
  themeConfig: {
    siteTitle: 'WHITE TEE / FIELD NOTES',
    logo: '/favicon.svg',
    nav: [
      { text: 'Landscape', link: '/competitive-landscape' },
      { text: 'Ideas', link: '/ideas' },
      { text: 'Next steps', link: '/research-plan' }
    ],
    sidebar: [
      {
        text: 'THE RESEARCH STUDIO',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Competitive landscape', link: '/competitive-landscape' },
          { text: 'Positioning ideas', link: '/ideas' },
          { text: 'Research & validation plan', link: '/research-plan' }
        ]
      },
      {
        text: 'CONTEXT & EVIDENCE',
        items: [
          { text: 'Brand-studio brief', link: '/studio-brief' },
          { text: 'Sources & limitations', link: '/sources' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/is117007-tshirt' }],
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/kaw393939/is117007-tshirt/edit/main/docs/:path',
      text: 'Edit these notes on GitHub'
    },
    outline: [2, 3],
    footer: {
      message: 'A research workspace. Product claims and brand choices remain subject to validation.',
      copyright: 'IS117007 · Research reviewed November 5, 2026'
    }
  }
})
