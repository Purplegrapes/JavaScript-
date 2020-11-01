import {
  createAction,
} from 'redux-actions';
import { read } from 'shared/request';

import { actionTypeCreator } from 'shared/utils/redux-actions';
const actionType = actionTypeCreator(__filename);

export const INIT = actionType('INIT');
export const GET_INFO = actionType('GET_INFO');
export const SHOW_REPORT_FORM = actionType('SHOW_REPORT_FORM');
export const GET_INIT_STATE = actionType('GET_INIT_STATE');
export const UN_UPDATE_STATE = actionType('UN_UPDATE_STATE');
export const UPDATE_APP_INFO = actionType('UPDATE_APP_INFO');

export const init = createAction(INIT);
export const getInfo = createAction(GET_INFO, () => read('/api/info'));
