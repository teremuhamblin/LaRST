// tests/setupTests.js
// ============================================================
// Setup global pour les tests La RST
// ============================================================

import dotenv from "dotenv";

dotenv.config({ path: "./config/.env.test" });

// Optionnel : variables globales
global.__TEST_ENV__ = true;

// Hooks Jest
beforeAll(async () => {
  // Ex: connexion DB de test, migrations, etc.
});

afterAll(async () => {
  // Ex: fermeture de connexions, cleanup
});
