// const { styles } = require("@ckeditor/ckeditor5-dev-utils");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // {
      //   test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
      //   use: ["raw-loader"],
      // },
      // {
      //   test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
      //   use: [
      //     {
      //       loader: "style-loader",
      //       options: {
      //         injectType: "singletonStyleTag",
      //         attributes: {
      //           "data-cke": true,
      //         },
      //       },
      //     },
      //   {
      //     loader: "postcss-loader",
      //     options: styles.getPostCssConfig({
      //       themeImporter: {
      //         themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
      //       },
      //       minify: true,
      //     }),
      //   },
      // ],
      // },
    ],
  },
};
