import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { signOut } from '../signIn/SignIn.Actions';
import Logged from './components/logged';
import Login from './components/login';

class Header extends Component {
  render() {
    const { boundSignOut, token, groups } = this.props;
    return (
      <AppBar
        title="App"
        iconElementRight={token ? <Logged groups={groups.toJS()} boundSignOut={boundSignOut}/> : <Login/>}
      />
    );
  }
}

Header.propTypes = {
  boundSignOut: PropTypes.func,
  token: PropTypes.string,
  groups: ImmutablePropTypes.list
};

export default connect((store) => {
  return {
    token: store.signIn.get('token'),
    groups: store.signIn.get('groups')
  };
}, (dispatch) => {
  return {
    boundSignOut: bindActionCreators(signOut, dispatch)
  };
})(Header);
