import logger from 'shared/middlewares/logger';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const middlewares = [logger];
const store = createStore(reducers, {}, applyMiddleware(...middlewares))
global.store = store

export default store;
