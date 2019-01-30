/* global window */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers(reducers);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
