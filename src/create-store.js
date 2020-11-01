import logger from 'shared/middlewares/logger';
import fetch from 'shared/middlewares/fetch';
import ReduxThunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const middlewares = [logger, fetch, ReduxThunk];
const store = createStore(reducers, {}, applyMiddleware(...middlewares))
global.store = store

export default store;
