
import LastPicks from '@/app/components/LastPicks';
import PostDetail from '@/app/components/PostDetail';
import Subscribe from '@/app/components/Subscribe';
import { getPostDetails } from '@/app/services/graphql';



const PostPage = async ({params}) => {
    const { slug } = await params;
    const post = await getPostDetails(slug)

  return (
    <div className='max-w-7xl mx-auto w-full pt-[50px] '>
        <div className=' w-full grid grid-cols-10 gap-4'>
            <div className='hidden'>
                
            </div>
            <div className='col-span-10 lg:col-span-7 flex flex-col'>
                {post && <PostDetail post={post}/> }
            </div>
            <div className='col-span-10 lg:col-span-3'>
                <div className='lg:sticky relative top-14 flex flex-col gap-5'>
                    <Subscribe />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostPage