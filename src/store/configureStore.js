import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from '../reducers/auth';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer
    })
  );
  return store;
};
