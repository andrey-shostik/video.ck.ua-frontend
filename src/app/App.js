import React, { Component, PropTypes } from 'react';
import './App.scss';
import Header from './Header';

class App extends Component {
  getChildContext() {
    return { router: this.props.router };
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="app-pages">
          { this.props.children }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  router: PropTypes.object
};

App.childContextTypes = {
  router: PropTypes.object
};

export default App;
