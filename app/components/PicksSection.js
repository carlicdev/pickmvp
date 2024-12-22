import React from 'react'
import PickCard from './PickCard'
import { FaBullseye } from 'react-icons/fa6'

const PicksSection = ({picks, title}) => {
  return (
    <div className='max-w-7xl mx-auto h-auto bg-cover bg-center overflow-hidden my-10 rounded-lg' style={{ backgroundImage: 'url(./ball.jpg)'}}>
      <div className='bg-slate-900 bg-opacity-70 h-full lg:p-20 p-5'>
        <div className='flex gap-2 align-center'>
            <span className='text-orange-700 text-3xl'>
                <FaBullseye />
            </span>
            <p className='text-slate-200 text-2xl font-black mb-2'>{title} Picks & Best Bets</p>
        </div>
        <p className='text-slate-200 lg:text-lg'>We guide our picks and predictions with data, math and strategy.</p>
        <div className='max-w-7xl mx-auto w-full flex flex-wrap justify-center'>
            {
                picks.map((pick, index) => (
                    <div key={index} className='w-full lg:w-1/3 my-5 lg:my-0 p-5'>
                        <PickCard pick={pick} />
                    </div>
                ))
            }


      </div>
      </div>
  </div>
  )
}

export default PicksSection