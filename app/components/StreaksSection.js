
import Streak from './Streak'


const StreaksSection = () => {
  return (
    <div className='max-w-7xl mx-auto w-full flex flex-wrap -mt-48 mb-20 justify-center'>
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
  )
}

export default StreaksSection