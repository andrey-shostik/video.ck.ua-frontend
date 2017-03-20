import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';
import checkAccess from '../../components/checkAuth/accessUtils';

const Logged = ({ boundSignOut, groups }) => {
  const renderLinkToAdmin = () => {
    if (checkAccess(['ADMIN'], groups)) {
      return <Link to={'/administration/admin'}><MenuItem primaryText="Admin Page"/></Link>;
    } else {
      return null;
    }
  };

  const renderLinkToModerator = () => {
    if (checkAccess(['MODERATOR'], groups)) {
      return <Link to={'/administration/moderator'}><MenuItem primaryText="Moderator Page"/></Link>;
    } else {
      return null;
    }
  };

  const onSignOut = () => {
    boundSignOut();
    window.localStorage.clear();
  };

  return (
    <IconMenu iconButtonElement={<IconButton><MoreVertIcon color="white"/></IconButton>}>
      { renderLinkToAdmin() }
      { renderLinkToModerator() }
      <Link to="/"><MenuItem primaryText="Home"/></Link>
      <Link to="/"><MenuItem primaryText="Sign Out" onClick={onSignOut}/></Link>
    </IconMenu>
  );
};

Logged.propTypes = {
  boundSignOut: PropTypes.func,
  groups: PropTypes.array
};

export default Logged;
