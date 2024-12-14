import styleDate from '../utils/date'
import Link from 'next/link'
import { FaCalendarAlt, FaFootballBall, FaBasketballBall } from "react-icons/fa";

const FeaturedArticle = ({post}) => {
    const { title, author, excerpt, featuredImage, category, slug } = post.node
  return (
    <div className='card max-w-7xl mx-auto p-5'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-2/3'>
                <img src={featuredImage.url} alt='img' className='w-full h-[600px]'/>
            </div>
            <div className='w-full lg:w-1/3 flex flex-col gap-2 p-2'>
                <div className='flex gap-2'>
                    <span className='text-orange-700 text-xl'>{category.title === 'NBA'? <FaBasketballBall/> : <FaFootballBall />}</span>
                    <p className='ml-0 mr-auto font-black text-orange-700'>{category.title}</p>
                </div>
                <Link href={`/post/${slug}`}>
                    <p className='font-black text-5xl hover:text-orange-700 capitalize'>{title}</p>
                </Link>
                <p>{author.name}</p>
                <p>{excerpt}</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturedArticle