const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, './public');
const SRC_DIR = path.resolve(__dirname, './src');

module.exports = {
  entry: [`${SRC_DIR}/index.js`],
  output: {
    path: `${DIST_DIR}`,
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-2'],
              plugins: ['transform-decorators-legacy']
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          configFile: './.eslintrc.js'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './public/index.html',
      filename: './index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public/'),
    host: 'localhost',
    port: 3001,
    historyApiFallback: true
  }
};
