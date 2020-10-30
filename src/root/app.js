import React from 'react';
import {
  compose,
} from 'recompose';
import { prop } from 'lodash/fp';

import Button from 'antd/lib/button';
import { connect } from 'react-redux';
import 'shared/utils/temp';

import {
  init as initAction,
} from './actions';
import style from './index.less';
import Test from '../components/test';

export default compose(
  connect(state => prop('root')(state), {
    init: initAction,
  })
)(() => (
  <div className={style.Flex}>
  <div className={style.Flex1}>
  </div>
  <div className={style.Flex1}>
  </div>
  <div className={style.Flex1}>
  </div>
  <div className={style.Flex1}>
  </div>
  <div className={style.Flex1}>
  </div>
</div>
))