import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import {App} from './App';
import Login from '../src/components/Login'
import HomePage from '../src/components/HomePage'
import Users from '../src/components/Users'
import Writers from '../src/components/Writers'
import Profile from '../src/components/Profile'
import {LandingPage} from '../src/components/LandingPage'
import * as serviceWorker from './serviceWorker';

import store from './lib/store'

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path='/' component={LandingPage} />
        <Route path="login" component={Login} />
        <Route path="home" component={HomePage} />
        <Route path="users" component={Users} />
        <Route path="writers" component={Writers} />
        <Route path="profile" component={Profile} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));


serviceWorker.register();
