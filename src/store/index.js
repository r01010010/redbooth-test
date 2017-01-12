import { createStore } from 'redux';
import reducer from './reducers/all';

const store = createStore(reducer);

export default store;
