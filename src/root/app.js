import React from 'react';
import {
  compose,
  withHandlers,
} from 'recompose';
import { prop } from 'lodash/fp';

import Button from 'antd/lib/button';
import { connect } from 'react-redux';
import 'shared/utils/temp';

import {
  getInfo as getInfoAction,
} from './actions';
import style from './index.less';

export default compose(
  connect(state => prop('root')(state), {
    getInfo: getInfoAction,
  }),
  withHandlers({
    clickLi: ({ }) => (e) => {
      console.log(e.target.text)

    }
  }),
)(({ clickLi, getInfo }) => (
  <div className={style.Flex}>
  <div className={style.Flex1}>
    <Button onClick={getInfo}>
      获取
    </Button>
  </div>
  <ul onClick={clickLi}>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
  </ul>

</div>
))