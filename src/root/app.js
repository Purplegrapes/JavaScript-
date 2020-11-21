import React, { useRef } from 'react';
import {
  compose,
  withHandlers,
} from 'recompose';
import { prop } from 'lodash/fp';
import classnames from 'classnames';
import Button from 'antd/lib/button';
import { connect } from 'react-redux';
import 'shared/utils/temp';

import { insertData, runProgress } from 'shared/utils/request-animation-frame';

import {
  getInfo as getInfoAction,
} from './actions';
import style from './index.less';


export default compose(
  connect(state => prop('root')(state), {
    getInfo: getInfoAction,
  }),
  withHandlers({
    
  }),
)(({ clickLi }) => {
  const animationRef = useRef();
  const ulRef = useRef();
  const dragRef = useRef();

  return (
    <div>
      <div>
        <Button onClick={() => insertData(ulRef.current)}>
          插入
        </Button>
        <ul onClick={clickLi} ref={ulRef}>
        </ul>
      </div>
      <div className={style.AnimationBox}>
        <Button onClick={() => runProgress(animationRef.current)}>
          开始
        </Button>
        <div className={classnames(style.Animation, style.Progress)} ref={animationRef}>
          0%
        </div>
      </div>
      <div
        className={style.Box}
        ref={dragRef}
      >
      </div>
  </div>
  )
})