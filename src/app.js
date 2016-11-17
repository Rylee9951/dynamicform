import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

require('assets/styles/style.css')

// Layouts
import App from 'layouts/app';

import Home from 'ui/home'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route component={Home} path="/" />
    </Route>
  </Router>
), document.getElementById('app'));