const SERVER_ADDRESS = `https://6.react.pages.academy/wtw`;

export const loadFilms = async () => {
  const responce = await fetch(`${SERVER_ADDRESS}/films`);

  if (responce.ok) {
    const data = await responce.json();
    return data.map((el) => ({
      id: el.id,
      name: el.name,
      posterImage: el.poster_image,
      previewImage: el.preview_image,
      backgroundImage: el.background_image,
      backgroundColor: el.background_color,
      videoLink: el.video_link,
      previewVideoLink: el.preview_video_link,
      description: el.description,
      rating: el.rating,
      scoresCount: el.scores_count,
      director: el.director,
      starring: el.starring,
      runTime: el.run_time,
      genre: el.genre,
      released: el.released,
      isFavorite: el.is_favorite
    }));
  }

  return false;
};
