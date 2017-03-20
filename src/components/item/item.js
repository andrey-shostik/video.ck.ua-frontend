import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import './item.scss';

const Item = (props) => {
  const { movie, watch } = props;
  return (
    <div className="flex-container section-element">
      <div>
        <img alt="movie" width="155" height="220" src={movie.img}/>
      </div>

      <div className="item-container">
        <div><h2> {movie.name} </h2></div>
        <div> Оригинальное название: {movie.originalName} </div>
        <div> Страна: {movie.country} </div>
        <div> Дата: {movie.releaseDate} </div>
        <div> Продолжительность: {movie.during} </div>
        <ItemButton watch={watch} paramsId={movie._id}/>
      </div>
    </div>
  );
};

Item.propTypes = {
  movie: PropTypes.object,
  watch: PropTypes.bool
};

const ItemButton = ({ watch, paramsId }) => {
  return (
    <div className="element">
      { watch
        ?
          <Link to={`/movies/${paramsId}`}><RaisedButton label="Смотреть"/></Link>
        :
          <Link to="/"><RaisedButton label="На главную"/></Link>
      }
    </div>
  );
};

ItemButton.propTypes = {
  watch: PropTypes.bool,
  paramsId: PropTypes.string
};

export default Item;
