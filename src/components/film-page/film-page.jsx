import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import FilmPageFrame from '../film-page-frame/film-page-frame';
import {useSelector} from 'react-redux';
import {Pages, Tabs} from '../../const';

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
  const currentFilm = useSelector(({FILMS}) => FILMS.films.find((el) => el.id === numberId));
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
