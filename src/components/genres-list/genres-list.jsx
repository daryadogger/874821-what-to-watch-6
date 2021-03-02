import React from 'react';
import GenresListView from '../genres-list/genres-list-view';
import {shallowEqual, useSelector} from 'react-redux';
import {useFilmList} from '../../api/use-film-list';
import genresListProps from '../genres-list/genres-list.prop';

const GENRES_COUNT = 9;

const GenresList = (props) => {
  const {genre, setGenre} = props;

  const genresArray = useSelector((state) => [...new Set(state.films.map((film) => film.genre))], shallowEqual);

  useFilmList(genresArray);

  return <>

    <GenresListView genresArray={genresArray.slice(0, GENRES_COUNT)} genre={genre} setGenre={setGenre} />

  </>;
};

GenresList.propTypes = genresListProps;

export default GenresList;
