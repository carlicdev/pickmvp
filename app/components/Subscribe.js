import React from 'react'
import Logo from './Logo'
import SubscribeForm from './SubscribeForm'

const Subscribe = () => {
  return (
    <div className='w-full flex flex-col shadow bg-white mb-5'>
        <div className='w-full flex bg-slate-900 text-slate-100 p-5 flex-col items-center gap-5'>
            <Logo/>
            <p className='text-lg'>Recibe nuestras últimas selecciones directamente en tu correo.</p>
        </div>
        <div className='w-full p-5'>
            <SubscribeForm />
        </div>
    </div>
  )
}

export default Subscribe