module.exports = {
  siteMetadata: {
    title: `Gatsby Theme "Naked" core`,
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
    siteUrl: `https://gatsby-theme-naked.netlify.com/`,
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
      twitterAuthor: '',
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
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
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
  ],
};
