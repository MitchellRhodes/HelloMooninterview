import {createPgPool} from './createPgPool';

(async () => {
  const pool = createPgPool();
  await pool.query(`
    INSERT INTO portfolios (bitcoin, dogecoin, ethereum, solana)
    VALUES
        ('1','0','0','3')
  `);
  console.log('Done');
})();