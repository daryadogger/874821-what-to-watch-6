const BASE_URL = `https://6.react.pages.academy/wtw`;
const TIMEOUT = 5000;
const STATUS_CODE = 200;

class Api {
  constructor(options = {}) {
    this.baseUrl = BASE_URL;
    this.timeout = options.timeout || TIMEOUT;
  }

  processResponse(response) {
    return new Promise((resolve, reject) => {
      if (response.status === STATUS_CODE) {
        resolve(response.json());
      } else {
        reject({
          status: response.status,
          statusText: response.statusText
        });
      }
    });
  }

  fetchWithTimeout(url, options = {}) {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) => {
        setTimeout(() => reject(`Ожидание ответа от сервера превышено`), this.timeout);
      }),
    ]);
  }

  async loadFilms() {
    return await this.fetchWithTimeout(`${this.baseUrl}/films`)
    .then(this.processResponse)
    .then((data) => {
      if (data.length) {
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
          isFavorite: el.is_favorite,
        }));
      }

      return null;
    });
  }
}

export default Api;
