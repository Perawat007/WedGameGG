import React, { useEffect } from 'react'
import { Loading } from 'components/shared'
import PortfolioStats from './components/PortfolioStats'
import FastTrade from './components/FastTrade'
import Holding from './components/Holding'
import MarketValue from './components/MarketValue'
import reducer from './store'
import { injectReducer } from 'store/index'
import { getCryptoDashboardData } from './store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'

injectReducer('cryptoDashboard', reducer)

const Daily_overview = () => {
    const dispatch = useDispatch()
    
    const {
        dataGame,logGame,
    } = useSelector((state) => state.cryptoDashboard.data.dashboardData)

    const statisticData = useSelector((state) => state.cryptoDashboard.data.dashboardData)

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = () => {
        dispatch(getCryptoDashboardData())
    }

    return (
        <div className="flex flex-col gap-4 h-full">
          <div className="grid grid-cols-1 xl:grid-cols-11 gap-4">
                 <FastTrade className="2xl:col-span-3 xl:col-span-4" />
            </div>
        <Holding data={logGame} dataview={statisticData} />

        <MarketValue
            className="2xl:col-span-8 xl:col-span-7"
            data={logGame}
        />
        </div>
    )
}

export default Daily_overview
