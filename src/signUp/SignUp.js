import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import { signUp } from './SignUp.Actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSignUp = () => {
      const { boundSignUp, signUpState } = this.props;
      boundSignUp({
        username: this.usernameField.input.value,
        email: this.emailField.input.value,
        password: this.passwordField.input.value
      });
    };
  }

  componentWillReceiveProps({ signUpState }) {
    if (signUpState.get('signUp').token) {
      this.props.router.push('/signin');
    }
  }

  render() {
    return (
      <div className="flex-container form-container">
        <div className="flex-container app-form">
          <TextField
            floatingLabelText="Username"
            fullWidth
            ref={(username) => { this.usernameField = username; }}
          />
          <TextField floatingLabelText="Email" fullWidth ref={(email) => { this.emailField = email; }}/>
          <TextField
            floatingLabelText="Password"
            type="password"
            fullWidth
            ref={(password) => { this.passwordField = password; }}
          />
          <RaisedButton onClick={this.onSignUp} label="SIGN UP" fullWidth className="form-btn"/>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  boundSignUp: PropTypes.func,
  signUpState: PropTypes.object
};

export default connect((store) => {
  return {
    signUpState: store.signUp
  };
}, (dispatch) => {
  return {
    boundSignUp: bindActionCreators(signUp, dispatch)
  };
})(SignUp);
