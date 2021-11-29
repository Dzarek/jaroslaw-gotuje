/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Jarosław Gotuje",
    description: "Pyszne przepisy",
    author: "@dzarek",
    person: { name: "john", age: 32 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "john", age: 32 },
      { name: "susan", age: 21 },
    ],
  },
  plugins: [
    // `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jarosław Gotuje",
        short_name: "Jarosław Gotuje",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon-32x32.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9w91ldz39w11`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
              subsets: ["latin"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
              subsets: ["latin"],
            },
            {
              family: "Fredericka the Great",
              variants: ["400"],
              subsets: ["latin"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
