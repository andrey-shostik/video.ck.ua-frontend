import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link, withRouter } from 'react-router';


class Header extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="App"
          iconElementRight={localStorage.getItem('id_token') ? <Logged router={this.props.router}/> : <Login/>}
        />
      </div>
    );
  }
}

Header.propTypes = {
  router: PropTypes.object
};

const Login = (props) => {
  return (
    <Link to="/signin">
      <FlatButton {...props} label="Sign In" style={{ color: 'white', marginTop: '6px' }}/>
    </Link>
  );
};

const Logged = ({ router }) => {
  const signOut = () => {
    localStorage.removeItem('id_token');
    router.push('/');
  };

  return (
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon color="white"/></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem primaryText="Refresh"/>
      <MenuItem primaryText="Help"/>
      <MenuItem primaryText="Sign out" onClick={signOut}/>
    </IconMenu>
  );
};

Logged.propsTypes = {
  router: PropTypes.object
};

export default withRouter(Header);
