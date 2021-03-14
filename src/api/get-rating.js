const FilmRatings = {
  Bad: {
    DESCRIPTION: `Bad`,
    RATING: 0
  },
  Normal: {
    DESCRIPTION: `Normal`,
    RATING: 3
  },
  Good: {
    DESCRIPTION: `Good`,
    RATING: 5
  },
  VeryGood: {
    DESCRIPTION: `Very Good`,
    RATING: 8
  },
  Awesome: {
    DESCRIPTION: `Awesome`,
    RATING: 10
  }
};

const getRating = (rating) => {
  switch (true) {
    case (rating < FilmRatings.Normal.RATING):
      return FilmRatings.Bad.DESCRIPTION;

    case (rating < FilmRatings.Good.RATING):
      return FilmRatings.Normal.DESCRIPTION;

    case (rating < FilmRatings.VeryGood.RATING):
      return FilmRatings.Good.DESCRIPTION;

    case (rating < FilmRatings.Awesome.RATING):
      return FilmRatings.VeryGood.DESCRIPTION;

    default:
      return FilmRatings.Awesome.DESCRIPTION;
  }
};

export default getRating;
