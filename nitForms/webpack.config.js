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
        test: /\.css$/i,
        use: {
          loader: "css-loader",
        },
      },
    ],
  },
};
