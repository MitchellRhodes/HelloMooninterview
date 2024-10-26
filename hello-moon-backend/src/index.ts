import * as express from 'express';
import * as dotenv from 'dotenv';
import { createPgPool } from './db/createPgPool';
import { getAllCryptoQuotes} from './priceData/queries';


const cors = require('cors')
const pool = createPgPool()
dotenv.config();


const app = express();
const port = process.env.PORT;
console.log(`PORT: ${port}`);
app.use(cors())
app.use(express.json())


// HELLO MOON INTERVIEW APP API CALLS =======================================================

// GET ALL PORTFOLIOS
app.get('/portfolios', async (req, res) => {
    try {
      const data = await pool.query('SELECT * FROM portfolios')
      res.status(200).json(data.rows)
    } catch (err) {
      console.log(err)
      res.sendStatus(404)
    }
  });
// GET PORTFOLIO BY ID
app.get('/portfolios/:id', async (req, res) => {
    try {
      const data = await pool.query(`SELECT * FROM portfolios WHERE id=${+req.params.id}`)
      res.status(200).json(data.rows)
    } catch (err) {
      console.log(err)
      res.sendStatus(404)
    }
  });

// GET ALL TRANSACTIONS
app.get('/transactions', async (req, res) => {
    try {
      const data = await pool.query('SELECT * FROM portfolios')
      res.status(200).json(data.rows)
    } catch (err) {
      console.log(err)
      res.sendStatus(404)
    }
  });

  // GET transaction BY ID
app.get('/transactions/:id', async (req, res) => {
    try {
      const data = await pool.query(`SELECT * FROM transactions WHERE id=${+req.params.id}`)
      res.status(200).json(data.rows)
    } catch (err) {
      console.log(err)
      res.sendStatus(404)
    }
  });


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });