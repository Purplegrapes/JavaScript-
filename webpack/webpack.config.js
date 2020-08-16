const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin
const AutoDllPlugin = require('autodll-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
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
  devServer: {
    contentBase: [path.resolve(__dirname, '..', 'dist')],
    port: '8080',
    host: 'localhost'
}
};