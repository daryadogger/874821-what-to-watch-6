import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Api from '../../api/api';
import {Pages} from '../../const';
import {getError, getFavoriteFilms} from '../../store/action';
import {useSelectFavoriteFilms} from '../../store/hooks/use-select-favorite-films';
import MyListPageView from './my-list-page-view';

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

    api.loadFavoriteFilms()
      .then((films) => {
        dispatch(getFavoriteFilms(films));
      })
      .catch((error) => {
        const errorText = error.name + `: ` + error.message;
        const url = Pages.MAIN;
        dispatch(getError({errorText, url}));
      });
  }, [loaded]);

  return <>

    <MyListPageView genre={genre} favoriteFilms={favoriteFilms} />

  </>;
};

export default MyListPage;
