import Immutable from 'immutable';
import createReducer from '../utils/utils';
import { SIGN_IN_SUCCESS, SIGN_OUT } from './signIn.Actions';

let token = '';
let groups = [];
try {
  token = window.localStorage.getItem('id_token');
  groups = window.localStorage.getItem('groups');
} catch (e) {
  throw e;
}

const initialState = {
  token: token,
  groups: groups
};

function signIn(state, { payload }) {
  let copyState = state;
  copyState = copyState.set('token', payload.token);
  return copyState.set('groups', payload.user.groups);
}

function signOut(state, { payload }) {
  window.localStorage.clear();

  let copyState = state;
  copyState = copyState.set('token', '');
  return copyState.set('groups', []);
}

export default createReducer({
  [SIGN_IN_SUCCESS]: signIn,
  [SIGN_OUT]: signOut
}, Immutable.fromJS(initialState));
