import { FaStar } from 'react-icons/fa6'
import { FaBasketballBall, FaFootballBall } from "react-icons/fa";
import styleTime from '../utils/time'

const Active = ({title, picks}) => {
  return (
    <div className='card  border border-slate-200 rounded-lg'>
        <div className='flex p-5 bg-slate-900 text-slate-100 rounded-t-lg border-b-2 border-orange-700'>
            <p className='font-black text-2xl'>{title} Live Picks</p>
        </div>
        <div className='flex flex-col divide-y'>
            {
                picks.length === 0 ? 
                <div className='p-5'>
                    <p>No live picks.</p> 
                </div>
                : 
                ''
            }
            {
                picks.map((pick, index) => (
                    <div key={index} className='w-full p-5'>
                        <div className='flex mb-2'>
                            <div className='flex gap-2 ml-0 mr-auto align-center'>
                                <span className='text-orange-700 text-xl'>{pick.category.title === 'NBA' ? <FaBasketballBall/> : <FaFootballBall/> }</span>
                                <p className='font-bold text-lg'>{pick.selection}</p>
                            </div>
                            <p className='ml-auto mr-0'>{styleTime(pick.date)}</p>
                        </div>
                        <div className='flex mb-1'>
                            <div className='ml-0 mr-auto p-1 border bg-slate-900 border-black  rounded'>
                                <p className='ml-0 mr-auto text-slate-100'>{pick.type}</p>
                            </div>
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
                        <div className='flex'>
                            <p className='ml-0 mr-auto'>{pick.match}</p>
                            <p className='ml-auto mr-0 font-bold'>{pick.odds}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Active