import * as express from 'express';
import * as dotenv from 'dotenv';
import { createPgPool } from './db/createPgPool';
import { getAllCryptoQuotes} from './priceData/queries';


const cors = require('cors')
const pool = createPgPool()
dotenv.config();


const app = express();
const port = 8888;
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
        // console.log(data.rows[0], 'HERE')
      res.status(200).json(data.rows[0])
    } catch (err) {
      console.log(err)
      res.sendStatus(404)
    }
  });

// Update PORTFOLIO BY ID With bought coin
app.put('/portfolios/:id', async (req, res) => {
    try {
      const data = await pool.query(`SELECT * FROM portfolios WHERE id=${+req.params.id}`)
      
      console.log(req, "REQ")
      const {body} = req
    //   const currentPortfolio = data.rows[0]
  
      const updatedPortfolio = {
        id:+req.params.id,
        bitcoin: body.bitcoin,
        dogecoin:body.dogecoin,
        ethereum:body.ethereum,
        solana:body.solana
      }
      console.log(updatedPortfolio, "UPDATE PORT")
  
      const updateQuery = await pool.query(`UPDATE portfolios
        SET bitcoin = ${updatedPortfolio.bitcoin}, dogecoin = ${updatedPortfolio.dogecoin}, ethereum = ${updatedPortfolio.ethereum}, solana = ${updatedPortfolio.solana}
        WHERE id = ${+req.params.id} RETURNING *`)
      
      res.status(200).json(updateQuery.rows[0])

      
      res.status(200).json()
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
      res.status(200).json(data.rows[0])
    } catch (err) {
      console.log(err)
      res.sendStatus(404)
    }
  });


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });