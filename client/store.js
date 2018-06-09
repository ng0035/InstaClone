import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//importing data - comments and posts from data folder

import comments from './data/comments';
import posts from './data/posts';

//creating an object for default data

const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer,defaultState);

export const history = syncHistoryWithStore(browserHistory,store);

export default store;
