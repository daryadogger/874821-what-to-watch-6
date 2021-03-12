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
  if (rating < FilmRatings.Normal.RATING) {
    return FilmRatings.Bad.DESCRIPTION;
  } else if (rating >= FilmRatings.Normal.RATING && rating < FilmRatings.Good.RATING) {
    return FilmRatings.Normal.DESCRIPTION;
  } else if (rating >= FilmRatings.Good.RATING && rating < FilmRatings.VeryGood.RATING) {
    return FilmRatings.Good.DESCRIPTION;
  } else if (rating >= FilmRatings.VeryGood.RATING && rating < FilmRatings.Awesome.RATING) {
    return FilmRatings.VeryGood.DESCRIPTION;
  }

  return FilmRatings.Awesome.DESCRIPTION;
};

export default getRating;
