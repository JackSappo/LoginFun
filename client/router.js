import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.js';

const router = (
  <Router>
    <Route path="/" component={App}/>
  </Router>
)

render(router, document.getElementById('root'));
