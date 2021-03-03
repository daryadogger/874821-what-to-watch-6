import React from 'react';
import {useParams} from 'react-router-dom';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import FilmPageFrame from '../film-page-frame/film-page-frame';
import films from '../../mocks/films';

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
  const {tab} = useParams();
  const {id} = useParams();

  const currentFilm = films.find((el) => el.id === Number(id));

  const Content = selectContent(tab);

  return <>

    <FilmPageFrame currentFilm={currentFilm} >
      <Content currentFilm={currentFilm} />
    </FilmPageFrame>

  </>;
};

export default FilmPage;
