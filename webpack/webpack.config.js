export default {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [{
          loader: 'raw-loader',
        }],
      }
    ]
  }
};