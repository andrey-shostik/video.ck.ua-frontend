import { combineReducers } from 'redux';
import test from './test.Reducer';
import content from '../content/content.Reducer';

const rootReducer = combineReducers({
  test,
  content
});

export default rootReducer;
