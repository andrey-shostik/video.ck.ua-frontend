import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from '../signIn/signIn.Actions';
import Logged from './components/logged';
import Login from './components/login';

class Header extends Component {
  render() {
    const { router, boundSignOut } = this.props;
    return (
      <AppBar
        title="App"
        iconElementRight={localStorage.getItem('id_token') ? <Logged router={router} boundSignOut={boundSignOut}/> : <Login/>}
      />
    );
  }
}

Header.propTypes = {
  router: PropTypes.object,
  boundSignOut: PropTypes.func
};

export default connect(null, (dispatch) => {
  return {
    boundSignOut: bindActionCreators(signOut, dispatch)
  };
})(withRouter(Header));
