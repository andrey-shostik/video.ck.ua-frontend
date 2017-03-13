import Immutable from 'immutable';
import createReducer from '../utils/utils';
import { SIGN_IN_SUCCESS } from './signIn.Actions';

const initialState = {
  signIn: {}
};

function signIn(state, { payload }) {
  return state.set('signIn', payload);
}

export default createReducer({
  [SIGN_IN_SUCCESS]: signIn
}, Immutable.fromJS(initialState));
