
import PostCard from './PostCard';

const PostList = async ({posts}) => {

  return (
    <div className='flex flex-col'>
    {
        posts.map((post) => (
            <PostCard post={post.node} key={post.node.id} />
        ))
    }
    </div>
  )
}

export default PostList