import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store/store';
import Login from './components/login.jsx';
//import Frontpage from './frontpage.jsx';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store} >
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Login} />>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    , document.getElementById("root"));
});

// Only for testing

window.store = store;