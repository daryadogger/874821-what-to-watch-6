import FilmDetails from "../../components/film-details/film-details";
import FilmOverview from "../../components/film-overview/film-overview";
import FilmReviews from "../../components/film-reviews/film-reviews";
import {Tabs} from "../../const";

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

export default selectContent;
