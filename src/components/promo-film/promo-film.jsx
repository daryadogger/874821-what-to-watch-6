import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Api from '../../api/api';
import {getPromoFilm} from '../../store/action';
import PromoFilmView from '../promo-film/promo-film-view';
import LoadingScreen from '../loading-screen/loading-screen';

const PromoFilm = () => {
  const api = new Api();
  const promoFilm = useSelector(({PROMO}) => PROMO.promoFilm);
  const loadedPromo = Object.keys(promoFilm).length !== 0;
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadedPromo) {
      return;
    }

    api.loadPromoFilm().then((film) => {
      dispatch(getPromoFilm(film));
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
