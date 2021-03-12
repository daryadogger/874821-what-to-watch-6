import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import MainPageView from '../main-page/main-page-view';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from '../../store/action';
import Api from '../../api/api';

const MAX_COUNT_OF_FILMS = 8;

const MainPage = () => {
  const api = new Api();
  const promoFilm = useSelector((state) => state.promoFilm);
  const loadedPromo = Object.keys(promoFilm).length !== 0;
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadedPromo) {
      return;
    }

    api.loadPromoFilm().then((film) => {
      dispatch(ActionCreator.getPromoFilm(film));
    });
  }, [loadedPromo]);

  const {genre} = useParams();
  const filmGenre = typeof (genre) === `undefined` ? `` : genre;

  return <>

    <MainPageView promoFilm={promoFilm} filmGenre={filmGenre} initialCount={MAX_COUNT_OF_FILMS} />

  </>;
};

export default MainPage;
