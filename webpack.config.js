const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.svg/,
        loader: 'raw-loader',
      },
      {
        test: /\.(jpe?g|png|gif|webp|woff2|ttf|ico|html)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        },
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].br[query]',
      algorithm: 'brotliCompress',
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    })
  ]
};