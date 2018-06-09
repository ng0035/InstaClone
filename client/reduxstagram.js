// let's go!
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

//import components

import App from './components/app';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import router-deps

import { Router,Route,IndexRoute,browserHistory } from 'react-router';

//import provider
import {Provider} from 'react-redux';
import store, { history } from './store';


//creating router
const router = (
  <Provider store = {store}>
    <Router history = {history}>
      <Route path = "/" component = {App}>
      <IndexRoute component = {PhotoGrid}></IndexRoute>
      <Route path = "/view/:postId" component = {Single}></Route>
    </Route>
    </Router>
</Provider>
)

render(router, document.querySelector("#root"));