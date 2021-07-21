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
      }
    ],

    sidebar: {
        '/features/': [
            '',
            'inputs'
        ],
        '/faq/': [
          ''
        ],
        '/users/': [
          ''
        ]
    },

    lastUpdated: 'Last Updated',
    smoothScroll: true
  },
};
