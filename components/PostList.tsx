'use client';
import { SimplePost } from '@/model/post';
import { GridLoader } from 'react-spinners';
import useSWR from 'swr';
import PostListCard from './PostListCard';
import GridSpinner from './GridSpinner';
import { createPortal } from 'react-dom';

export default function PostList() {
  const { data, isLoading: loading } = useSWR<SimplePost[]>('/api/posts');
  // console.log(data);
  return (
    <>
      <section className='w-full  flex flex-col p-4' id='section'>
        {loading && (
          <div className='text-center mt-3'>
            <GridSpinner />
          </div>
        )}
        {data &&
          data.map((post, idx) => (
            <article key={post.id} className='h-full rounded-lg basis-3/4 mb-4'>
              <PostListCard post={post} priority={idx < 2} />
            </article>
          ))}
      </section>
    </>
  );
}
