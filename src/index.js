import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import './index.css';
import AppRouter from "./routers/AppRouter"
// import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
ReactDOM.render(jsx, document.getElementById('root'));
// registerServiceWorker();
