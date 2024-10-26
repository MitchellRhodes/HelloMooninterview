'use client'
import axios from 'axios'
import { useState } from 'react'

interface TransactionProps {
    crypto: string,
    user: number,
    coinType: string
}


const Transactions = (props: TransactionProps) => {
    const { crypto, user, coinType } = props
    // States
    const [coinBuy, setCoinBuy] = useState('')
    const [coinSell, setCoinSell] = useState('')
    const [error, setError] = useState('');


    // Buy function

    const buyCoin = async () => {

        // will need to put in how much they want to buy
        // add the amount of coins to the portfolio

        // const id = crypto
        const response = await fetch(`http://localhost:8888/portfolios/${user}`)
        const jsonResponse = await response.json()

        if (response.ok) {

            const newValue = +jsonResponse[coinType] + +coinBuy
            const updateField = {...jsonResponse, [coinType]: newValue}

            await axios.put(`http://localhost:8888/portfolios/${user}`,
                updateField
            );

        } else {
            setError('Portfolio not found')
        }
    

        // console.log(crypto, "ID", bitcoinBuy, "AMOUNT")
    }

    const sellCoin = async() => {
        // get portfolio amount
        // make sure sell amount isn't greater than amount they have
        // remove sold amount from portfolio
        const response = await fetch(`http://localhost:8888/portfolios/${user}`)
        const jsonResponse = await response.json()

        if (response.ok) {

            const newValue = +jsonResponse[coinType] - +coinSell

            console.log(newValue, "NEW VALUE SELL")
            if(newValue < 0){
            setError('Not enough Coin')

            }else {

                const updateField = {...jsonResponse, [coinType]: newValue}
                
                await axios.put(`http://localhost:8888/portfolios/${user}`,
                    updateField
                );
            }
            
        } else {
            setError('Portfolio not found')
        }
    }

    return (
        <div className='flex flex-row justify-center gap-20'>
            <div className='flex flex-col gap-4'>
                <input type="text" placeholder='EX: 1.5' className='pb-2 border-solid border-2 border-black' onChange={(evt) => { setCoinBuy(evt.currentTarget.value) }} />
                {+coinBuy <= 0 ? (
                    <button className='bg-gray-600 p-2 px-4 rounded-md text-white text-xl' disabled>Buy Coin</button>
                ) : (
                    <button className='bg-green-500 p-2 px-4 rounded-md text-white text-xl' onClick={buyCoin}>Buy Coin</button>
                )}
            </div>
            <div className='flex flex-col gap-4'>
                <input type="text" placeholder='EX: 1.5' className='pb-2 border-solid border-2 border-black' onChange={(evt) => { setCoinSell(evt.currentTarget.value) }} />
                {+coinSell <= 0 ? (
                    <button className='bg-gray-600 p-2 px-4 rounded-md text-white text-xl' disabled>Sell Coin</button>
                ) : (
                    <button className='bg-blue-500 p-2 px-4 rounded-md text-white text-xl' onClick={sellCoin}>Sell Coin</button>
                )}
            </div>
            
            {error && (
                <div>
                    <h3 className='text-red-500 text-2xl'>ERROR</h3>
                    <p className='text-red-500'>{error}</p>
                </div>
            )}
        </div>

    )
}

export default Transactions