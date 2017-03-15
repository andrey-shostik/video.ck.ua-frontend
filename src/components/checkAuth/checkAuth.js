import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import checkAccess from './accessUtils';
import UserHasNotAccess from '../userHasNotAccess/userHasNotAccess';

class CheckAuth extends Component {
  render() {
    const { route: { requiredGroups }, groups } = this.props;
    const hasAccess = checkAccess(requiredGroups, groups);

    if (hasAccess) {
      return this.props.children;
    } else {
      return <UserHasNotAccess/>;
    }
  }
}

CheckAuth.propTypes = {
  route: PropTypes.object,
  groups: PropTypes.array
};

export default connect((store) => {
  return {
    groups: store.signIn.get('groups')
  };
})(CheckAuth);
