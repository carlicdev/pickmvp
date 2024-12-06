import React from 'react'
import Logo from '../components/Logo'
import PickCard from '../components/PickCard'
import PostList from '../components/PostList'
import Subscribe from '../components/Subscribe'
import { getNbaPosts, getLiveNbaPicks } from '../services/graphql'

const NbaPage = async () => {
    const livePicks = await getLiveNbaPicks();
    const posts = await getNbaPosts();
    
  return (
    <>
    <div className='w-full h-auto bg-cover bg-center overflow-hidden mb-10' style={{ backgroundImage: 'url(./warriors-nba.jpg)'}}>
        <div className='bg-slate-900 bg-opacity-85 h-full lg:p-20 p-5'>
            <div className='max-w-7xl w-full mx-auto flex flex-wrap align-center items-center'>
                <div className='w-full flex flex-col items-center gap-10'>
                    <Logo />
                    <p className='font-black text-5xl text-slate-100 capitalize mb-5 text-gray-200'>Picks y noticias de la NBA</p>
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
                        <div key={pick.id} className='w-full md:w-1/2 lg:w-1/3 px-5 mb-5'>
                            <PickCard pick={pick}  />
                        </div>
                    ))
                    :
                    <p>No hay picks activos de NBA por el momento. Regresa más tarde.</p>
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

export default NbaPage