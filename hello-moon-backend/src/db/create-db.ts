import {createPgPool} from './createPgPool';

(async () => {
  const pool = createPgPool();

  /*
  portfolio table needs =====
  userid if needed
  
//   MAY NEED TO SEE THE API RESULT. MAY NEED MORE DECIMAL POINTS
   Bitcoin: string, 
   Solana: string, 
   Ethereum: string,
   Dogecoin:string
  */

  await pool.query(`
    CREATE TABLE portfolios (
        id SERIAL PRIMARY KEY,
        bitcoin  decimal,
        solana  decimal,
        ethereum  decimal,
        dogecoin decimal
    )
  `);

  /**
   * transactions table
   * need for previous values of portfolio
   * need transaction date for display and ordering of time
    now take the coin type and the value of the new and old
   */
  await pool.query(`
    CREATE TABLE transactions (
        id SERIAL PRIMARY KEY,
        transaction_date timestamp default now(),
        portfolio_id integer,
        coin_type varchar(255),
        value_new varchar(255),
        value_old varchar(255)
    )
  `);

  console.log('Done');
  process.exit(1)
})();

