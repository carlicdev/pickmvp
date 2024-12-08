import SubscribeForm from "./SubscribeForm"

const CTABanner = () => {
  return (
    <div className='max-w-7xl mx-auto h-auto bg-cover bg-center overflow-hidden my-10 rounded-lg' style={{ backgroundImage: 'url(./ball.jpg)'}}>
        <div className='bg-slate-900 bg-opacity-70 h-full lg:p-20 p-5'>
            <div className='max-w-7xl w-full h-full mx-auto flex flex-wrap align-center items-center'>
                <div className='w-full flex flex-col justify-center'>
                    <p className='font-black text-5xl lg:text-7xl text-slate-100 capitalize mb-5 text-gray-200'>El <span className='text-orange-600'>MVP</span> de las <br/>apuestas deportivas.</p>
                    <p className='text-lg lg:text-2xl text-slate-100 text-gray-200 mb-5'>Lleva tu juego de apuestas a otro nivel.</p>
                    <div className='my-5'>
                        <SubscribeForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTABanner