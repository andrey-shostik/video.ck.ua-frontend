import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import './signIn.scss';
import { signIn } from './signIn.Actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
  }

  componentWillReceiveProps({ signInState }) {
    if (signInState.get('signIn').token) {
      localStorage.setItem('id_token', signInState.get('signIn').token);
      this.props.router.push('/');
    }
  }

  onSignIn(e) {
    const { boundSignIn, signInState } = this.props;
    boundSignIn({
      email: this.emailField.input.value,
      password: this.passwordField.input.value
    });
  }

  render() {
    return (
      <div className="flex-container form-container">
        <div className="flex-container app-form">
          <TextField floatingLabelText="Email" fullWidth ref={(email) => { this.emailField = email; }}/>
          <TextField
            floatingLabelText="Password"
            type="password"
            fullWidth
            ref={(password) => { this.passwordField = password; }}
          />
          <RaisedButton label="Sign In" onClick={this.onSignIn} fullWidth className="form-btn"/>
          <Link to="/signup" style={{ width: 'inherit' }}>
            <RaisedButton label="SIGN UP" fullWidth className="form-btn"/>
          </Link>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  boundSignIn: PropTypes.func,
  signInState: PropTypes.object
};

export default connect((store) => {
  return {
    signInState: store.signIn
  };
}, (dispatch) => {
  return {
    boundSignIn: bindActionCreators(signIn, dispatch)
  };
})(SignIn);

