module.exports = {
  siteMetadata: {
    websiteName: `Gatsby Theme "Naked" core`,
    logo: `naked-logo.png`,
    websiteDescription: `If HTML is the structure, and JavaScript the action, then CSS is the clothing. You just need to add CSS and content. This is the Gatsby Theme Naked. Just like what you wear in life, what your site wears is very personal. CSS in Js, check! No problem. CSS Modules, check! No Problem. Styled component libraries of different flavors? Check! No problem.`,
    menuLinks: [
      {
        id: 1,
        name: 'home',
        link: '/',
      },
      {
        id: 2,
        name: 'blog',
        link: '/blog',
      },
      {
        id: 3,
        name: 'tutorials',
        link: '/tutorials',
      },
      {
        id: 4,
        name: 'contact',
        link: '/contact',
      },
    ],
    author: `David Kartuzinski`,
    authorIntro: `David Kartuzinski is a Web Developer who loves open source and loves Gatsby.Js. Hire him today for your next project or unfilled job.`,
    authorImage: `david-kartuzinski.jpg`,
    siteUrl: `https://gatsythemenakedcore.gtsb.io`,
    legalName: `A Gatsby Naked Theme`,
    locale: `en-US`,
    textDirection: `ltr`,
    socialLinks: {
      twitter: 'https://twitter.com/NakedGatsby',
      instagram: 'https://www.instagram.com/nakedgatsby/',
      pinterest: '#',
      facebook: '#',
    },

    // googleAnalyticsID: "UA-158642528-1",
    themeColor: '#F3824A',
    backgroundColor: '#FFF7F0',
    siteRss: '/rss.xml',
    social: {
      facebook: '',
      twitter: '@NakedGatsby',
      twitterAuthor: '@kai_dawei',
    },
    address: {
      city: 'Paris',
      region: 'Ile de France',
      country: 'France',
      zipCode: '75015',
    },
    contact: {
      email: 'david@kaidawei.me',
      phone: '',
      twitter: 'https://twitter.com/kai_dawei',
      linkedin: 'https://www.linkedin.com/in/kaidawei/',
      github: 'https://github.com/davidkartuzinski/',
    },
    foundingDate: '2019',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        crumbLabelUpdates: [],
      },
    },

    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],

        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              markdownCaptions: true,
              linkImagesToOriginal: false,
              showCaptions: [`title`, `alt`],
              maxWidth: 590,
            },
          },
        ],
      },
    },

    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      // for the actual MDX files representing the blog posts.
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    // https://manifest-validator.appspot.com/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyThemeNaked`,
        short_name: `NakedTheme`,
        description: `If HTML is the structure, and JavaScript the action, then CSS is the clothing. You just need to add CSS and content. This is the Gatsby Theme Naked. Just like what you wear in life, what your site wears is very personal. CSS in Js, check! No problem. CSS Modules, check! No Problem. Styled component libraries of different flavors? Check! No problem.`,
        start_url: `/`,
        background_color: `#FFF7F0`,
        theme_color: `#F3824A`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `src/images/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `src/images/favicons/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `src/images/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `src/images/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `src/images/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `src/images/favicons/mstile-150x150.png`,
            sizes: `150x150`,
            type: `image/png`,
          },
          {
            src: `src/images/favicons/safari-pinned-tab.svg`,
            sizes: `1467x1467`,
            type: `image/svg`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://kaidawei.us3.list-manage.com/subscribe/post?u=b96fce7934d3d67838002705e&amp;id=87c55442ce', // add your MailChimp list endpoint here; see instructions below
      },
    },
  ],
};
