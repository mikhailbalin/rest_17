module.exports = {
  siteMetadata: {
    title: "Rest_17",
    description: "Web for Rest_17",
    siteUrl: "https://www.rest17.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        customizeWebpackConfig: (config) => {
          const { plugins } = config;

          // MiniCssExtractPlugin breaks build
          config.plugins = plugins.filter(
            (plugin) =>
              plugin.constructor &&
              plugin.constructor.name !== "MiniCssExtractPlugin"
          );
        },
      },
    },
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-styletron",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
};
