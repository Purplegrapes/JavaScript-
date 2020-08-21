const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin
const AutoDllPlugin = require('autodll-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { styleConfig } = require('./style-loader');

const {
  WEB_BABEL_LOADER,
  FILE_LOADER,
  ROOT_PATH,
  THREAD_LOADER,
} = require('./constants');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  mode: process.env.mode,
  output: {
    filename: '[name].chunk.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'..', 'index.html')
    }),
    // new webpack.DllReferencePlugin({
    //     // 描述 lodash 动态链接库的文件内容
    //     manifest: require('../dist/lodash.manifest.json')
    // })
    new AutoDllPlugin({
      inject: true, // 设为 true 就把 DLL bundles 插到 index.html 里
      filename: '[name].dll.js',
      context: path.resolve(__dirname, '../'), // AutoDllPlugin 的 context 必须和 package.json 的同级目录，要不然会链接失败
      entry: {
        // 将 lodash 模块作为入口编译成动态链接库
        lodash: ['lodash']
      },
    }),
    new HardSourceWebpackPlugin(),
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
};