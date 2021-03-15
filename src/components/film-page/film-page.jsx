import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import FilmPageFrame from '../film-page-frame/film-page-frame';
import {useSelector} from 'react-redux';

const selectContent = (tab) => {
  switch (tab) {
    case `details`:
      return FilmDetails;

    case `reviews`:
      return FilmReviews;

    default:
      return FilmOverview;
  }
};

const FilmPage = () => {
  const {tab, id} = useParams();
  const numberId = Number(id);
  const currentFilm = useSelector((state) => state.films.find((el) => el.id === numberId));

  const Content = selectContent(tab);

  if (typeof (currentFilm) === `undefined`) {
    return <Redirect to={`/not-found-page`} />;
  }

  return (

    <FilmPageFrame posterImage={currentFilm.posterImage} backgroundImage={currentFilm.backgroundImage} name={currentFilm.name} genre={currentFilm.genre} released={currentFilm.released} >
      <Content currentFilm={currentFilm} />
    </FilmPageFrame>

  );
};

export default FilmPage;
