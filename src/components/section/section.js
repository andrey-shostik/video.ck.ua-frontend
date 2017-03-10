import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './section.scss';

class Section extends Component {
  render() {
    const { data } = this.props;

    const movies = data.map((obj, i) => {
      return (
        <div className="flex-container section-element" key={i}>
          <div>
            <img width="155" height="220" src={obj.img}/>
          </div>

          <div>
            <div className="element"><h2> {obj.name} </h2></div>
            <div className="element"> Оригинальное название: {obj.originalName} </div>
            <div className="element"> Страна: {obj.country} </div>
            <div className="element"> Дата: {obj.releaseData} </div>
            <div className="element"> Продолжительность: {obj.during} </div>
            <div className="element"> <RaisedButton label="Смотреть"/> </div>
          </div>
        </div>
      );
    });

    return (
      <div className="flex-container flex-section">
        { movies }
      </div>
    );
  }
}

Section.propTypes = {
  data: PropTypes.array
};

export default Section;
