import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
        <div className='flex gap-2 items-center'>
            <p className='special-text text-6xl font-black text-slate-100'>Pick<span className='text-orange-700'>MVP</span></p>
        </div>
    </Link>
  )
}

export default Logo