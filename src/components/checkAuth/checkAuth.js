import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import checkAccess from './accessUtils';
import UserHasNotAccess from '../userHasNotAccess/userHasNotAccess';

class CheckAuth extends Component {
  render() {
    const { route: { requiredGroups }, groups, children } = this.props;
    const hasAccess = checkAccess(requiredGroups, groups.toJS());

    return hasAccess ? children : <UserHasNotAccess/>;
  }
}

CheckAuth.propTypes = {
  route : PropTypes.object,
  groups: ImmutablePropTypes.list
};

export default connect(({signIn}) => {
  return {
    groups: signIn.get('groups')
  };
})(CheckAuth);
