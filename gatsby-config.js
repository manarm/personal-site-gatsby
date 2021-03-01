/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'manarm.co',
    description: 'Web home of Mitchell Manar.',
    author: 'manarm',
  },
  plugins: [`gatsby-plugin-sass`,
  `gatsby-plugin-fontawesome-css`,
  `gatsby-transformer-remark`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/tech/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/art/`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `manarm.co`,
      short_name: `manarm.co`,
      start_url: `/`,
      background_color: `#6b37bf`,
      theme_color: `#6b37bf`,
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: `standalone`,
      icon: `src/images/icon.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-netlify-cms`
],
  
}
