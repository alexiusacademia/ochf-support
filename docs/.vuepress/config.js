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
      {
        text: "Users",
        link: "/users/"
      },
      {
        text: "Beaver Dam",
        link: "/weirs/"
      }
    ],

    sidebar: {
        '/features/': [
            '',
            'inputs',
            'pro_vs_lite'
        ],
        '/faq/': [
          ''
        ],
        '/users/': [
          ''
        ],
        '/weirs/': [
          ''
        ]
    },

    lastUpdated: 'Last Updated',
    smoothScroll: true
  },
};
