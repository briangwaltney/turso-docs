/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      label: 'Reference introduction',
      id: 'index',
    },
    {
      type: 'doc',
      label: 'Turso CLI',
      id: 'turso-cli',
    },
    {
      type: 'doc',
      label: 'libSQL database URLs',
      id: 'libsql-urls',
    },
    {
      type: 'category',
      label: 'Client access',
      link: {
        type: 'doc',
        id: 'client-access/index',
      },
      items: [
        'client-access/javascript-typescript-sdk',
        'client-access/rust-sdk',
      ]
    },
  ],
};

module.exports = sidebars;