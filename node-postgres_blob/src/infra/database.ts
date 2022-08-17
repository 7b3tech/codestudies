import pgPromise from 'pg-promise';

const pgp = pgPromise({/* Initialization Options */ });

export const db = pgp({
  user: 'postgres',
  password: 'docker',
  host: 'db',
  port: 5432,
  database: 'blog'
});
