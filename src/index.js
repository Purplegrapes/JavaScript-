import 'regenerator-runtime/runtime';
import 'react-hot-loader';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import App from './root/app';
import store from './create-store';
import '../shared/utils/temp';

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Component}/>
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);