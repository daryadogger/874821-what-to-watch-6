import React from 'react';
import GenresListView from '../genres-list/genres-list-view';
import {shallowEqual, useSelector} from 'react-redux';
import genresListProps from '../genres-list/genres-list.prop';
import {GENRES_COUNT} from '../../const';

// to storage ?
const selectGenresArray = (FILMS) => {
  const found = [...new Set(FILMS.films.map((film) => film.genre))];
  return found;
};

const useSelectGenresArray = () => useSelector(({FILMS}) => selectGenresArray(FILMS), shallowEqual);


const GenresList = (props) => {
  const {genre} = props;
  const genresArray = useSelectGenresArray();

  return (

    <GenresListView genresArray={genresArray.slice(0, GENRES_COUNT)} genre={genre} />

  );
};

GenresList.propTypes = genresListProps;

export default GenresList;
