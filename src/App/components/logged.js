import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';

const Logged = ({ router, boundSignOut }) => {
  const onSignOut = () => {
    boundSignOut();
    router.push('/');
  };

  const hasGroup = (group) => {
    const groups = window.localStorage.getItem('groups');
    const hasSuccess = groups.search(new RegExp(group.toUpperCase())) !== -1;

    if (hasSuccess) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <IconMenu iconButtonElement={<IconButton> <MoreVertIcon color="white"/> </IconButton>}>
      { hasGroup('MODERATOR') ? <Link to={'/administration/moderator'}><MenuItem primaryText="Moderator Page"/></Link> : null }
      { hasGroup('ADMIN') ? <Link to={'/administration/admin'}><MenuItem primaryText="Admin Page"/></Link> : null }
      <Link to="/"><MenuItem primaryText="Home"/></Link>
      <MenuItem primaryText="Sign Out" onClick={onSignOut}/>
    </IconMenu>
  );
};

Logged.propTypes = {
  router: PropTypes.object,
  boundSignOut: PropTypes.func
};

export default Logged;
