import React from 'react';
import GenresListView from '../genres-list/genres-list-view';
import {shallowEqual, useSelector} from 'react-redux';
import genresListProps from '../genres-list/genres-list.prop';

const GENRES_COUNT = 9;

const GenresList = (props) => {
  const {genre} = props;

  const genresArray = useSelector(({FILMS}) => [...new Set(FILMS.films.map((film) => film.genre))], shallowEqual);

  return (

    <GenresListView genresArray={genresArray.slice(0, GENRES_COUNT)} genre={genre} />

  );
};

GenresList.propTypes = genresListProps;

export default GenresList;
