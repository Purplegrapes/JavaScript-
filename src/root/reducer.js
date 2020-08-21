import { handleActions } from 'redux-actions';
import { INIT } from './actions';

export default handleActions({
  [INIT]: (state) => ({
    ...state,
    buttonName: 'after',
  }),
}, {
  buttonName: 'befror'
});
