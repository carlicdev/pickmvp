import Link from 'next/link'
import { FaBullseye } from "react-icons/fa6";

const Logo = () => {
  return (
    <Link href={'/'}>
        <div className='logo flex gap-1 items-center'>
          <span className='text-orange-700 text-3xl'>
            <FaBullseye />
          </span>
            <p className='text-3xl font-black tracking-tightest text-slate-100'>Pick<span className='text-slate-100'>MVP</span></p>
        </div>
    </Link>
  )
}

export default Logo