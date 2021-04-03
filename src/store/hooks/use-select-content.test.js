import FilmDetails from "../../components/film-details/film-details";
import FilmOverview from "../../components/film-overview/film-overview";
import FilmReviews from "../../components/film-reviews/film-reviews";
import {Tab} from "../../const";
import selectContent from "./use-select-content";

describe(`Поведение селектора 'selectContent'`, () => {
  it(`Возвращает FilmDetails, если таб details`, () => {
    const tab = Tab.DETAILS;
    const resultConponent = FilmDetails;

    const result = selectContent(tab);

    expect(result).toEqual(resultConponent);
  });

  it(`Возвращает FilmReviews, если таб reviews`, () => {
    const tab = Tab.REVIEWS;
    const resultConponent = FilmReviews;

    const result = selectContent(tab);

    expect(result).toEqual(resultConponent);
  });

  it(`Возвращает FilmOverview, если таб не reviews и не details`, () => {
    const tab = `tab`;
    const resultConponent = FilmOverview;

    const result = selectContent(tab);

    expect(result).toEqual(resultConponent);
  });
});
