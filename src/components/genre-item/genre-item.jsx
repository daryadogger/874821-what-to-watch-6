import React from 'react';
import genreItemProps from '../genre-item/genre-item.prop';

const GenreItem = (props) => {
  const {label, active, onClick} = props;

  return <>

    <li className={`catalog__genres-item ${active ? `catalog__genres-item--active` : ``}`} onClick={(evt)=> {
      evt.preventDefault();
      onClick();
    }} >
      <a href="#" className="catalog__genres-link">{label}</a>
    </li>

  </>;
};

GenreItem.propTypes = genreItemProps;

export default GenreItem;
