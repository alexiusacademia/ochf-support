module.exports = {
  title: "Open Channel Hydraulics Flow Support",
  description: "Support page for OCHF.",
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Features",
        link: "/features/",
      },
      {
        text: "FAQ",
        link: "/faq/",
      },
    ],

    sidebar: {
        '/features/': [
            '',
            'system',
            'project',
            'contract',
            'user'
        ],
        '/faq/': [
          '',
          'contract',
          'project'
        ]
    },

    lastUpdated: 'Last Updated',
    smoothScroll: true
  },
};
