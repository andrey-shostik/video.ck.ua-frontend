import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

const Logged = (props) => {
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
      <MenuItem primaryText="Sign out"/>
      <Link to="/youDontKnowJs"> <MenuItem primaryText="link 404"/> </Link>
    </IconMenu>
  );
};

const Header = () => {
  return (
    <AppBar
      className="material-navbar"
      title="App"
      iconElementRight={<Logged/>}
    />
  );
};

export default Header;
