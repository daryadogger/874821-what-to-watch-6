import React from 'react';
import {Link} from 'react-router-dom';
import genreItemProps from '../genre-item/genre-item.prop';

const GenreItem = (props) => {
  const {label, active, to} = props;

  return (

    <li className={`catalog__genres-item ${active ? `catalog__genres-item--active` : ``}`} >

      <Link to={to} className="catalog__genres-link">{label}</Link>

    </li>

  );
};

GenreItem.propTypes = genreItemProps;

export default GenreItem;
