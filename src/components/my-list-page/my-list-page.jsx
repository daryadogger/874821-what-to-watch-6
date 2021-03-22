import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import Api from '../../api/api';
import {getFavoriteFilms} from '../../store/action';
import MyListPageView from './my-list-page-view';

// to storage ?
const selectFavoriteFilms = (FAVORITES) => {
  const found = FAVORITES.favoriteFilms;
  return found;
};

const useSelectFavoriteFilms = () => useSelector(({FAVORITES}) => selectFavoriteFilms(FAVORITES), shallowEqual);


const MyListPage = () => {
  const genre = ``;

  const api = new Api();
  const favoriteFilms = useSelectFavoriteFilms();
  const loaded = favoriteFilms.length > 0;
  const dispatch = useDispatch();

  useEffect(() => {
    if (loaded) {
      return;
    }

    api.loadFavoriteFilms().then((films) => {
      dispatch(getFavoriteFilms(films));
    });
  }, [loaded]);

  return <>

    <MyListPageView genre={genre} favoriteFilms={favoriteFilms} />

  </>;
};

export default MyListPage;
