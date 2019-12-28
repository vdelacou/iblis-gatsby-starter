module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
    },
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        stylesConfig: {
          disableAutoprefixing: true,
          disableMinification: true
        },
      },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/i18n`,
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Iblis Gatsby Starter`,
        short_name: `Iblis`,
        description: `Template Starter for Gatsby`,
        lang: `en`,
        start_url: '/',
        display: 'standalone',
        background_color: '#fafafa',
        theme_color: '#1a73e8',
        icon: `src/images/gatsby-icon.png`,
        localize: [
          {
            start_url: `/fr/`,
            lang: `fr`,
            name: `Modèle pour démarrer avec Gatsby`,
            short_name: `Iblis`,
            description: `Modèle pour démarrer avec Gatsby`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
  ],
  siteMetadata: {
    siteUrl: `https://vdelacou.github.io/iblis-gatsby-starter/`,
  },
};
