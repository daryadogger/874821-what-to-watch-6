import React from 'react';
import {useParams} from 'react-router-dom';

import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import FilmPageFrame from '../film-page-frame/film-page-frame';

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

  const Content = selectContent(tab);

  return <>

    <FilmPageFrame>
      <Content />
    </FilmPageFrame>

  </>;
};

export default FilmPage;
