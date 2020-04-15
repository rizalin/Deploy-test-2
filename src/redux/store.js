import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { users } from './reducers/users';

const rootReducers = combineReducers({
  users
});

const store = createStore(rootReducers, applyMiddleware(logger));

export default store;
