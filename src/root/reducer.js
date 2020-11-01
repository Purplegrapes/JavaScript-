import { handleActions } from 'redux-actions';
import { GET_INFO } from './actions';

export default handleActions({
  [GET_INFO]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
}, {
  buttonName: 'befror'
});
