module.exports = {
  siteMetadata: {
    title: `Rest_17`,
    siteUrl: `https://www.yourdomain.tld`,
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
        path: `${__dirname}/blog`,
      },
    },
  ],
};
