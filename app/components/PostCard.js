import React from 'react'
import styleDate from '../utils/date'
import Link from 'next/link'
import { FaCalendarAlt, FaFootballBall, FaBasketballBall } from "react-icons/fa";

const PostCard = ({post}) => {

  return (
    <div className='card flex flex-wrap w-full mb-5 shadow'>
      <div className='order-2 lg:order-1 lg:w-2/3 p-5'>
        <div className='flex gap-10 mb-5'>
          <div className='flex gap-2'>
            <span className='text-orange-700 text-xl'><FaCalendarAlt /></span>
            <p className='ml-0 mr-auto'>{styleDate(post.createdAt)}</p>
          </div>
          <div className='flex gap-2'>
            <span className='text-orange-700 text-xl'>{post.category.title === 'NBA'? <FaBasketballBall/> : <FaFootballBall />}</span>
            <p className='ml-0 mr-auto'>{post.category.title}</p>
          </div>
        </div>
        <Link href={`/post/${post.slug}`}>
            <p className='font-black text-4xl my-2 capitalize mb-5 hover:text-orange-800'>{post.title}</p>
        </Link>
        <p className='text-justify'>{post.excerpt}</p>
        <div className='flex my-5'>
          <Link href={`/post/${post.slug}`}>
            <button className='bg-orange-700 px-7 py-3 shadow text-white hover:bg-orange-800'>
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className='order-1 lg:order-2 lg:w-1/3 bg-yellow-500'>
        <img src={post.featuredImage.url} alt='img' className='w-full h-full'/>
      </div>
    </div>
  )
}

export default PostCard