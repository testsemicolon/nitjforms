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
      {
        test: /plugin\.css$/,
        use: {
          loader: "style-loader",
        },
      },
    ],
  },
};
