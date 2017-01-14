import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/all';
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
