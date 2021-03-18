import React from 'react';
import GenresListView from '../genres-list/genres-list-view';
import {shallowEqual, useSelector} from 'react-redux';
import genresListProps from '../genres-list/genres-list.prop';
import {GENRES_COUNT} from '../../const';

const GenresList = (props) => {
  const {genre} = props;

  const genresArray = useSelector(({FILMS}) => [...new Set(FILMS.films.map((film) => film.genre))], shallowEqual);

  return (

    <GenresListView genresArray={genresArray.slice(0, GENRES_COUNT)} genre={genre} />

  );
};

GenresList.propTypes = genresListProps;

export default GenresList;
