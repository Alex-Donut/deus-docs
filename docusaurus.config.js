/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
require("dotenv").config()

module.exports = {
  title: 'DEUS Wiki',
  tagline: 'DEUS.finance documentation.',
  url: 'https://wiki.deus.finance',
  baseUrl: '/',
  favicon: '/favicon.ico',
  organizationName: 'deusfinance', // Usually your GitHub org/user name.
  projectName: 'deus-docs', // Usually your repo name.
  themeConfig: {
    forceDarkMode: true,
    darkMode: true,
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌜',
        darkIconStyle: {
          marginTop: '1px',
        },
        lightIcon: '🌞',
        lightIconStyle: {
          marginTop: '1px',
        },
      },
    },
    sidebarCollapsible: false,
    algolia: {
      apiKey: process.env.ALGOLIA_APIKEY || "your_keys",
      indexName: process.env.ALGOLIA_APPID || "your_keys",
    },
    image: '/img/deus.png', // used for meta tag, in particular og:image and twitter:image
    metaImage: '/img/deus.png',
    googleAnalytics: {
      trackingID: process.env.GA_TRACKING_ID || "your_tracking_ID",
    },
    announcementBar: {
      id: 'support_us', // Any value that will identify this message
      content:
        'This wiki is still a work in progress, we could use your help at: <a target="_blank" rel="noopener noreferrer" href="https://github.com/deusfinance/deus-docs">github.com/deusfinance/deus-docs</a>',
      backgroundColor: '#111111', // Defaults to `#fff`
      textColor: '#ddd', // Defaults to `#000`
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'DEUS Logo',
        src: '/img/deus.png',
        srcDark: '/img/deus.png',
        // src: '/deus-light.svg',
        // srcDark: '/deus-dark.svg',
      },
      items: [
        {
          href: 'https://github.com/deusfinance/deus-docs',
          className: 'navbar-item-github',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: '/docs/intro',
          label: 'Docs',
          position: 'left',
        },
      ],
    },

    // In case we want to add code snippets
    prism: {
      defaultLanguage: 'js',
      plugins: ['line-numbers', 'show-language'],
      theme: require('prism-react-renderer/themes/vsDark'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    footer: {
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Official Discord',
              to: 'https://discord.gg/xfeYT6acha',
            },
            {
              label: 'Telegram Chat',
              to: 'http://t.me/deusfinance',
            },
          ],
        },
        {
          title: 'Additional Resources',
          items: [
	    {
              label: 'Official Medium',
              href: 'https://medium.com/@deusfinance',
            },
	    {
              label: 'Lafayette\'s Medium',
              href: 'https://lafayettetabor.medium.com/',
            },            
	    {
              label: 'Github',
              href: 'https://github.com/deusfinance',
            },
	    {
              label: 'Youtube Explainers',
              href: 'https://www.youtube.com/channel/UCEVRMEr1Kt-n6ycQSEYBScQ',
            },
            {
              label: 'Twitch',
              href: 'https://www.twitch.tv/deus_finance',
            },
          ],
        },
        {
          title: 'Announcements',
          items: [
            {
              label: 'Twitter Announcements',
              href: 'https://twitter.com/deusdao',
            },
            {
              label: 'Telegram Announcements',
              href: 'https://t.me/deusfinance_news',
            },
            {
              label: 'Lafayette\'s Twitter',
              href: 'https://twitter.com/lafachief',
            },
          ],
        },
        {
          title: 'Website & Apps',
          items: [
            {
	      label: 'Website',
	      href: 'https://deus.finance/'
	    },
	    {
              label: 'DEUS Swap',
              href: 'https://app.deus.finance/swap',
            },
            {
              label: 'Staking',
              href: 'https://app.deus.finance/staking',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/deusfinance/deus-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
