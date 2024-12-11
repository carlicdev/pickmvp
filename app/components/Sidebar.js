"use client"

import { useState } from "react";
import { FaArrowTrendUp,FaFileLines, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaBasketballBall, FaFootballBall, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="hidden lg:block">      
      {/* Sidebar */}
      <div
        className={`fixed top-15 left-0 h-full w-60 bg-slate-900 text-white transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-52"
        }`}
      >
        <div className="flex relative items-center justify-between p-4">
            <div className="absolute -right-3 top-2 bg-slate-900 rounded-full px-2">
                <button onClick={toggleSidebar} className=" text-orange-700 text-3xl -mr-1 ml-auto mt-2">
                    { isOpen? <FaRegArrowAltCircleLeft /> : <FaRegArrowAltCircleRight />}
                </button>
            </div>
        </div>
        <div className="p-4 flex flex-col justify-center items-center gap-16">
          <div className="py-2 ">
            <Link href='/nfl'>
                <span className="text-3xl text-slate-200">
                    <FaFootballBall />
                </span>
            </Link>
          </div>
          <div className="py-2 ">
            <Link href='/nba'>
                <span className="text-3xl text-slate-200">
                    <FaBasketballBall />
                </span>
            </Link>
          </div>
          <div className="py-2 ">
          <Link href='/picks'>
                <span className="text-3xl text-slate-200">
                    <FaArrowTrendUp />
                </span>
            </Link>
          </div>
          <div className="py-2 ">
          <Link href='/blog'>
                <span className="text-3xl text-slate-200">
                    <FaFileLines />
                </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col border-t border-slate-700 mt-5 justify-center items-center gap-5 py-5">
            <div>
                <Link href='/about'>
                    <p>About PickMVP</p>
                </Link>
            </div>
            <div>
                <Link href='/contact'>
                    <p>Contacto</p>
                </Link>
            </div>
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
  )
}

export default Sidebar