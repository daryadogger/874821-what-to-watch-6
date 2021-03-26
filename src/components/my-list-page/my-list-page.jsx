import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Api from '../../api/api';
import {getFavoriteFilms} from '../../store/action';
import {useSelectFavoriteFilms} from '../../store/hooks/use-select-favorite-films';
import MyListPageView from './my-list-page-view';

const MyListPage = () => {
  const genre = ``;

  const api = new Api();
  const favoriteFilms = useSelectFavoriteFilms();
  const loaded = favoriteFilms.length > 0;
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (loaded) {
        return;
      }

      try {
        const films = await api.loadFavoriteFilms();
        dispatch(getFavoriteFilms(films));
      } catch (err) {
        return;
      }
    })();
  }, [loaded]);

  return <>

    <MyListPageView genre={genre} favoriteFilms={favoriteFilms} />

  </>;
};

export default MyListPage;
