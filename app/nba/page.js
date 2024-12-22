import React from 'react'
import PostList from '../components/PostList'
import Subscribe from '../components/Subscribe'
import { getNbaPosts, getNbaPicks } from '../services/graphql'
import Overview from '../components/Overview'
import Active from '../components/Active'
import Settled from '../components/Settled'
import CTABanner from '../components/CTABanner'
import MyLineChart from '../components/MyLineChart'
import WinningsGraph from '../components/WinningsGraph'
import ByStars from '../components/ByStars'
import PicksSection from '../components/PicksSection'


const NbaPage = async () => {
    const picks = await getNbaPicks();
    const posts = await getNbaPosts();
    const livePicks = picks.filter((pick) => pick.result === null);
    const settledPicks = picks.filter((pick) => pick.result !== null)
    
  return (
    <>
    <div className='max-w-7xl mx-auto px-2 lg:px-0 mt-10'>
        <PicksSection title='NBA' picks={livePicks} />
    </div>
    <div className='max-w-7xl mx-auto px-2 lg:px-0 mt-10'>
        <Overview title='NBA' picks={picks} />
    </div>
    <div className='max-w-7xl mx-auto px-2 lg:px-0 my-10'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:pr-5'>          
          <WinningsGraph picks={settledPicks}/>
        </div>
        <div className='w-full lg:w-1/2 lg:pl-5 my-10 lg:my-0'>          
          <Settled title='NBA' picks={settledPicks} />
        </div>
      </div>
    </div>
    <div className='max-w-7xl mx-auto px-2 lg:px-0 my-10'>
          <ByStars title='NBA' picks={settledPicks} />
    </div>

    <CTABanner />
        <div className="max-w-7xl mx-auto my-10 px-2 lg:px-0">
            <div className='flex flex-wrap'>
                <div className="w-full flex flex-wrap lg:w-2/3">
                <PostList posts={posts.reverse()} />
                </div>
                <div className="w-full lg:w-1/3 px-5 lg:pl-5 lg:pr-0">
                <div className="flex flex-col gap-5">
                    <Subscribe />
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NbaPage