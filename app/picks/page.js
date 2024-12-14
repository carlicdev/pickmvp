
import { getPicks } from '../services/graphql'
import Overview from '../components/Overview';
import Settled from '../components/Settled';
import Active from '../components/Active';
import CTABanner from '../components/CTABanner';
import MyLineChart from '../components/MyLineChart';
import ByStars from '../components/ByStars';
import WinningsGraph from '../components/WinningsGraph';

const PicksPage = async () => {
  const picks = await getPicks();

  const nflPicks = picks.filter((pick) => pick.category.title === 'NFL');
  const nbaPicks = picks.filter((pick) => pick.category.title === 'NBA');

  const livePicks = picks.filter((pick) => pick.result === null);
  const settledPicks = picks.filter((pick) => pick.result !== null)

  const liveNbaPicks = livePicks.filter((pick) => pick.category.title === 'NBA');
  const liveNflPicks = livePicks.filter((pick) => pick.category.title === 'NFL');

  const settledNbaPicks = settledPicks.filter((pick) => pick.category.title === 'NBA');
  const settledNflPicks = settledPicks.filter((pick) => pick.category.title === 'NFL');

  return (
    <>
        <div className='max-w-7xl mx-auto px-2 lg:px-0 my-10'>
            <Overview title='' picks={picks} />
        </div>
        <div className='max-w-7xl mx-auto px-2 lg:px-0 my-10'>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:pr-5'>          
              <WinningsGraph picks={settledPicks}/> 
            </div>
            <div className='w-full lg:w-1/2 lg:pl-5 my-10 lg:my-0'>          
              <Settled title='' picks={settledPicks} />
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-auto px-2 lg:px-0 my-10'>
          <ByStars title='' picks={settledPicks} />
        </div>
        <div className='max-w-7xl mx-auto px-2 lg:px-0 my-10'>
          <Active title='NFL' picks={livePicks} />
        </div>
        <CTABanner />
        <div className='max-w-7xl mx-auto px-2 lg:px-0 my-10'>
            <Overview title='NFL' picks={nflPicks} />
        </div>
        <div className='max-w-7xl mx-auto px-2 lg:px-0 my-10'>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:pr-5'>          
              <Active title='NFL' picks={liveNflPicks} />
            </div>
            <div className='w-full lg:w-1/2 lg:pl-5 my-10 lg:my-0'>          
              <Settled title='NFL' picks={settledNflPicks} />
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-auto px-2 lg:px-0 my-10'>
            <Overview title='NBA' picks={nbaPicks} />
        </div>
        <div className='max-w-7xl mx-auto px-2 lg:px-0 my-10'>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:pr-5'>          
              <Active title='NBA' picks={liveNbaPicks} />
            </div>
            <div className='w-full lg:w-1/2 lg:pl-5 my-10 lg:my-0'>          
              <Settled title='NBA' picks={settledNbaPicks} />
            </div>
          </div>
        </div>
    </>
  )
}

export default PicksPage