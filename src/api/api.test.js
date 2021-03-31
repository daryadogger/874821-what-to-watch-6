import Api from './api';

afterEach(() => jest.clearAllMocks());
describe(`Тестирование api 'loadFilms'`, () => {
  it(`Возвращает null, если сервер вернул не массив`, async () => {

    const mockFetchWithTimeout = Api.prototype.fetchWithTimeout = jest.fn();
    const mockProcessResponse = Api.prototype.processResponse = jest.fn();

    mockFetchWithTimeout.mockImplementation(() => Promise.resolve(true));
    mockProcessResponse.mockImplementation(() => Promise.resolve({}));
    const api = new Api();
    const data = await api.loadFilms();
    expect(data).toBeNull();
  });

  it(`добавляет httpStatus к объекту исключения если отклик не ok`, async () => {
    const api = new Api();
    const httpStatus = 500;
    try {
      await api.processResponse({
        ok: false,
        status: httpStatus,
        statusText: `server error`
      });
    } catch (e) {
      expect(e.httpStatus).toBe(httpStatus);
    }
  });
});

describe(`Тестирование api 'loadPromoFilm'`, () => {
  it(`Возвращает объект`, async () => {
    const film = {};

    const mockFetchWithTimeout = Api.prototype.fetchWithTimeout = jest.fn();
    const mockProcessResponse = Api.prototype.processResponse = jest.fn();

    mockFetchWithTimeout.mockImplementation(() => Promise.resolve(true));
    mockProcessResponse.mockImplementation(() => Promise.resolve({}));
    const api = new Api();
    const data = await api.loadPromoFilm();
    expect(data).toEqual(film);
  });

});

describe(`Тестирование api 'loadFavoriteFilms'`, () => {
  it(`Возвращает null, если сервер вернул не массив`, async () => {

    const mockFetchWithTimeout = Api.prototype.fetchWithTimeout = jest.fn();
    const mockProcessResponse = Api.prototype.processResponse = jest.fn();

    mockFetchWithTimeout.mockImplementation(() => Promise.resolve(true));
    mockProcessResponse.mockImplementation(() => Promise.resolve({}));
    const api = new Api();
    const data = await api.loadFavoriteFilms();
    expect(data).toBeNull();
  });

});

describe(`Тестирование api 'loadReviewsById'`, () => {
  it(`Возвращает null, если сервер вернул не массив`, async () => {

    const mockFetchWithTimeout = Api.prototype.fetchWithTimeout = jest.fn();
    const mockProcessResponse = Api.prototype.processResponse = jest.fn();

    mockFetchWithTimeout.mockImplementation(() => Promise.resolve(true));
    mockProcessResponse.mockImplementation(() => Promise.resolve({}));
    const api = new Api();
    const data = await api.loadReviewsById(42);
    expect(data).toBeNull();
  });

});

describe(`Тестирование api 'checkAuth'`, () => {
  it(`Возвращает объект данных о пользователе`, async () => {
    const mockFetchWithTimeout = Api.prototype.fetchWithTimeout = jest.fn();
    const mockProcessResponse = Api.prototype.processResponse = jest.fn();

    mockFetchWithTimeout.mockImplementation(() => Promise.resolve(true));
    mockProcessResponse.mockImplementation(() => Promise.resolve({}));
    const api = new Api();
    const data = await api.checkAuth();
    expect(data).toBeInstanceOf(Object);
  });

});

describe(`Тестирование api 'login'`, () => {
  it(`Возвращает объект данных о пользователе`, async () => {
    const user = {
      email: `Oliver.conner@gmail.com`,
      password: `12345678`
    };
    const mockFetchWithTimeout = Api.prototype.fetchWithTimeout = jest.fn();
    const mockProcessResponse = Api.prototype.processResponse = jest.fn();

    mockFetchWithTimeout.mockImplementation(() => Promise.resolve(true));
    mockProcessResponse.mockImplementation(() => Promise.resolve({}));
    const api = new Api();
    const data = await api.login(user);
    expect(data).toBeInstanceOf(Object);
  });

});

describe(`Тестирование api 'postReviewById'`, () => {
  it(`Возвращает объект данных о комментарии`, async () => {
    const id = 42;
    const comment = ``;
    const mockFetchWithTimeout = Api.prototype.fetchWithTimeout = jest.fn();
    const mockProcessResponse = Api.prototype.processResponse = jest.fn();

    mockFetchWithTimeout.mockImplementation(() => Promise.resolve(true));
    mockProcessResponse.mockImplementation(() => Promise.resolve({}));
    const api = new Api();
    const data = await api.postReviewById(id, comment);
    expect(data).toBeInstanceOf(Object);
  });

});

describe(`Тестирование api 'postFavoriteFilm'`, () => {
  it(`Возвращает объект данных о фильме, добавленном к просмотру`, async () => {
    const id = 42;
    const status = 1;
    const mockFetchWithTimeout = Api.prototype.fetchWithTimeout = jest.fn();
    const mockProcessResponse = Api.prototype.processResponse = jest.fn();

    mockFetchWithTimeout.mockImplementation(() => Promise.resolve(true));
    mockProcessResponse.mockImplementation(() => Promise.resolve({}));
    const api = new Api();
    const data = await api.postReviewById(id, status);
    expect(data).toBeInstanceOf(Object);
  });

});
