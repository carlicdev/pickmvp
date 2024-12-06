import React from 'react'

const getUnits = (arr) => {
    return arr.reduce((units, i) => {
        return i.result === 'W' ? units + (i.stars / Math.abs(i.odds) * 100) : units - i.stars ;
    }, 0); 
};

const OverallRecord = ({nbaPicks, nflPicks}) => {

    const nflWins = nflPicks.filter((pick) => pick.result === 'W')
    const nflLosses = nflPicks.filter((pick) => pick.result === 'L')

    const nbaWins = nbaPicks.filter((pick) => pick.result === 'W')
    const nbaLosses = nbaPicks.filter((pick) => pick.result === 'L')

    const nbaUnits = getUnits(nbaPicks)
    const nflUnits = getUnits(nflPicks)
  return (
<div className='w-full card shadow'>
    <div className='grid grid-cols-12 border-b-4 border-orange-700 bg-slate-900 text-gray-200 font-bold py-2'>
      <div className='col-span-4 text-center border-r border-gray-200 '>
        Liga
      </div>
      <div className='col-span-2 text-center border-r border-gray-200'>
        Ganados
      </div>
      <div className='col-span-2 text-center border-r border-gray-200'>
        Perdidos
      </div>
      <div className='col-span-2 text-center border-r border-gray-200'>
        Efectividad
      </div>
      <div className='col-span-2 text-center '>
        Unidades
      </div>
    </div>

    

    <div className='grid grid-cols-12 border-b border-gray-200 py-2'>
      <div className='col-span-4 text-center border-r border-gray-200 '>
        NFL
      </div>
      <div className='col-span-2 text-center border-r border-gray-200'>
        {nflWins.length}
      </div>
      <div className='col-span-2 text-center border-r border-gray-200'>
        {nflLosses.length}
      </div>
      <div className='col-span-2 text-center border-r border-gray-200'>
        {(nflWins.length / nflPicks.length * 100).toFixed(2)}%
      </div>
      <div className='col-span-2 text-center '>
        {nflUnits > 0 ? '+' : ''}{nflUnits.toFixed(2)}
      </div>
    </div>

    <div className='grid grid-cols-12 border-b border-gray-200 py-2'>
      <div className='col-span-4 text-center border-r border-gray-200 '>
        NBA
      </div>
      <div className='col-span-2 text-center border-r border-gray-200'>
        {nbaWins.length}
      </div>
      <div className='col-span-2 text-center border-r border-gray-200'>
        {nbaLosses.length}
      </div>
      <div className='col-span-2 text-center border-r border-gray-200'>
        {(nbaWins.length / nbaPicks.length * 100).toFixed(2)}%
      </div>
      <div className='col-span-2 text-center '>
        {nbaUnits > 0 ? '+' : ''}{nbaUnits.toFixed(2)}
      </div>
    </div>

  </div>
  )
}

export default OverallRecord