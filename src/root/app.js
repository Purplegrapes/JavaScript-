import React from 'react';
import {
  compose,
  withHandlers,
} from 'recompose';
import { prop } from 'lodash/fp';
import { connect } from 'react-redux';
import 'shared/utils/temp';
import {
  getInfo as getInfoAction,
} from './actions';
import { Temp } from '../components/temp';

export default compose(
  connect(state => prop('root')(state), {
    getInfo: getInfoAction,
  }),
  withHandlers({
  }),
)(({ getInfo }) => (<Temp getInfo={getInfo} />))