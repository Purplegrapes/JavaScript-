import 'regenerator-runtime/runtime';
import 'react-hot-loader';
import React from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import App from './root/app';
import store from './create-store';
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);