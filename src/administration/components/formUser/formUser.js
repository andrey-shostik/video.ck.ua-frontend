import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { editUser, getUser } from '../../../user/User.Actions';
import './formUser.scss';

class FormUser extends Component {
  componentWillMount() {
    const { boundGetUser } = this.props;
    const { router: { params } } = this.context;
    if (params.id) {
      boundGetUser(params.id);
    }
  }

  componentWillReceiveProps() {
    this.mapUserFileds(this.props.user.toJS());
  }

  onAction = () => {
    const { boundEditUser } = this.props;
    const { router } = this.context;

    const user = {
      username: this.username.input.value,
      groups: this.groups.input.value
    };

    boundEditUser(router.params.id, user);
  }


  mapUserFileds = (user) => {
    if (Object.values(user).length > 1) {
      const userFields = new Array(2);

      userFields.push(
        <TextField
          floatingLabelText="Username"
          fullWidth
          ref={(username) => { this.username = username; }}
          defaultValue={user.username}
          key="1"
        />
      );

      userFields.push(
        <TextField
          floatingLabelText="Groups"
          fullWidth
          ref={(groups) => { this.groups = groups; }}
          defaultValue={user.groups}
          key="2"
        />
      );

      return userFields;
    } else {
      return null;
    }
  };

  render() {
    const { user } = this.props;
    const { router } = this.context;

    return (
      <div className="flex-container form-container">
        <div className="flex-container user-form">

          { this.mapUserFileds(user.toJS()) }

          <Link to="/administration/admin" style={{ width: 'inherit' }}>
            <RaisedButton
              label="Save"
              onTouchTap={this.onAction}
              fullWidth
              className="form-btn"
            />
          </Link>

          <RaisedButton onTouchTap={() => { router.goBack(); }} label="Back" fullWidth className="form-btn"/>
        </div>
      </div>
    );
  }
}

FormUser.propTypes = {
  user: ImmutablePropTypes.map,
  boundGetUser: PropTypes.func,
  boundEditUser: PropTypes.func
};

FormUser.contextTypes = {
  router: PropTypes.object
};

export default connect((store) => {
  return {
    user: store.user.get('user')
  };
}, (dispatch) => {
  return {
    boundGetUser: bindActionCreators(getUser, dispatch),
    boundEditUser: bindActionCreators(editUser, dispatch)
  };
})(FormUser);
