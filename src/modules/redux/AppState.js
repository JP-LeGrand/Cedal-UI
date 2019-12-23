import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import thunk from 'redux-thunk';
import InitialState from './InitialState';

export const createAppState = () => createStore(RootReducer, InitialState, applyMiddleware(thunk));