// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MuPython',
  tagline: '用 Mu 开启 Python 编程之旅',
  url: 'https://mupython.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JohnGuan', // Usually your GitHub org/user name.
  projectName: 'MuPython', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MuPython',
        logo: {
          alt: 'MuPython',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '教程',
          },
          {to: '/blog', label: '下载', position: 'left'},
          {to: '/blog', label: '关于', position: 'left'},
          {to: '/blog', label: '教程', position: 'left'},
          {to: '/blog', label: '交流', position: 'left'},
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/JohnGuan/MuPython',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: '下载 Mu',
        //     items: [
        //       {
        //         label: 'Mu for Windows',
        //         to: '/docs/intro',
        //       },
        //       {
        //         label: 'Mu for Mac',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: '社区',
        //     items: [
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: '更多',
        //     items: [
        //       {
        //         label: '博客',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/JohnGuan/MuPython',
        //       },
        //     ],
        //   },
        // ],
        copyright: `版权所有 © ${new Date().getFullYear()} <a href="https://johnguan.com/" target="_blank">管宁川</a>，保留所有权利。 <br/> <a href="http://ntoll.org/" target="_blank">Nicholas H.Tollervey</a> owns the copyrights of Mu Editor. <br/> 本站采用 <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank">知识共享协议 · 署名-非商业性使用-相同方式共享 4.0 国际</a> 进行许可。 <br/> <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"></a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
