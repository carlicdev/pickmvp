import { FaStar, FaRegCircleCheck, FaRegCircleXmark, FaRegCircle } from 'react-icons/fa6'
import { FaBasketballBall, FaFootballBall } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";

const Settled = ({title, picks}) => {
  return (
    <div className='card  border border-slate-200 rounded-lg'>
        <div className='flex p-5 bg-slate-900 text-slate-100 rounded-t-lg border-b-2 border-orange-700'>
            <p className='font-black text-2xl'>{title} Settled Picks</p>
        </div>
        <div className='flex flex-col divide-y'>
            {
                picks.map((pick, index) => (
                    <div key={index} className='w-full p-5'>
                        <div className='flex mb-2'>
                            <div className='flex gap-2 ml-0 mr-auto align-center'>
                                <span className='text-orange-700 text-xl'>{pick.category.title === 'NBA' ? <FaBasketballBall/> : <FaFootballBall/> }</span>
                                <p className='font-bold text-lg'>{pick.selection}</p>
                                <div>
                                {pick.result === 'W' ? (
                                    <span className='text-green-400 text-2xl'>
                                    <FaRegCircleCheck />
                                    </span>
                                ) : pick.result === 'D' ? (
                                    <span className='text-yellow-400 text-2xl'>
                                    <FiMinusCircle /> 
                                    </span>
                                ) : (
                                    <span className='text-red-600 text-2xl'>
                                    <FaRegCircleXmark />
                                    </span>
                                )}
                                </div>
                            </div>
                            <div className="flex gap-1 align-center">
                                <p className='text-lg ml-0 mr-auto'>Profit:</p>
                                <p 
                                className={`font-bold text-lg ${
                                    pick.result === 'W' 
                                    ? 'text-green-500' 
                                    : pick.result === 'D' 
                                        ? 'text-yellow-500' 
                                        : 'text-red-600'
                                }`}
                                >
                                {pick.result === 'W' 
                                    ? (pick.stars / Math.abs(pick.odds) * 100).toFixed(2) 
                                    : pick.result === 'D' 
                                    ? '0' 
                                    : `-${pick.stars}`}
                                </p>
                                <span className="text-orange-700 text-xl"><FaStar /></span>
                            </div>
                        </div>
                        <div className='flex mb-2'>
                            <div className='p-1 border bg-slate-900 border-black rounded'>
                                <p className='ml-0 mr-auto text-slate-100'>{pick.type}</p>
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

export default Settled