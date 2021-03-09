import React from 'react';
import {useParams} from 'react-router-dom';
import mainPageProps from './main-page.prop';
import MainPageView from '../main-page/main-page-view';

const MAX_COUNT_OF_FILMS = 8;

const MainPage = (props) => {
  const {promoCard} = props;

  const {genre} = useParams();
  const filmGenre = typeof (genre) === `undefined` ? `` : genre;

  return <>

    <MainPageView promoCard={promoCard} filmGenre={filmGenre} initialCount={MAX_COUNT_OF_FILMS} />

  </>;
};

MainPage.propTypes = mainPageProps;

export default MainPage;
