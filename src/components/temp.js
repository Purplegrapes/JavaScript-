import React, { useRef } from 'react';
import classnames from 'classnames';
import Button from 'antd/lib/button';
import 'shared/utils/temp';
import { start, insertData, runProgress } from 'shared/utils/request-animation-frame';

import style from './index.less';

export const Temp = () => {
  const animationRef = useRef();
  const ulRef = useRef();
  const startRef = useRef();

  return (
    <div>
      <div>
        <Button onClick={() => insertData(ulRef.current)}>
          插入
        </Button>
        <ul ref={ulRef}>
        </ul>
      </div>
      <div className={style.AnimationBox}>
        <Button ref={startRef} onClick={() => runProgress(animationRef.current)}>
          开始
        </Button>
        <div className={classnames(style.Animation, style.Progress)} ref={animationRef}>
          0%
        </div>
      </div>
      
      <Button onClick={start}>
        滚动
      </Button>
      <div className={style.View}>
        <div id="scorll" className={style.Scroll}>
            <span>item item1</span>
            <span>item item1</span>
            <span>item item1</span>
            <span>item item1</span>
            <span>item item1</span>
            
        </div>
    </div>
  </div>
)};