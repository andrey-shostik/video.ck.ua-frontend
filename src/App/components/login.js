import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const Login = (props) => {
  return (
    <Link to="/signin">
      <FlatButton {...props} label="Sign In" style={{ color: 'white', marginTop: '6px' }}/>
    </Link>
  );
};

export default Login;
