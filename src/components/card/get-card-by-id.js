import films from '../../mocks/films';

const getCardById = (id) => {
  const film = films.filter((obj) => obj.id === id);
  return film[0];
};

export default getCardById;
