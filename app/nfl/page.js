import React from 'react'
import Logo from '../components/Logo'
import PostList from '../components/PostList'
import LastPicks from '../components/LastPicks'
import Subscribe from '../components/Subscribe'
import { getNflPicks, getNflPosts, getLiveNflPicks } from '../services/graphql'
import PickCard from '../components/PickCard'

const NflPage = async () => {
    const picks = await getNflPicks();
    const posts = await getNflPosts();
    const livePicks = await getLiveNflPicks();

  return (
    <>
        <div className='w-full h-auto bg-cover bg-center overflow-hidden mb-10' style={{ backgroundImage: 'url(./att-stadium.jpg)'}}>
            <div className='bg-slate-900 bg-opacity-85 h-full lg:p-20 p-5'>
                <div className='max-w-7xl w-full mx-auto flex flex-wrap align-center items-center'>
                    <div className='w-full flex flex-col items-center gap-10'>
                        <Logo />
                        <p className='font-black text-5xl text-slate-100 capitalize mb-5 text-gray-200'>Picks y noticias de la NFL</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto">
            <p className='text-4xl font-black my-10'>Últimos Picks</p>
            <div className='flex flex-wrap'>
                {
                    livePicks.length ? 
                    livePicks.slice(0,3).map((pick) => (
                        <div className='w-full md:w-1/2 lg:w-1/3 px-5 mb-5'>
                            <PickCard pick={pick} key={pick.id}/>
                        </div>
                    ))
                    :
                    <p>No hay picks activos de NFL por el momento. Regresa más tarde.</p>
                }
            </div>
        </div>
        <div className="max-w-7xl mx-auto my-10">
            <p className='text-4xl font-black my-10'>Últimas Noticias</p>
            <div className='flex flex-wrap'>
                <div className="w-full flex flex-wrap lg:w-2/3">
                <PostList posts={posts} />
                </div>
                <div className="w-full lg:w-1/3 px-5 lg:pl-5 lg:pr-0">
                <div className="flex flex-col gap-5">
                    <Subscribe />
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NflPage