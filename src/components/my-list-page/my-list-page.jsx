import React from 'react';
import {useSelectFavoriteFilms} from '../../store/hooks/use-select-favorite-films';
import LoadingScreen from '../loading-screen/loading-screen';
import MyListPageView from './my-list-page-view';

const MyListPage = () => {
  const genre = ``;

  const favoriteFilms = useSelectFavoriteFilms();
  const loaded = favoriteFilms.length > 0;

  if (!loaded) {
    return <LoadingScreen />;
  }

  return <>

    <MyListPageView genre={genre} favoriteFilms={favoriteFilms} />

  </>;
};

export default MyListPage;
