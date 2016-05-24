import routes from '../components/routes';
import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-router';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import _apply from 'ramda/src/apply';

let storeEnhancers = [
  applyMiddleware(thunk),
  reduxReactRouter({ routes, createHistory })
];

if (FLAG_DEV_TOOLS_ON) {
  const DevTools = require('../components/dev/devTools');
  storeEnhancers = [...storeEnhancers, DevTools.instrument()];
}

const composedEnhancers = _apply(compose, storeEnhancers);
const finalCreateStore = composedEnhancers(createStore);
const store = finalCreateStore(rootReducer);

export default store;
