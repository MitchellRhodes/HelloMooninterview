import {createPgPool} from './createPgPool';

(async () => {
  const pool = createPgPool();

    await pool.query(`DROP table portfolios`)
    await pool.query(`DROP table transactions`)

  console.log('Done');
})();