import React from 'react';
import {useParams} from 'react-router-dom';
import {MAX_COUNT_OF_FILMS} from '../../const';
import MainPageView from '../main-page/main-page-view';
import mainPageProps from './main-page.prop';

const MainPage = (props) => {
  const {errorStatus} = props;
  const {genre} = useParams();
  const filmGenre = typeof (genre) === `undefined` ? `` : genre;

  return (

    <MainPageView filmGenre={filmGenre} initialCount={MAX_COUNT_OF_FILMS} errorStatus={errorStatus} />

  );
};

MainPage.propTypes = mainPageProps;

export default MainPage;
