import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import checkAccess from './accessUtils';
import UserHasNotAccess from '../userHasNotAccess/userHasNotAccess';

class CheckAuth extends Component {
  render() {
    const { route: { requiredGroups }, groups } = this.props;
    const hasAccess = checkAccess(requiredGroups, groups.toJS());

    if (hasAccess) {
      return this.props.children;
    } else {
      return <UserHasNotAccess/>;
    }
  }
}

CheckAuth.propTypes = {
  route: PropTypes.object,
  groups: ImmutablePropTypes.list
};

export default connect((store) => {
  return {
    groups: store.signIn.get('groups')
  };
})(CheckAuth);
