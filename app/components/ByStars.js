import { FaStar } from 'react-icons/fa6'
import MyLineChart from './MyLineChart';

const ByStars = ({title, picks}) => {
    const oneStarPicks = picks.filter((pick) => pick.stars === 1);
    const twoStarPicks = picks.filter((pick) => pick.stars === 2);
    const threeStarPicks = picks.filter((pick) => pick.stars === 3);

    const oneStarWins = oneStarPicks.filter((pick) => pick.result === 'W')
    const oneStarLoses = oneStarPicks.filter((pick) => pick.result === 'L')

    const twoStarWins = twoStarPicks.filter((pick) => pick.result === 'W')
    const twoStarLoses = twoStarPicks.filter((pick) => pick.result === 'L')

    const threeStarWins = threeStarPicks.filter((pick) => pick.result === 'W')
    const threeStarLoses = threeStarPicks.filter((pick) => pick.result === 'L')

  return (
    <div className='card  border border-slate-200 rounded-lg'>
        <div className='flex p-5 bg-slate-900 text-slate-100 rounded-t-lg border-b-2 border-orange-700'>
            <p className='font-black text-2xl'>{title} Por Unidades</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 divide-x divide-y'>
            <div className='col-span-1 flex flex-col gap-1 p-5'>
                <span className='text-2xl text-orange-700 mx-auto '>
                    <FaStar />
                </span>
                <div className='grid grid-cols-3  gap-1 p-5 justify-center divide-x border-y border-slate-200 mt-2'>
                    <div className='col-span-1 flex flex-col gap-1 p-5'>
                        <p>Ganados</p>
                        <p className='font-bold text-xl'>{oneStarWins.length}</p>
                    </div>
                    <div className='col-span-1 flex flex-col gap-1 p-5'>
                        <p>Perdidos</p>
                        <p className='font-bold text-xl'>{oneStarLoses.length}</p>
                    </div>
                    <div className='col-span-1 flex flex-col gap-1 p-5'>
                        <p>%</p>
                        <p className='font-bold text-xl'>{(oneStarWins.length / oneStarPicks.length * 100).toFixed(0)}%</p>
                    </div>
                </div>
                <div className=''>
                    <MyLineChart picks={oneStarPicks} />
                </div>
            </div>
            <div className='col-span-1 flex flex-col gap-1 p-5'>
                <div className='flex gap-1 justify-center'>
                    <span className='text-2xl text-orange-700'>
                        <FaStar />
                    </span>
                    <span className='text-2xl text-orange-700'>
                        <FaStar />
                    </span>
                </div>
                <div className='grid grid-cols-3  gap-1 p-5 justify-center divide-x border-y border-slate-200 mt-2'>
                <div className='col-span-1 flex flex-col gap-1 p-5'>
                        <p>Ganados</p>
                        <p className='font-bold text-xl'>{twoStarWins.length}</p>
                    </div>
                    <div className='col-span-1 flex flex-col gap-1 p-5'>
                        <p>Perdidos</p>
                        <p className='font-bold text-xl'>{twoStarLoses.length}</p>
                    </div>
                    <div className='col-span-1 flex flex-col gap-1 p-5'>
                        <p>%</p>
                        <p className='font-bold text-xl'>{(twoStarWins.length / twoStarPicks.length * 100).toFixed(0)}%</p>
                    </div>
                </div>
                <div className=''>
                    <MyLineChart picks={twoStarPicks} />
                </div>
            </div>
            <div className='col-span-1 flex flex-col gap-1 p-5'>
            <div className='flex gap-1 justify-center'>
                    <span className='text-2xl text-orange-700'>
                        <FaStar />
                    </span>
                    <span className='text-2xl text-orange-700'>
                        <FaStar />
                    </span>
                    <span className='text-2xl text-orange-700'>
                        <FaStar />
                    </span>
                </div>
                <div className='grid grid-cols-3  gap-1 p-5 justify-center divide-x border-y border-slate-200 mt-2'>
                <div className='col-span-1 flex flex-col gap-1 p-5'>
                        <p>Ganados</p>
                        <p className='font-bold text-xl'>{threeStarWins.length}</p>
                    </div>
                    <div className='col-span-1 flex flex-col gap-1 p-5'>
                        <p>Perdidos</p>
                        <p className='font-bold text-xl'>{threeStarLoses.length}</p>
                    </div>
                    <div className='col-span-1 flex flex-col gap-1 p-5'>
                        <p>%</p>
                        <p className='font-bold text-xl'>{(threeStarWins.length / threeStarPicks.length * 100).toFixed(0)}%</p>
                    </div>
                </div>
                <div className=''>
                    <MyLineChart picks={threeStarPicks} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ByStars