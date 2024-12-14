import React from 'react'
import MyLineChart from './MyLineChart'

const WinningsGraph = ({picks}) => {
  return (
    <div className='card  border border-slate-200 rounded-lg'>
        <div className='flex p-5 bg-slate-900 text-slate-100 rounded-t-lg border-b-2 border-orange-700'>
            <p className='font-black text-2xl'>Ganancias</p>
        </div>
        <div className='p-5'>
            <MyLineChart picks={picks} />
        </div>
    </div>
  )
}

export default WinningsGraph