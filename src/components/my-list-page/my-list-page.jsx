import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Api from '../../api/api';
import {getFavoriteFilms} from '../../store/action';
import MyListPageView from './my-list-page-view';

const MyListPage = () => {
  const genre = ``;

  const api = new Api();
  const favoriteFilms = useSelector(({FAVORITES}) => FAVORITES.favoriteFilms);
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
