import React from 'react';
import GenreItem from '../genre-item/genre-item';
import genresListViewProps from '../genres-list/genres-list-view.prop';

const GenresListView = (props) => {
  const {genresArray, genre} = props;

  return (

    <ul className="catalog__genres-list">
      <GenreItem label={`All genres`} to={`/`} active={genre === ``} />

      {genresArray.map((label) => <GenreItem key={label} label={label} to={`/catalog/${label.toLowerCase()}`} active={genre === label.toLowerCase()} />)}

    </ul>

  );
};

GenresListView.propTypes = genresListViewProps;

export default GenresListView;
