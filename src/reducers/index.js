import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import content from '../content/content.Reducer';
import signIn from '../signIn/signIn.Reducer';
import signUp from '../signUp/signUp.Reducer';

const rootReducer = combineReducers({
  content,
  routing,
  signUp,
  signIn
});

export default rootReducer;
