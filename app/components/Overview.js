import React from 'react'

const getUnits = (arr) => {
    return arr.reduce((units, i) => {
        if (i.result === 'D') {
            return units; // No suma ni resta si el resultado es 'D'
        }
        return i.result === 'W' 
            ? units + (i.stars / Math.abs(i.odds) * 100) 
            : units - i.stars;
    }, 0);
};

const Overview = ({title, picks}) => {
    const settledPicks = picks.filter((pick) => pick.result !== null)
    const livePicks = picks.filter((pick) => pick.result === null);
    const totalUnits = getUnits(settledPicks);
    const betUnits = settledPicks.reduce((units, i) => units + (i.stars || 0), 0);
    const wonPicks = picks.filter((pick) => pick.result === 'W')
    const lostPicks = picks.filter((pick) => pick.result === 'L')
    const winPercentage = (wonPicks.length / (wonPicks.length + lostPicks.length) * 100).toFixed(2)

  return (
    <div className='card  border border-slate-200 rounded-lg'>
        <div className='flex p-5 bg-slate-900 text-slate-100 rounded-t-lg border-b-2 border-orange-700'>
            <p className='font-black text-2xl'>{title} Overview</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-y'>
            <div className='col-span-1 flex flex-col gap-1 p-5'>
                <p>Unidades Ganadas</p>
                <p className='font-bold text-xl'>{totalUnits > 0 ? '+' : ''}{totalUnits.toFixed(2)}</p>
            </div>
            <div className='col-span-1 flex flex-col gap-1 p-5'>
                <p>Unidades Apostadas</p>
                <p className='font-bold text-xl'>{betUnits}</p>
            </div>
            <div className='col-span-1 flex flex-col gap-1 p-5'>
                <p>Picks Activos</p>
                <p className='font-bold text-xl'>{livePicks.length}</p>
            </div>
            <div className='col-span-1 flex flex-col gap-1 p-5'>
                <p>Picks Resueltos</p>
                <p className='font-bold text-xl'>{picks.length - livePicks.length}</p>
            </div>
            <div className='col-span-1 flex flex-col gap-1 p-5'>
                <p>Picks Ganados</p>
                <p className='font-bold text-xl'>{wonPicks.length}</p>
            </div>
            <div className='col-span-1 flex flex-col gap-1 p-5'>
                <p>Picks Perdidos</p>
                <p className='font-bold text-xl'>{lostPicks.length}</p>
            </div>
            <div className='col-span-1 flex flex-col gap-1 p-5'>
                <p>Picks Totales</p>
                <p className='font-bold text-xl'>{picks.length}</p>
            </div>
            <div className='col-span-1 flex flex-col gap-1 p-5'>
                <p>Efectividad</p>
                <p className='font-bold text-xl'>{winPercentage}%</p>
            </div>
        </div>
    </div>
  )
}

export default Overview