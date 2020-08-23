const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin
const AutoDllPlugin = require('autodll-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { styleConfig } = require('./style-loader');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const {
  WEB_BABEL_LOADER,
  FILE_LOADER,
  ROOT_PATH,
  THREAD_LOADER,
  LIBS,
} = require('./constants');
const createConfig = () => ({
  entry: {
    app: 'src/index.js'
  },
  mode: process.env.mode,
  output: {
    filename: '[name].chunk.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '..', 'index.html')
    }),
  new HardSourceWebpackPlugin(),
  new BundleAnalyzerPlugin(),
  ],
  devtool: 'inline-source-map',
  resolve: {
    aliasFields: ['browser'],
    extensions: ['.js', '.scss', '.less'],
    alias: {
      shared: path.resolve(ROOT_PATH, 'shared'),
      locales: path.resolve(ROOT_PATH, 'locales'),
      src: path.resolve(ROOT_PATH, 'src'),
      'react-dom': path.resolve(path.join(__dirname, '../node_modules/@hot-loader/react-dom')),
      'react-hot-loader': path.resolve(path.join(__dirname, '../node_modules/react-hot-loader')),
      'babel-core': path.resolve(path.join(__dirname, '../node_modules/@babel/core')),
    },
    mainFields: ['browser', 'module', 'main'],
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        antd: {
          name: 'antd',
          test: /_\.less$/,
          chunks: 'all',
          enforce: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /-webworker\.js$/,
          path.resolve(ROOT_PATH, 'node_modules'),
          path.resolve(ROOT_PATH, 'app'),
          path.resolve(ROOT_PATH, 'dist'),
          path.resolve(ROOT_PATH, 'dll'),
          path.resolve(ROOT_PATH, 'webpack'),
        ],
        use: [
          'react-hot-loader/webpack',
          'cache-loader',
          THREAD_LOADER,
          WEB_BABEL_LOADER,
        ],
      },
      ...styleConfig,
      ...FILE_LOADER,
    ],
  },
  devServer: {
    contentBase: [path.resolve(__dirname, '..', 'dist')],
    port: '8080',
    host: 'localhost'
}
});
module.exports = createConfig();