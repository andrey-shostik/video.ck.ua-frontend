import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const ItemButton = ({ watch, paramsId }, context) => {
  return (
    <div className="element">
      { watch
        ?
          <Link to={`/movies/${paramsId}`}><RaisedButton label="Смотреть"/></Link>
        :
          <RaisedButton onTouchTap={() => { context.router.goBack(); }} label="Back"/>
      }
    </div>
  );
};

ItemButton.propTypes = {
  watch: PropTypes.bool,
  paramsId: PropTypes.string
};

ItemButton.contextTypes = {
  router: PropTypes.object
};

export default ItemButton;
