// ============================================================
// La RST — Connexion PostgreSQL
// src/config/db.js
// ============================================================

import pkg from "pg";
import config from "../../config/config.js";

const { Pool } = pkg;

const pool = new Pool({
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
  ssl: config.database.ssl || false
});

const db = {
  query: (text, params) => pool.query(text, params)
};

export default db;
