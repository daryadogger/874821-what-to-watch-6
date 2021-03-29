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
