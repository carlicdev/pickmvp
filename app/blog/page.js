import React from 'react'
import FeaturedArticle from '../components/FeaturedArticle'
import { getPosts } from '../services/graphql'
import MoreArticles from '../components/MoreArticles';

const Blog = async () => {
  const posts = await getPosts();
  return (
    <div className='mt-10'>
      <FeaturedArticle post={posts[0]} />
      <MoreArticles posts={posts} />
    </div>
  )
}

export default Blog