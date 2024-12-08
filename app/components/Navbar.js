"use client"

import { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link'
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-slate-900 text-slate-100 w-full sticky top-0'>
        <div className='max-w-7xl mx-auto py-4 flex items-center px-2 lg:px-0'>
            <div className='ml-0 mr-auto flex gap-20 items-center'>
                <Logo />
                <div className='hidden lg:flex gap-5'>
                  <Link href={'/nfl'}>
                    <p className='font-bold text-gray-200 text-lg hover:text-orange-700'>NFL</p>
                  </Link>
                  <Link href={'/nba'}>
                    <p className='font-bold text-gray-200 text-lg hover:text-orange-700'>NBA</p>
                  </Link>
                  <Link href={'/picks'}>
                    <p className='font-bold text-gray-200 text-lg hover:text-orange-700'>Picks</p>
                  </Link>
                </div>
            </div>

            <div className='mr-0 ml-auto flex gap-4 items-center'>
                <Link href={'#contact'}>
                    <button className='hidden lg:block px-7 py-3 bg-orange-700 hover:bg-orange-800 hover:scale-105  text-lg text-white'>
                        Contacto
                    </button>
                </Link>
                <div 
                    onClick={() => setIsOpen(!isOpen)}
                    className='lg:hidden hover:scale-110 transition-all duration-300 text-3xl cursor-pointer '>
                    {
                        !isOpen ? 
                        <span className='text-3xl  cursor-pointer'>
                            <AiOutlineMenu />
                        </span> : null
                    }
                </div>
            </div>

        </div>

        <div className={`animated-box ${isOpen ? 'open' : 'closed'} bg-slate-900 absolute top-0 w-full z-20`}>
                    <div className='relative w-full'>
                        <button 
                            className='absolute top-4 right-4 text-red-400 text-4xl'
                            onClick={() => setIsOpen(!isOpen)}    
                        >
                        <AiOutlineCloseCircle />
                        </button>
                    </div>
                    <div className='flex flex-col h-full content-center px-5'>
                        <div className='container max-w-xs justify-text mx-auto mt-5'>
                            <Link href='/nfl' onClick={() => setIsOpen(!isOpen)} >
                                <p className='font-black text-3xl mb-5 mx-auto'>NFL</p>
                            </Link>
                            <Link href='/nba' onClick={() => setIsOpen(!isOpen)}>
                                <p className='font-black text-3xl mb-5 mx-auto'>NBA</p>
                            </Link>
                            <Link href='/picks' onClick={() => setIsOpen(!isOpen)}>
                                <p className='font-black text-3xl mb-5 mx-auto'>Picks</p>
                            </Link>
                        </div>
                    </div>
                </div>

    </div>
  )
}

export default Navbar