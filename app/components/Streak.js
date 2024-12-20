

const Streak = ({title, timelapse, data}) => {
  return (
    <div className='max-w-80 text-center mx-auto'>
        <div className='flex px-15 justify-center w-full mx-auto'>
            <div className='bg-black p-5 rounded-t-lg w-[200px]'>
                <p className='font-black text-orange-700 text-2xl uppercase'>{title}</p>
            </div>
        </div>
        <div className='p-5 card border border-slate-200 rounded-lg shadow-lg'>
          <p className='text-slate-900 text-5xl lg:text-7xl font-black'>{data}</p>
        </div>
        <div className='flex px-15 justify-center w-full  mx-auto'>
            <div className='bg-black p-5 rounded-b-lg w-[200px]'>
                <p className='text-slate-100 text-lg capitalize'>{timelapse}</p>
            </div>
        </div>
    </div>
  )
}

export default Streak