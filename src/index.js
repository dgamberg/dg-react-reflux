import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // bring in CSS via Webpack
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// REACT REDUX
//bring in store config
import configureStore from './store/configureStore';
// Provider is part of react-redux
// - Attaches the Store to the react container component
import { Provider } from 'react-redux';
const store = configureStore();

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
