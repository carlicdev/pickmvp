import React from 'react'
import Subscribe from './Subscribe'
import SubscribeForm from './SubscribeForm'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center overflow-hidden mb-10' style={{ backgroundImage: 'url(./ball.jpg)'}}>
        <div className='bg-slate-900 bg-opacity-85 h-full lg:p-20 p-5'>
            <div className='max-w-7xl w-full h-full mx-auto flex flex-wrap align-center items-center'>
                <div className='w-full flex flex-col justify-center'>
                    <p className='font-black text-gray-200 uppercase mb-5'>BEAT THE ODDS</p>
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

export default Hero