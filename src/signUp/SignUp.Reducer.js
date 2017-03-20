import Immutable from 'immutable';
import createReducer from '../utils/utils';
import { SIGN_UP_SUCCESS } from './SignUp.Actions';

const initialState = {
  signUp: {}
};

function signUp(state, { payload }) {
  return state.set('signUp', payload);
}

export default createReducer({
  [SIGN_UP_SUCCESS]: signUp
}, Immutable.fromJS(initialState));
