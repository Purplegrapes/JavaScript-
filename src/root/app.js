import React from 'react';
import { compose } from 'recompose';
import { prop } from 'lodash/fp';

import Button from 'antd/lib/button';
import { connect } from 'react-redux';
import {
  init as initAction,
} from './actions';

export default compose(
  connect(state => prop('root')(state), {
    init: initAction,
  })
)(({
  init,
  buttonName,
}) => (
  <div className="todo-app">
    <h1>Todo List</h1>
    <Button onClick={init}>
      {buttonName}
    </Button>
  </div>
))