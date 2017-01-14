import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
import { fetchBoard } from './store/actions';

const render = () =>  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render);
store.dispatch(fetchBoard());
