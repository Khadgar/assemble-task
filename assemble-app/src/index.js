import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import ConnectedApp from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
