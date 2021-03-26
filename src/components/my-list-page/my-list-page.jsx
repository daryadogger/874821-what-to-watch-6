import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Api from '../../api/api';
import {getFavoriteFilms} from '../../store/action';
import {useSelectFavoriteFilms} from '../../store/hooks/use-select-favorite-films';
import MyListPageView from './my-list-page-view';

const ignoreAuth = () => {};

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
      .catch(ignoreAuth);
  }, [loaded]);

  return <>

    <MyListPageView genre={genre} favoriteFilms={favoriteFilms} />

  </>;
};

export default MyListPage;
