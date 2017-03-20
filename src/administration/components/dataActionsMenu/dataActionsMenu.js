import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeMovie } from '../../../movie/Movie.Actions';
import './dataActionsMenu.scss';

const DataActionsMenu = ({ show, boundRemoveMovie, dataType, selected, boundGetMovies }, context) => {
  const onRemoveAction = () => {
    boundRemoveMovie(selected._id).then(() => {
      boundGetMovies();
    });
  };

  const onNewAction = () => {
    context.router.push(`/administration/admin/${dataType}/new`);
  };

  const onEditAction = () => {
    context.router.push(`/administration/admin/${dataType}/${selected._id}/edit`);
  };

  return (
    <div>
      { show
        ?
          <div className="data-actions-menu flex-container">

            <RaisedButton label="Edit" onTouchTap={onEditAction}/>
            <RaisedButton label="Remove" onTouchTap={onRemoveAction}/>
          </div>
        :
          null
      }

      { dataType !== 'users'
        ?
          <div className="data-actions-menu flex-container">
            <RaisedButton label="New" onTouchTap={onNewAction} fullWidth/>
          </div>
        :
          null
      }
    </div>
  );
};

DataActionsMenu.propTypes = {
  show: PropTypes.bool,
  boundRemoveMovie: PropTypes.func,
  dataType: PropTypes.string,
  selected: PropTypes.object,
  boundGetMovies: PropTypes.func
};


DataActionsMenu.contextTypes = {
  router: PropTypes.object
};

export default connect(null, (dispatch) => {
  return {
    boundRemoveMovie: bindActionCreators(removeMovie, dispatch)
  };
})(DataActionsMenu);
