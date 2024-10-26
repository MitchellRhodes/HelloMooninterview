import axios from "axios"
import "dotenv/config";

// PROCESS.env errors, need to move forward for now...
export const apiKey = 'cd571c86-e16a-4f1a-804a-3b016f3d4c2e'
// const apiKey = process.env.COIN_MARKET_API_KEY
// console.log(apiKey, "API")

// Get all crypto quotes for the 4 coins expected.
export const getAllCryptoQuotes = async() => {

    const data = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC,ETH,SOL,DOGE`,
        {
            headers:{
                'X-CMC_PRO_API_KEY':apiKey
            }
        })
    return data.data
}

// Get quotes of specific coin 
export const getSpecificCryptoLatestQuote = async(id:number) => {

    const data = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${id}`,
        {
            headers:{
                'X-CMC_PRO_API_KEY':apiKey
            }
        })
    return data.data
}


