/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');

require('dotenv').config({
  path: '.env',
});

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        actions: path.join(__dirname, 'src/actions'),
        reducers: path.join(__dirname, 'src/reducers'),
        layouts: path.join(__dirname, 'src/layouts'),
        utils: path.join(__dirname, 'src/utils'),
        static: path.join(__dirname, 'static'),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Averia Serif Libre`,
            variants: [`400`, `700`]
          },
          {
            family: `Bebas Neue`,
          },
        ],
      },
    },
    `gatsby-plugin-react-svg`,
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon.png',

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ]
}
