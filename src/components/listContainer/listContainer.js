import React, { Component, PropTypes } from 'react';
import './listContainer.scss';
import Item from '../item/item';

class listContainer extends Component {
  render() {
    const { data } = this.props;

    const movies = data.map((movie) => {
      return (
        <Item watch movie={movie} key={movie._id}/>
      );
    });

    return (
      <div className="flex-container flex-section">
        { movies }
      </div>
    );
  }
}

listContainer.propTypes = {
  data: PropTypes.array
};

export default listContainer;
