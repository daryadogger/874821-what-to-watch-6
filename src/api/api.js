import camelize from '../api/camelize';

const BASE_URL = `https://6.react.pages.academy/wtw`;
const TIMEOUT = 5000;

class Api {
  constructor(options = {}) {
    this.baseUrl = BASE_URL;
    this.timeout = options.timeout || TIMEOUT;
  }

  processResponse(response) {
    return new Promise((resolve, reject) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        const error = new Error(`${response.status} - ${response.statusText}`);
        error.httpStatus = response.status;
        reject(error);
      }
    });
  }

  fetchWithTimeout(url, options = {}) {
    return Promise.race([
      fetch(url, {...options, credentials: `include`}),
      new Promise((_, reject) => {
        setTimeout(() => reject(`Ожидание ответа от сервера превышено`), this.timeout);
      }),
    ]);
  }

  async loadFilms() {
    const rs = await this.fetchWithTimeout(`${this.baseUrl}/films`);
    const data = await this.processResponse(rs);
    if (Array.isArray(data)) {
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
  }

  async loadPromoFilm() {
    const rs = await this.fetchWithTimeout(`${this.baseUrl}/films/promo`);
    const data = await this.processResponse(rs);
    if (typeof data === `object`) {
      const cameled = Object.keys(data).reduce((accumulator, currentValue)=> {
        accumulator[camelize(currentValue)] = data[currentValue];

        return accumulator;
      }, {});

      return cameled;
    }

    return null;
  }

  async loadFavoriteFilms() {
    const rs = await this.fetchWithTimeout(`${this.baseUrl}/favorite`);
    const data = await this.processResponse(rs);
    if (Array.isArray(data)) {
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
  }

  async postFavoriteFilm(id, status) {
    const rs = await this.fetchWithTimeout(`${this.baseUrl}/favorite/${id}/${status}`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify({id, status})
    });
    return await this.processResponse(rs);
  }

  async loadReviewsById(id) {
    const rs = await this.fetchWithTimeout(`${this.baseUrl}/comments/${id}`);
    const data = await this.processResponse(rs);
    if (Array.isArray(data)) {
      return data;
    }

    return null;
  }

  async postReviewById(id, comment) {
    const rs = await this.fetchWithTimeout(`${this.baseUrl}/comments/${id}`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(comment)
    });
    return await this.processResponse(rs);
  }

  async checkAuth() {
    const rs = await this.fetchWithTimeout(`${this.baseUrl}/login`);
    return await this.processResponse(rs);
  }

  async login(user) {
    const rs = await this.fetchWithTimeout(`${this.baseUrl}/login`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(user)
    });
    return await this.processResponse(rs);
  }
}

export default Api;
