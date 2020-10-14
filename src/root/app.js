import React from 'react';
import { compose } from 'recompose';
import { prop } from 'lodash/fp';

import Button from 'antd/lib/button';
import { connect } from 'react-redux';
import {
  init as initAction,
} from './actions';
import style from './index.less';

export default compose(
  connect(state => prop('root')(state), {
    init: initAction,
  })
)(({
  init,
  buttonName,
}) => (
  <div className={style.Flex}>
    <div className={style.Flex1}>Todo List</div>
    <Button onClick={init}>
      {buttonName}
    </Button>
  </div>
))