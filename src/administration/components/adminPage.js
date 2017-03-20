import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import './adminPage.scss';

class AdminPage extends Component {
  render() {
    return (
      <div className="container">
        <MoviesTable/>
      </div>
    );
  }
}

export default AdminPage;
