import React from 'react';
import {ALL_GENRES, Pages} from '../../const';
import GenreItem from '../genre-item/genre-item';
import genresListViewProps from '../genres-list/genres-list-view.prop';

const GenresListView = (props) => {
  const {genresArray, genre} = props;

  return (

    <ul className="catalog__genres-list">
      <GenreItem label={ALL_GENRES} to={Pages.MAIN} active={genre === ``} />

      {genresArray.map((label) => <GenreItem key={`genre-${label}`} label={label} to={`${Pages.CATALOG}/${label.toLowerCase()}`} active={genre === label.toLowerCase()} />)}

    </ul>

  );
};

GenresListView.propTypes = genresListViewProps;

export default GenresListView;
