module.exports = {
  siteMetadata: {
    description: "Personal page of Kevin Rodrigues",
    locale: "en",
    title: "Kevin Rodrigues",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "dark-green",
      },
    },
  ],
}
