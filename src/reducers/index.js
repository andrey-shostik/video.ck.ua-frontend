import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import content from '../content/Content.Reducer';
import signIn from '../signIn/SignIn.Reducer';
import signUp from '../signUp/SignUp.Reducer';
import movie from '../movie/Movie.Reducer';
import user from '../user/User.Reducer';

const rootReducer = combineReducers({
  content,
  routing,
  signUp,
  signIn,
  movie,
  user
});

export default rootReducer;
