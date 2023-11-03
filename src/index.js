import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store/store.js';

// axios.defaults.baseURL = 'https://api.arthive.dev';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
