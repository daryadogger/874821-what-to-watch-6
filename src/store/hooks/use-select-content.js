import FilmDetails from "../../components/film-details/film-details";
import FilmOverview from "../../components/film-overview/film-overview";
import FilmReviews from "../../components/film-reviews/film-reviews";
import {Tab} from "../../const";

const selectContent = (tab) => {
  switch (tab) {
    case Tab.DETAILS:
      return FilmDetails;

    case Tab.REVIEWS:
      return FilmReviews;

    default:
      return FilmOverview;
  }
};

export default selectContent;
