import { combineReducers } from 'redux';
import app from './app';
import gallery from './gallery';

const rootReducer = combineReducers({
  app,
  gallery
});

export default rootReducer;
