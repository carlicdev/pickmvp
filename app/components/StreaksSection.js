
import Streak from './Streak'


const StreaksSection = () => {
  return (
    <div className='max-w-7xl mx-auto h-auto bg-cover bg-center overflow-hidden my-10 rounded-lg' style={{ backgroundImage: 'url(./warriors-nba.jpg)'}}>
      <div className='bg-slate-900 bg-opacity-70 h-full lg:p-20 p-5'>
        <div className='max-w-7xl mx-auto w-full flex flex-wrap justify-center'>
          <div className='w-full lg:w-1/3 my-5 lg:my-0'>
          <Streak 
                title={'all sports'}
                data={'3-2'}
                timelapse={'ayer'}
              />
          </div>
          <div className='w-full lg:w-1/3 my-5 lg:my-0'>
              <Streak 
                title={'NFL'}
                data={'2-1'}
                timelapse={'ayer'}
              />
          </div>
          <div className='w-full lg:w-1/3 my-5 lg:my-0'>
          <Streak 
                title={'NBA'}
                data={'1-1'}
                timelapse={'ayer'}
              />
          </div>
      </div>
      </div>
  </div>
  )
}

export default StreaksSection