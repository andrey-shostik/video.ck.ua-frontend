import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../components/section/section';
import data from '../static/data';

class Content extends Component {
  render() {
    console.log(this.props.testStore);

    return (
      <Section data={data}/>
    );
  }
}

export default connect((store) => {
  return {
    testStore: store
  };
})(Content);
