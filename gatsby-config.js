const pathPrefix = process.env.PATH_PREFIX || '';
const siteUrl = process.env.SITE_URL || 'https://www.example.com/';

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
    },
    {
      resolve: 'gatsby-theme-material-ui',
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#1a73e8',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/i18n`,
        languages: ['en', 'fr'],
        defaultLanguage: 'en',
        redirect: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Iblis Gatsby Starter',
        short_name: 'Iblis',
        description: 'Template Starter for Gatsby',
        lang: 'en',
        start_url: '/',
        display: 'standalone',
        background_color: '#fafafa',
        theme_color: '#1a73e8',
        icon: 'src/images/gatsby-icon.png',
        crossOrigin: 'use-credentials',
        localize: [
          {
            name: 'Modèle pour démarrer avec Gatsby',
            short_name: 'Iblis',
            description: 'Modèle pour démarrer avec Gatsby',
            lang: 'fr',
            start_url: '/fr',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
    },
  ],
  pathPrefix,
  siteMetadata: {
    siteUrl,
  },
};
