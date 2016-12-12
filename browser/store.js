import {createStore, combineReducers, applyMiddleware} from 'redux';

//Middleware
import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from 'redux-logger';

//Reducers
import rootReducer from './reducer';

export default createStore(
  rootReducer,
  applyMiddleware(
    loggingMiddleware({collapsed: true}),
    thunkMiddleware
  )
);
