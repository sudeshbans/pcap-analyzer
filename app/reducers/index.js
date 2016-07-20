import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import dropbox from './dropbox';
import graph from './graph';
import modal from './modal';

const rootReducer = combineReducers({
  counter,
  routing,
  dropbox,
  graph,
  modal
});

export default rootReducer;
