
/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "Shariq Imran Hassan",
    siteUrl: "https://example.com",
    description: "Portfolio, projects, writing, and contact for Shariq Imran Hassan"
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
