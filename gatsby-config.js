module.exports = {
  siteMetadata: {
    title: `chrispalka-portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/",
        "fonts": [
          "lato"
        ],
      },
      __key: "images"
    },
    {
    resolve: 'gatsby-plugin-anchor-links',
      options: {
        duration: 1000,
      }
    }
  ]
};