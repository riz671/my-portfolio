module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|pdf)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
