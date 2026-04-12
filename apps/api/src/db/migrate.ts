import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { pool } from './pool.js';

export async function runMigrations() {
  const migrationsDir = resolve(process.cwd(), 'sql', 'migrations');

  await pool.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      id TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  const files = (await readdir(migrationsDir))
    .filter((name) => name.endsWith('.sql'))
    .sort((a, b) => a.localeCompare(b));

  for (const fileName of files) {
    const existing = await pool.query('SELECT 1 FROM schema_migrations WHERE id = $1', [fileName]);

    if (existing.rowCount && existing.rowCount > 0) {
      continue;
    }

    const sqlPath = resolve(migrationsDir, fileName);
    const sql = await readFile(sqlPath, 'utf8');
    const client = await pool.connect();

    try {
      await client.query('BEGIN');
      await client.query(sql);
      await client.query('INSERT INTO schema_migrations (id) VALUES ($1)', [fileName]);
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }
}
