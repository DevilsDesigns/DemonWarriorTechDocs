// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Demon Warrior Tech Docs',
  tagline: 'Docs',
  favicon: 'img/favicon.ico',

  // Adopt Docusaurus Faster and v4
  future: {
    experimental_faster: true,
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://docs.demonwarriortech.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  // onBrokenMarkdownLinks: 'warn', // Will be removed in v4

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DevilsDesigns/DemonWarriorTechDocs/tree/main/',
        },
        //       blog: {
        //         showReadingTime: true,
        //          // Please change this to your repo.
        //          // Remove this to remove the "edit this page" links.
        //          editUrl:
        //            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      announcementBar: {
        id: 'Pick your Operating System',
        content:
          'This site is mainly for Windows Systems. For Ubuntu/Linux, visit <a target="_blank" rel="noopener noreferrer" href="https://docs.bankai-tech.com">Bankai Tech Docs</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus.png',
      navbar: {
        title: 'Demon Warrior Tech Docs',
        logo: {
          alt: 'DWT logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/category/videos-tutorials',
            label: 'Videos Tutorials',
            position: 'left',
          },
          {
            to: 'https://buymeacoffee.com/demonwarriortech',
            label: 'Buy Me a Coffee',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documented Tutorials',
                to: '/category/documented-tutorials',
              },
              {
                label: 'Examples',
                to: '/category/examples',
              },
              {
                label: 'Jellyfin Extras',
                to: '/category/jellyfin-extras',
              },
              {
                label: 'Arr Self-Hosting',
                to: '/category/arr-self-hosting',
              },
              {
                label: 'Videos',
                to: '/category/videos-tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@DemonWarriorTech',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/9DDRsn3jxD',
              },
              {
                label: 'Buy Me A PC Part',
                href: 'https://www.buymeacoffee.com/demonwarriortech',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Demon Warrior Tech Docs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'dax',
          'csharp',
          'powerquery',
          'powershell',
          'yaml',
          'nginx',
          'editorconfig',
          'typescript',
          'javascript',
          'systemd',
          'ini',
          'bash',
          'apacheconf',
          'docker',
          'sql',
          'php',
        ],
      },
    }),
  plugins: [require.resolve('docusaurus-lunr-search')],
};

export default config;
