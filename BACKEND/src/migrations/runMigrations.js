require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pool = require('../config/db');

async function runMigrations() {
  const client = await pool.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        filename VARCHAR(255) PRIMARY KEY,
        executed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    const migrationsDir = __dirname;
    const files = fs
      .readdirSync(migrationsDir)
      .filter((file) => file.endsWith('.sql'))
      .sort();

    for (const file of files) {
      const { rows } = await client.query(
        'SELECT 1 FROM schema_migrations WHERE filename = $1',
        [file]
      );

      if (rows.length > 0) {
        console.log(`⏭️  Migration déjà exécutée : ${file}`);
        continue;
      }

      const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
      console.log(`🚀 Exécution de la migration : ${file}`);
      await client.query(sql);
      await client.query(
        'INSERT INTO schema_migrations (filename) VALUES ($1)',
        [file]
      );
      console.log(`✅ Migration terminée : ${file}`);
    }
  } catch (error) {
    console.error('❌ Erreur lors des migrations :', error);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

runMigrations();
