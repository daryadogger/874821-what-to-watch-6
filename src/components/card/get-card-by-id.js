import films from '../../mocks/films';

const getCardById = (id) => {
  const film = films.filter((obj) => obj.id === id);
  if (film.length === 0) {
    return null;
  } else {
    return film[0];
  }
};

export default getCardById;
