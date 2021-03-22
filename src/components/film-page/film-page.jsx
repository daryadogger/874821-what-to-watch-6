import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import FilmPageFrame from '../film-page-frame/film-page-frame';
import {shallowEqual, useSelector} from 'react-redux';
import {Pages, Tabs} from '../../const';

// to storage ?
const selectFilm = (FILMS, id) => {
  const found = FILMS.films.find((el) => el.id === id);
  return found;
};

const useSelectFilm = (id) => useSelector(({FILMS}) => selectFilm(FILMS, id), shallowEqual);


const selectContent = (tab) => {
  switch (tab) {
    case Tabs.DETAILS:
      return FilmDetails;

    case Tabs.REVIEWS:
      return FilmReviews;

    default:
      return FilmOverview;
  }
};

const FilmPage = () => {
  const {tab, id} = useParams();
  const numberId = Number(id);
  const currentFilm = useSelectFilm(numberId);
  const {posterImage, backgroundImage, name, genre, released, isFavorite} = currentFilm;

  const Content = selectContent(tab);

  if (typeof (currentFilm) === `undefined`) {
    return <Redirect to={Pages.NOT_FOUND_PAGE} />;
  }

  return (

    <FilmPageFrame posterImage={posterImage} backgroundImage={backgroundImage} name={name} genre={genre} released={released} isFavorite={isFavorite} >
      <Content currentFilm={currentFilm} />
    </FilmPageFrame>

  );
};

export default FilmPage;
