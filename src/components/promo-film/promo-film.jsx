import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import Api from '../../api/api';
import {getPromoFilm} from '../../store/action';
import PromoFilmView from '../promo-film/promo-film-view';
import LoadingScreen from '../loading-screen/loading-screen';

// to storage ?
const selectPromoFilm = (PROMO) => {
  const found = PROMO.promoFilm;
  return found;
};

const useSelectPromoFilm = () => useSelector(({PROMO}) => selectPromoFilm(PROMO), shallowEqual);


const PromoFilm = () => {
  const api = new Api();
  const promoFilm = useSelectPromoFilm();
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
