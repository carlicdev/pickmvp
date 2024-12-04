import React from 'react'
import PickCard from '../components/PickCard'
import { getLivePicks, getPicks, getSettledNbaPicks, getSettledNflPicks, getSettledPicks } from '../services/graphql'
import OverallRecord from '../components/OverallRecord';
import AllResults from '../components/AllResults';

const PicksPage = async () => {
  const livePicks = await getLivePicks();
  const picks = await getPicks();
  const settledPicks = await getSettledPicks();
  const settledNbaPicks = await getSettledNbaPicks();
  const settledNflPicks = await getSettledNflPicks();

  return (
    <>
        <div className="max-w-7xl mx-auto">
            <p className='text-4xl font-black my-10'>Últimos Picks</p>
            <div className='flex flex-wrap'>
                {
                    livePicks.map((pick) => (
                      <div className='w-full md:w-1/2 lg:w-1/3 px-5 mb-5'>
                        <PickCard pick={pick} />
                      </div>
                    ))
                }
            </div>
        </div>
        <div className="max-w-7xl mx-auto my-10">
            <p className='text-4xl font-black my-10'>Record Por Liga</p>
            <OverallRecord nbaPicks={settledNbaPicks} nflPicks={settledNflPicks}/>
        </div>
        <div className="max-w-7xl mx-auto my-10">
            <p className='text-4xl font-black my-10'>Resultados</p>
            <AllResults picks={settledPicks} />
        </div>
    </>
  )
}

export default PicksPage