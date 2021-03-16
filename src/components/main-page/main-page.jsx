import React from 'react';
import {useParams} from 'react-router-dom';
import MainPageView from '../main-page/main-page-view';

const MAX_COUNT_OF_FILMS = 8;

const MainPage = () => {

  const {genre} = useParams();
  const filmGenre = typeof (genre) === `undefined` ? `` : genre;

  return (

    <MainPageView filmGenre={filmGenre} initialCount={MAX_COUNT_OF_FILMS} />

  );
};

export default MainPage;
