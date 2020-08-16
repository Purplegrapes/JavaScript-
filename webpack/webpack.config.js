const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  mode: process.env.mode,
  output: {
    filename: '[name].chunk.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'..', 'dist', 'template.html')
    }),
    new webpack.DllReferencePlugin({
        // 描述 lodash 动态链接库的文件内容
        manifest: require('../dist/lodash.manifest.json')
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.resolve(__dirname, '..', 'dist')],
    port: '8080',
    host: 'localhost'
}
};