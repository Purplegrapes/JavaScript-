import {
  createAction,
} from 'redux-actions';
import { actionTypeCreator } from 'shared/utils/redux-actions';
const actionType = actionTypeCreator(__filename);

export const INIT = actionType('INIT');
export const LOAD_RESOURE = actionType('LOAD_RESOURE');
export const SHOW_REPORT_FORM = actionType('SHOW_REPORT_FORM');
export const GET_INIT_STATE = actionType('GET_INIT_STATE');
export const UN_UPDATE_STATE = actionType('UN_UPDATE_STATE');
export const UPDATE_APP_INFO = actionType('UPDATE_APP_INFO');

export const init = createAction(INIT);
