// tests/mocks/dbMock.js
// Mock simple de la couche DB pour les tests unitaires

export const db = {
  query: jest.fn(async (_sql, _params) => {
    return { rows: [], rowCount: 0 };
  })
};
