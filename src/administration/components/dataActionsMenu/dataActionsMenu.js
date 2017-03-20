import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './dataActionsMenu.scss';

const DataActionsMenu = ({ show, boundRemoveData, dataType, selected, boundGetData }, context) => {
  const onRemoveAction = () => {
    boundRemoveData(selected._id).then(() => {
      boundGetData();
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
            { dataType !== 'users'
              ?
                <RaisedButton label="Edit" onTouchTap={onEditAction} style={{ width: '50%', marginRight: '5px' }}/>
              :
                null
            }
            <RaisedButton label="Remove" onTouchTap={onRemoveAction} style={{ width: '50%', marginLeft: '5px' }}/>
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
  boundRemoveData: PropTypes.func,
  dataType: PropTypes.string,
  selected: PropTypes.object,
  boundGetData: PropTypes.func
};


DataActionsMenu.contextTypes = {
  router: PropTypes.object
};

export default DataActionsMenu;
