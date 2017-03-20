import Immutable from 'immutable';
import createReducer from '../utils/utils';
import { SIGN_IN_SUCCESS, SIGN_OUT } from './SignIn.Actions';

let token = '';
let groups = [];
try {
  token = window.localStorage.getItem('id_token');
  groups = window.localStorage.getItem('groups');
  if (typeof groups === 'string') {
    groups = groups.split(' ');
  }
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
  return copyState.set('groups', Immutable.fromJS(payload.user.groups));
}

function signOut(state) {
  let copyState = state;
  copyState = copyState.set('token', '');
  return copyState.set('groups', Immutable.fromJS([]));
}

export default createReducer({
  [SIGN_IN_SUCCESS]: signIn,
  [SIGN_OUT]: signOut
}, Immutable.fromJS(initialState));
