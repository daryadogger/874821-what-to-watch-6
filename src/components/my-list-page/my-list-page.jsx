import React from 'react';
import {useSelectFavoriteFilms} from '../../store/hooks/use-select-favorite-films';
import MyListPageView from './my-list-page-view';

const MyListPage = () => {
  const genre = ``;

  const favoriteFilms = useSelectFavoriteFilms();

  return <>

    <MyListPageView genre={genre} favoriteFilms={favoriteFilms} />

  </>;
};

export default MyListPage;
