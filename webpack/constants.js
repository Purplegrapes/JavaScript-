const path = require('path');
const { concat } = require('lodash/fp');

const DEBUG = process.env.mode !== 'production';
const PROD = process.env.mode === 'production';
const LOCAL_DEPLOY = process.env.deploy === 'local';
const ROOT_PATH = path.join(__dirname, '..');
const configName = process.env.configName || 'default.config.js';
const CONFIG_PATH = `/config/:{ENV}/${configName}`;
const WEB_ENV = process.env.target === 'web';

const LIBS = [
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-actions',
  'recompose',
  'reselect',
  'lodash',
];


const plugins = [
  ['lodash', { id: ['lodash', 'recompose'] }],
  '@babel/plugin-syntax-dynamic-import',
  'dynamic-import-node',
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  ['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }],
];

if (DEBUG) {
  plugins.push('react-hot-loader/babel');
}

const BABEL_LOADER = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    babelrc: false,
    presets: [
      '@babel/preset-react',
      ['@babel/preset-env', {
        targets: {
          electron: '8.1.1',
        },
        modules: false,
      }],
    ],
    plugins,
  },
};

const THREAD_LOADER = {
  loader: 'thread-loader',
  // loaders with equal options will share worker pools
  options: {
    // number of jobs a worker processes in parallel
    // defaults to 20
    workerParallelJobs: 50,
  },
};

const WEB_BABEL_LOADER = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    babelrc: false,
    presets: [
      '@babel/preset-react',
      ['@babel/preset-env', {
        modules: false,
      }],
    ],
    plugins: concat([
      '@babel/plugin-transform-typeof-symbol',
      '@babel/plugin-transform-template-literals',
    ])(plugins),
  },
};

const FILE_LOADER = [
  {
    test: /\.(png|jpg|jpeg|svg|gif)/,
    use: 'file-loader',
    sideEffects: true,
  }, {
    test: /\.(woff|eot|ttf)/,
    use: 'url-loader',
    sideEffects: true,
  }, {
    test: /\.(xlsx?|pdf)/,
    use: 'file-loader',
    sideEffects: true,
  },
];

module.exports = {
  DEBUG,
  PROD,
  ROOT_PATH,
  LIBS,
  BABEL_LOADER,
  FILE_LOADER,
  WEB_BABEL_LOADER,
  CONFIG_PATH,
  LOCAL_DEPLOY,
  THREAD_LOADER,
  WEB_ENV,
};
