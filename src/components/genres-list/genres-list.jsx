import React from 'react';
import GenresListView from '../genres-list/genres-list-view';
import genresListProps from '../genres-list/genres-list.prop';
import {GENRES_COUNT} from '../../const';
import {useSelectGenresArray} from '../../store/hooks/use-select-genres-array';

const GenresList = (props) => {
  const {genre} = props;
  const genresArray = useSelectGenresArray();

  return (

    <GenresListView genresArray={genresArray.slice(0, GENRES_COUNT)} genre={genre} />

  );
};

GenresList.propTypes = genresListProps;

export default GenresList;
