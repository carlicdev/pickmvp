import styleDate from '../utils/date'
import Link from 'next/link'
import { FaCalendarAlt, FaFootballBall, FaBasketballBall } from "react-icons/fa";

const MoreArticles = ({posts}) => {
    
  return (
    <div className='card max-w-7xl mx-auto my-5 flex'>
        <div className='w-full lg:w-1/2 p-5 flex flex-col gap-2'>
            <img src={posts[1].node.featuredImage.url} alt='img' className='w-full h-[300px]'/>
            <div className='flex gap-2'>
                <span className='text-orange-700 text-xl'>{posts[1].node.category.title === 'NBA'? <FaBasketballBall/> : <FaFootballBall />}</span>
                <p className='ml-0 mr-auto font-black text-orange-700'>{posts[1].node.category.title}</p>
            </div>
            <p className='text-xl font-black'>{posts[1].node.title}</p>
            <p>{posts[1].node.author.name}</p>
            <p>{posts[1].node.excerpt}</p>
        </div>
        <div className='w-full lg:w-1/2 p-5 flex flex-col gap-2'>
            {
                posts.slice(2,6).map((post, index) => (
                    <div key={index} className='flex gap-2'>
                        <div className='w-1/3'>
                            <img src={post.node.featuredImage.url} alt='img' className='w-full h-[120px]'/>
                        </div>
                        <div className='w-2/3'>
                            <div className='flex gap-2 items-center'>
                                <span className='text-orange-700 text-lg'>{posts[1].node.category.title === 'NBA'? <FaBasketballBall/> : <FaFootballBall />}</span>
                                <p className='ml-0 mr-auto font-black text-orange-700 text-md'>{posts[1].node.category.title}</p>
                            </div>
                            <p className='text-lg font-black'>{post.node.title}</p>
                            <p>{post.node.author.name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MoreArticles