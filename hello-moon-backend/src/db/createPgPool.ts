import { Pool } from 'pg';

export function createPgPool(): Pool {
  return new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
  });
}