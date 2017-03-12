import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import content from '../content/content.Reducer';

const rootReducer = combineReducers({
  content,
  routing
});

export default rootReducer;
