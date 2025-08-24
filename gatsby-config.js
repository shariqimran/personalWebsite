
/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "[Your Name]",
    siteUrl: "https://example.com",
    description: "Portfolio, projects, writing, and contact for [Your Name]"
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet"
  ],
  // Add favicon links
  flags: {
    FAST_DEV: true
  }
};
