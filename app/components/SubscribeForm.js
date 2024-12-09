"use client"

import { redirect } from 'next/navigation'
import { useRef, useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'

const SubscribeForm = ( ) => {
    const formRef = useRef()
    const [isValid, setIsValid] = useState(true)
    const [sending, setSending] = useState(false)
    const [serverError, setServerError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [form, setForm] = useState({email: ''});

    // Función para verificar el formato del correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleChange = (e) => {
        setServerError(null)
        const { name, value } = e.target;
        setForm({...form, [name]: value})
        if (name === 'email') {
            setIsValid(isValidEmail(value))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
  
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  email: form.email
                }) 
            })
    
            const data = await response.json();
            if (data) setSending(false)
            if (data.status === 400) setServerError(data.message)
            if (data.status === 200) { 
              setSuccess(true)
            }
        } catch (err) {
            setSending(false)
            setServerError(err.message)
        }
        
    }


    const buttonText = sending ?  <span className='flex items-center gap-2'><AiOutlineReload className='animate-spin'/>Registrando...</span> : <span>Suscríbete</span>

    //mensaje de error si el correo no es válido
    const errorMessage = !isValid ? (
      <p className="mt-1 text-xs text-red-500">*Ingresa un correo electrónico válido.</p>
    ) : null;

    if (success) {
        redirect('/confirmation')
    }
    
  return (
    <div className='p-2 lg:p-0'>
        <form 
            ref={formRef}            
            onSubmit={handleSubmit} 
            className='flex flex-wrap'
        >
            <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                className='bg-transparent w-full lg:w-[400px] text-slate-200 px-2 py-2 lg:py-0 border border-slate-500 rounded-l outline-none focus:outline-orange-700 '
            />
            <button 
                type='submit'
                className='bg-orange-700 w-full lg:w-auto px-7 py-4 mt-1 lg:mt-0 shadow text-white text-xl lg:rounded-r'>
                {buttonText}
            </button>
        </form>
        <span>{errorMessage}</span>
        <p className='text-red-500'>{serverError}</p>
    </div>
  )
}

export default SubscribeForm