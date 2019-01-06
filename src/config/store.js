import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'shared/reducers/root';
import { initialAppState } from 'screens/App/shared/utils';

const store = createStore(rootReducer, {
  app: initialAppState,
}, applyMiddleware(thunk));

export default store;
