import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-slate-900 text-slate-100 w-full sticky top-0'>
        <div className='max-w-7xl mx-auto py-4 flex items-center'>
            <div className='ml-0 mr-auto flex gap-20 items-center'>
                <Logo />
                <div className='flex gap-5'>
                  <Link href={'/nfl'}>
                    <p className='font-bold text-gray-200 text-lg hover:text-orange-700'>NFL</p>
                  </Link>
                  <Link href={'/nba'}>
                    <p className='font-bold text-gray-200 text-lg hover:text-orange-700'>NBA</p>
                  </Link>
                  <Link href={'/picks'}>
                    <p className='font-bold text-gray-200 text-lg hover:text-orange-700'>Picks</p>
                  </Link>
                  <Link href={'/news'}>
                    <p className='font-bold text-gray-200 text-lg hover:text-orange-700'>Noticias</p>
                  </Link>
                </div>
            </div>
            <div className='ml-auto mr-0'>
                boton
            </div>
        </div>
    </div>
  )
}

export default Navbar