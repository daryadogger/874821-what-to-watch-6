import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Api from '../../api/api';
import {getError, getPromoFilm} from '../../store/action';
import PromoFilmView from '../promo-film/promo-film-view';
import LoadingScreen from '../loading-screen/loading-screen';
import {useSelectPromoFilm} from '../../store/hooks/use-select-promo-film';
import {Pages} from '../../const';

const PromoFilm = () => {
  const api = new Api();
  const promoFilm = useSelectPromoFilm();
  const loadedPromo = Object.keys(promoFilm).length !== 0;
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadedPromo) {
      return;
    }

    api.loadPromoFilm()
      .then((film) => {
        dispatch(getPromoFilm(film));
      })
      .catch((error) => {
        const errorText = error.name + `: ` + error.message;
        const url = Pages.MAIN;
        dispatch(getError({errorText, url}));
      });
  }, [loadedPromo]);

  if (!loadedPromo) {
    return <LoadingScreen />;
  }

  return (

    <PromoFilmView promoFilm={promoFilm} />

  );
};

export default PromoFilm;
