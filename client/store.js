import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index.js';

const defaultState = {
  user: {
    email: 'me@me.com',
    password: 'butter'
  }
};

const store = createStore(rootReducer, defaultState, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f //Enables redux chrome plugin
));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
