"use client"

import { redirect } from 'next/navigation'
import { useState } from 'react'

const SubscribeForm = ( ) => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
  
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  email: email
                }) 
            })
    
            const data = await response.json();

            if (data.status === 200) { 
              setEmail('')
              setSuccess(true)
            }
        } catch (err) {
            console.log('error:', err)
        }
        
    }

    if (success) {
        redirect('/confirmation')
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Ingresa tu correo electrónico'
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full text-lg text-gray-900 outline-none focus:outline-slate-500  my-2 py-2 px-3 text-lg border border-gray-100 '
            />
            <button 
                type='submit'
                className='shadow bg-orange-700 hover:bg-orange-800 text-2xl text-slate-100 w-full py-5 mt-4 mb-2 mx-auto text-lg'>
                {!success ? 'Suscribirse' : 'Te Has Suscrito'}
            </button>
        </form>
        {error && (
            <p className='text-red-500'>{error} </p>
        )}

    </div>
  )
}

export default SubscribeForm