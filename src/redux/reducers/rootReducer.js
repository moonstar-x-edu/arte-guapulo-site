import { combineReducers } from 'redux';
import app from './app';
import gallery from './gallery';
import upload from './upload';

const rootReducer = combineReducers({
  app,
  gallery,
  upload
});

export default rootReducer;
