import React from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.js';
import LoginForm from './components/LoginForm';
import Confirm from './components/Confirm';


import store, {history} from './store.js';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginForm}/>
        <Route path="/confirm" component={Confirm}/>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
