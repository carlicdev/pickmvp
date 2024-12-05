import React from 'react'
import { FaStar, FaBasketballBall, FaFootballBall } from "react-icons/fa";
import styleDate from '../utils/date';
import styleTime from '../utils/time';

const PickCard = ({pick}) => {

  return (
    <div className='card w-full flex flex-col shadow'>
        <div className='w-full flex bg-slate-900 text-slate-100 p-5 border-b-4 border-orange-700'>
            <div className='flex gap-2'>
                <span className='text-orange-700 text-xl'>{pick.category.title === 'NBA' ? <FaBasketballBall/> : <FaFootballBall/> }</span>
                <p className='ml-0 mr-auto font-bold text-gray-200'>{pick.category.title}</p>
            </div>
            <p className='mr-0 ml-auto text-sm font-bold capitalize'>{styleTime(pick.date)}</p>
        </div>
        <div className='w-full p-5 '>
            <div className='flex'>
                <p className='ml-0 mr-auto text-slate-400'>{pick.type}</p>
                <div className='ml-auto mr-0 flex gap-2'>
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
            <div className='flex flex-col my-5'>
                <p className='text-xl font-black mb-1'>{pick.selection} <span className='text-sm text-slate-500 font-light'>({pick.odds})</span></p>
                <p className='text-slate-500'>{pick.match}</p>
            </div>
        </div>
    </div>
  )
}

export default PickCard