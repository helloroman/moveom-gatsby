/* eslint-disable */
/* global __dirname */
module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
    'gatsby-plugin-resolve-src',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:200, 500, 800`
        ]
      }
    },
  ],
};
