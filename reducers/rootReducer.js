import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import demoReducer from './demoReducer';

const rootReducer = combineReducers({
  router: routerStateReducer,
  demo: demoReducer
});

export default rootReducer;
