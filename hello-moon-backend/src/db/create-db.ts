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
        bitcoin  varchar(255),
        solana  varchar(255),
        ethereum  varchar(255),
        dogecoin varchar(255)
    )
  `);

  /**
   * transactions table
   * need for previous values of portfolio
   * need transaction date for display and ordering of time
   * coin_in for the coin bought
   * coin_out for the coin sold
   * value in and out for the price being bought and sold
   */
  await pool.query(`
    CREATE TABLE transactions (
        id SERIAL PRIMARY KEY,
        transaction_date timestamp default now(),
        portfolio_id integer,
        coin_in varchar(255),
        value_in varchar(255),
        coin_out varchar(255),
        value_out varchar(255)
    )
  `);

  console.log('Done');
  process.exit(1)
})();

