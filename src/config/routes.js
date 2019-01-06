import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import App from '../screens/App';

const routes = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default routes;
