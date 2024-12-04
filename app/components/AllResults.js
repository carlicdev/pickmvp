import React from 'react'
import styleDate from '../utils/date'
import { FaStar, FaRegCircleCheck, FaRegCircleXmark } from 'react-icons/fa6'

const AllResults = ({picks}) => {
  return (
<div className='w-full card shadow'>
    <div className='bg-slate-900 text-gray-200 font-bold grid grid-cols-12 py-2 border-b-4 border-orange-700'>
        <div className='col-span-2 text-center border-r border-gray-200 '>
        Pick
      </div>
      <div className='hidden md:block col-span-1 text-center border-r border-gray-200 '>
        Odds
      </div>
      <div className='col-span-3 md:col-span-1 text-center border-r border-gray-200'>
        Unidades
      </div>
      <div className='hidden md:block col-span-1 text-center border-r border-gray-200 '>
        Liga
      </div>
      <div className='col-span-3 text-center border-r border-gray-200'>
        Partido
      </div>
      <div className='col-span-3 text-center border-r border-gray-200'>
        Fecha
      </div>
      <div className='col-span-1 text-center '>
        Resultado
      </div>
    </div>

    {
        picks.map((pick) => (
            <div key={pick.id} className='grid grid-cols-12 border-b border-gray-200 py-2'>
                <div className='col-span-2 text-center border-r border-gray-200 '>
                    {pick.selection}
                </div>
                <div className='hidden md:block col-span-1 text-center border-r border-gray-200 '>
                     {pick.odds}
                </div>
                <div className='col-span-3 md:col-span-1 text-center border-r border-gray-200'>
                    <div className='ml-auto mr-0 flex gap-2 items-center justify-center'>
                        <span className={`${pick.stars >= 1 ? 'text-orange-700' : 'text-slate-200'} text-xl`}>
                            <FaStar />
                        </span>
                        <span className={`${pick.stars >= 2 ? 'text-orange-700' : 'text-slate-200'} text-xl`}>
                            <FaStar />
                        </span>
                        <span className={`${pick.stars >= 3 ? 'text-orange-700' : 'text-slate-200'} text-xl`}>
                            <FaStar />
                        </span>
                    </div>
                </div>
                <div className='hidden md:block col-span-1 text-center border-r border-gray-200 '>
                    {pick.category.title}
                </div>
                <div className='col-span-3 text-center border-r border-gray-200'>
                    {pick.match}
                </div>
                <div className='col-span-3 text-center border-r border-gray-200'>
                    {styleDate(pick.date)}
                </div>
                <div className='col-span-1 flex items-center justify-center '>
                    {
                    pick.result === 'W' ?
                    <span className='text-green-400 text-2xl '>
                        <FaRegCircleCheck />
                    </span>
                    :
                    <span className='text-red-600 text-2xl'>
                        <FaRegCircleXmark />
                    </span>
                    }
                </div>
            </div>           
        ))
    }
  </div>
  )
}

export default AllResults