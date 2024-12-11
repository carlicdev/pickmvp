"use client"

import { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaArrowTrendUp,FaFileLines, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaBasketballBall, FaFootballBall } from "react-icons/fa";
import Link from 'next/link'
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-slate-900 text-slate-100 w-full sticky top-0'>
        <div className='flex items-center'>
            <div className='ml-2 lg:ml-5 py-4'>
                <Logo />
            </div>
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className='mr-2 ml-auto lg:hidden hover:scale-110 transition-all duration-300 text-3xl cursor-pointer '
            >
                {
                    !isOpen ? 
                    <span className='text-3xl  cursor-pointer'>
                        <AiOutlineMenu />
                    </span> : null
                }
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
                    <div className='flex flex-col h-full content-center px-5 justify-center'>
                        <div className='container max-w-xs justify-text mx-auto mt-5'>
                            <Link href='/nfl' onClick={() => setIsOpen(!isOpen)} >
                                <div className='flex gap-2 mb-5 mx-auto'>
                                    <span className='mr-2 text-3xl'>
                                        <FaFootballBall />
                                    </span>
                                    <p className='text-3xl font-black'>NFL</p>
                                </div>
                            </Link>
                            <Link href='/nba' onClick={() => setIsOpen(!isOpen)} >
                                <div className='flex gap-2 mb-5 mx-auto'>
                                    <span className='mr-2 text-3xl'>
                                        <FaBasketballBall />
                                    </span>
                                    <p className='text-3xl font-black'>NBA</p>
                                </div>
                            </Link>
                            <Link href='/picks' onClick={() => setIsOpen(!isOpen)} >
                                <div className='flex gap-2 mb-5 mx-auto'>
                                    <span className='mr-2 text-3xl'>
                                        <FaArrowTrendUp />
                                    </span>
                                    <p className='text-3xl font-black'>Picks</p>
                                </div>
                            </Link>
                            <Link href='/blog' onClick={() => setIsOpen(!isOpen)} >
                                <div className='flex gap-2 mb-5 mx-auto'>
                                    <span className='mr-2 text-3xl'>
                                        <FaFileLines />
                                    </span>
                                    <p className='text-3xl font-black'>Blog</p>
                                </div>
                            </Link>
                        </div>
                        <div className='container max-w-xs justify-text mx-auto mt-5 border-t border-slate-700 pt-5'>
                            <Link href='/about' onClick={() => setIsOpen(!isOpen)} >
                                <p className='font-black text-3xl mb-5 mx-auto'>About PickMVP</p>
                            </Link>
                            <Link href='/contact' onClick={() => setIsOpen(!isOpen)}>
                                <p className='font-black text-3xl mb-5 mx-auto'>Contacto</p>
                            </Link>
                        </div>
                        <div>
                            <div className='flex flex-col p-5 justify-center items-center border-t border-slate-700'>
                                <div className='flex gap-5 mt-5'>
                                    <span className='text-xl bg-slate-800 hover:bg-black rounded-lg p-3'>
                                        <a href='https://x.com/pickMVP_'>
                                            <FaXTwitter />
                                        </a>
                                    </span>
                                    <span className='text-xl bg-slate-800 hover:bg-black rounded-lg p-3'>
                                        <a href='https://www.instagram.com/pickmvp_'>
                                            <FaInstagram />
                                        </a>
                                    </span>
                                    <span className='text-xl bg-slate-800 rounded-lg p-3'>
                                        <FaYoutube />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  )
}

export default Navbar