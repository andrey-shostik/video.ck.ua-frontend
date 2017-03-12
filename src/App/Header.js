import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  render() {
    return (
      <div>
        <AppBar
          title="App"
          iconElementRight={this.state.logged ? <Logged/> : <Login/>}
        />
      </div>
    );
  }
}

const Login = (props) => {
  return (
    <Link to="/signin">
      <FlatButton {...props} label="Sign In" style={{ color: 'white', marginTop: '6px' }}/>
    </Link>
  );
};

const Logged = (props) => {
  return (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon color="white"/></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem primaryText="Refresh"/>
      <MenuItem primaryText="Help"/>
      <MenuItem primaryText="Sign out"/>
    </IconMenu>
  );
};

export default Header;
