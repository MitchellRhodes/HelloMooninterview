import { useState } from 'react'
import { getAllCryptoQuotes, getSpecificCryptoLatestQuote } from '../../hello-moon-backend/src/priceData/queries'
import Transactions from '@/components/Transactions'
import PieChart from '@/components/PieChart'

export default async function Home() {

  // CREATED MOCK USER
  const mockUser = {
    portfolio: 1
  }

  // Created a dictionary to reference ids of various coins
  const cryptoDictionary = {
    "bitcoin": '1',
    "dogecoin":'74',
    'ethereum':'1027',
    'solana':'5426'
  }
  // Query/API calls =====================
  // const cryptoQuotes = await getAllCryptoQuotes()
  const bitCoinQuote = await getSpecificCryptoLatestQuote(+cryptoDictionary.bitcoin)
  const dogeCoinQuote = await getSpecificCryptoLatestQuote(+cryptoDictionary.dogecoin)
  const ethereumCoinQuote = await getSpecificCryptoLatestQuote(+cryptoDictionary.ethereum)
  const solanaCoinQuote = await getSpecificCryptoLatestQuote(+cryptoDictionary.solana)

// Destructuring the data from the  Coin market API
  const { status, data } = bitCoinQuote
  const { status:dogeStatus, data:dogeData } = dogeCoinQuote
  const { status:ethereumStatus, data:ethereumData } = ethereumCoinQuote
  const { status:solanaStatus, data:solanaData } = solanaCoinQuote

  // Getting the data of the base coin from the API call
  const bitcoinData = data[cryptoDictionary.bitcoin]
  const dogecoinData = dogeData[cryptoDictionary.dogecoin]
  const ethereumCoinData = ethereumData[cryptoDictionary.ethereum]
  const solanaCoinData = solanaData[cryptoDictionary.solana]

  // Converting the timestamps into something more legible
  const bitcoinDate = new Date(status.timestamp).toLocaleString()
  const dogecoinDate = new Date(dogeStatus.timestamp).toLocaleString()
  const ethereumCoinDate = new Date(ethereumStatus.timestamp).toLocaleString()
  const solanaCoinDate = new Date(solanaStatus.timestamp).toLocaleString()


  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 w-100">
      <main className="flex flex-col gap-8 row-start-2 w-100">
        <div>
          <h2 className='text-center text-3xl font-bold'>User Analytics</h2>
          <PieChart user={mockUser.portfolio}/>
        </div>
        <div className='flex justify-center'>
          <h1 className='text-3xl font-bold'>Current Market Values</h1>
        </div>
        <div className='flex flex-col gap-6 w-2/5 p-6 self-center'>
          <div className='flex flex-row justify-between pb-6'>
            <div>

              <h2 className='text-xl font-semibold'>Bitcoin:</h2>
              <p>${bitcoinData.quote.USD.price}</p>
            </div>
            <div>

              <h3 className='text-xl font-semibold'>Updated At:</h3>
              <p>{bitcoinDate}</p>
            </div>
          </div>
          <Transactions crypto={cryptoDictionary.bitcoin} user={mockUser.portfolio} coinType={'bitcoin'}/>

          <div className='flex flex-row justify-between pb-6'>
            <div>

              <h2 className='text-xl font-semibold'>Dogecoin:</h2>
              <p>${dogecoinData.quote.USD.price}</p>
            </div>
            <div>

              <h3 className='text-xl font-semibold'>Updated At:</h3>
              <p>{dogecoinDate}</p>
            </div>
          </div>
          <Transactions crypto={cryptoDictionary.dogecoin} user={mockUser.portfolio} coinType={'dogecoin'}/>

          <div className='flex flex-row justify-between pb-6'>
            <div>

              <h2 className='text-xl font-semibold'>Ethereum:</h2>
              <p>${ethereumCoinData.quote.USD.price}</p>
            </div>
            <div>

              <h3 className='text-xl font-semibold'>Updated At:</h3>
              <p>{ethereumCoinDate}</p>
            </div>
          </div>
          <Transactions crypto={cryptoDictionary.ethereum} user={mockUser.portfolio} coinType={'ethereum'}/>

          <div className='flex flex-row justify-between pb-6'>
            <div>

              <h2 className='text-xl font-semibold'>Solana:</h2>
              <p>${solanaCoinData.quote.USD.price}</p>
            </div>
            <div>

              <h3 className='text-xl font-semibold'>Updated At:</h3>
              <p>{solanaCoinDate}</p>
            </div>
          </div>
          <Transactions crypto={cryptoDictionary.solana} user={mockUser.portfolio} coinType={'solana'}/>

        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
