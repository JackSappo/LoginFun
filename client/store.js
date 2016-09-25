import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
//thunk

import rootReducer from './reducers/index.js';

const defaultState = {};

const store = createStore(rootReducer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
