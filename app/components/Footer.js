import React from 'react'
import Subscribe from './Subscribe'
import Link from 'next/link'
import Logo from './Logo'
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import SubscribeForm from './SubscribeForm';

const Footer = () => {
  return (
    <div className='w-full bg-slate-900 text-slate-100 px-5 lg:px-0'>
        <div className='flex flex-col p-10 justify-center items-center'>
            <Logo />
            <div className='flex gap-5 mt-5'>
                <span className='text-3xl bg-slate-800 hover:bg-black rounded-lg p-3'>
                    <a href='https://x.com/pickMVP_'>
                        <FaXTwitter />
                    </a>
                </span>
                <span className='text-3xl bg-slate-800 hover:bg-black rounded-lg p-3'>
                    <a href='https://www.instagram.com/pickmvp_'>
                        <FaInstagram />
                    </a>
                </span>
                <span className='text-3xl bg-slate-800 rounded-lg p-3'>
                    <FaYoutube />
                </span>
            </div>
        </div>
        <div className='flex flex-wrap max-w-7xl mx-auto py-5'>
            <div className='w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0'>
                <p className='font-black text-xl mb-5'>Picks</p>
                <Link href={'/nfl'}>
                    <p className='text-lg mb-1'>Picks Gratuitos de NFL</p>
                </Link>
                <Link href={'/nba'}>
                    <p className='text-lg mb-1'>Picks Gratuitos de NBA</p>
                </Link>
                <Link href={'/nfl'}>
                    <p className='text-lg mb-1'>Picks Especiales de NFL</p>
                </Link>
                <Link href={'/nba'}>
                    <p className='text-lg mb-1'>Picks Especiales de NBA</p>
                </Link>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0'>
                <p className='font-black text-xl mb-5'>Noticias</p>
                <Link href={'/nfl'}>
                    <p className='text-lg mb-1'>Noticias de NFL</p>
                </Link>
                <Link href={'/nba'}>
                    <p className='text-lg mb-1'>Noticias de NBA</p>
                </Link>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0'>
                <p className='font-black text-xl mb-5'>Recursos</p>
                <Link href={'/nfl'}>
                    <p className='text-lg mb-1'>Guías para apostar</p>
                </Link>
                <Link href={'/nba'}>
                    <p className='text-lg mb-1'>Donde apostar</p>
                </Link>
                <Link href={'/nba'}>
                    <p className='text-lg mb-1'>Apuesta responsable</p>
                </Link>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0'>
                <p className='text-gray-200'>Recibe nuestras últimas selecciones directamente en tu correo.</p>
                <SubscribeForm />
            </div>
        </div>
        <div className='max-w-7xl mx-auto border-t border-gray-700 py-2'>
            <div className='flex'>
                <p className='text-slate-400 text-sm mr-auto ml-0'>PickMVP 2024</p>
                <p className='text-slate-400 text-sm mr-0 ml-auto'>Términos y Condiciones</p>
            </div>
        </div>
    </div>
  )
}

export default Footer