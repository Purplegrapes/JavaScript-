const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const autoprefixer = require('autoprefixer');
const {
  DEBUG,
} = require('./constants');


const cssLoaderWithModule = {
  importLoaders: 1,
  modules: true,
  localIdentName: '[folder]_[name]_[local]--[hash:base64:5]',
  sourceMap: DEBUG,
};

const cssLoaderWithoutModule = {
  sourceMap: DEBUG,
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: DEBUG,
    plugins: () => [
      autoprefixer(),
    ],
  },
};

const styleConfig = [{
  test: /[^_]\.less$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: DEBUG,
      },
    },
    'cache-loader',
    {
      loader: 'css-loader', // translates CSS into CommonJS
      options: cssLoaderWithModule,
    },
    postcssLoader,
    {
      loader: 'less-loader', // compiles Less to CSS
      options: {
        javascriptEnabled: true,
        sourceMap: DEBUG,
      },
    }],
}, {
  test: /_\.less$/,
  sideEffects: true,
  use: [

    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: DEBUG,
      },
    },
    'cache-loader',
    {
      loader: 'css-loader', // translates CSS into CommonJS
      options: cssLoaderWithoutModule,
    },
    postcssLoader,
    {
      loader: 'less-loader', // compiles Less to CSS
      options: {
        javascriptEnabled: true,
        sourceMap: DEBUG,
      },
    }],
},
{
  test: /\.css$/,
  sideEffects: true,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: DEBUG,
      },
    },
    'cache-loader',
    'css-loader',
  ],
}];

module.exports = {
  styleConfig,
};
