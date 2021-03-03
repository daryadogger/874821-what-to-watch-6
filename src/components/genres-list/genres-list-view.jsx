import React from 'react';
import GenreItem from '../genre-item/genre-item';
import genresListViewProps from '../genres-list/genres-list-view.prop';

const GenresListView = (props) => {
  const {genresArray, genre, setGenre} = props;

  return <>

    <ul className="catalog__genres-list">
      <GenreItem label={`All genres`} active={genre === ``} onClick={ () => {
        setGenre(``);
      }} />

      {genresArray.map((label) => <GenreItem key={label} label={label} active={genre === label} onClick={ () => {
        setGenre(label);
      }} />)}

    </ul>

  </>;
};

GenresListView.propTypes = genresListViewProps;

export default GenresListView;
