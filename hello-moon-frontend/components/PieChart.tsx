'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts';

interface ChartProps{
    user:number
}
const PieChart = (props:ChartProps) => {

    const {user} = props
    const [chartData, setChartData] = useState<any[][]>([])

    useEffect(()=>{

        axios.get(`http://localhost:8888/portfolios/${user}`).then((res)=>{
            return res.data
        }).then((data)=>{
            const formattedData = []
            formattedData.push(['Coin', 'Coin Balance'])

            for(const [key, value] of Object.entries(data)){
                if(key !== 'id'){
                    formattedData.push([key,parseFloat(value as string)])
                }
            }
            setChartData(formattedData)
        })
    },[])

    return (
        <Chart
            chartType="PieChart"
            data={chartData}
            width={"100%"}
            height={"400px"}
        />
    )
}

export default PieChart