import React, { Component, PropTypes } from 'react';
import './listContainer.scss';

class listContainer extends Component {
  render() {
    const { data } = this.props;

    return <div className="flex-container flex-section">{ data }</div>;
  }
}

listContainer.propTypes = {
  data: PropTypes.array
};

export default listContainer;
