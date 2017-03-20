import React, { Component } from 'react';
import './App.scss';
import Header from './Header';

class App extends Component {
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

export default App;
