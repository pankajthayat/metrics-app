import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./store/configureStore";
import { Provider } from 'react-redux';
import ErrorBoundry from "./components/error_boundry/ErrorBoundry"
import Header from './components/HeaderComponents/Header.js';
const store=configureStore();
const jsx = (
  <Provider store={store}>
    <ErrorBoundry>
    <App />
    </ErrorBoundry>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));
serviceWorker.unregister();


