'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import { format, register } from 'timeago.js'; //임포트하기 register 한국어 선택
import koLocale from 'timeago.js/lib/lang/ko'; //한국어 선택

export default function PostList() {
  register('ko', koLocale);
  const { data, isLoading: loading } = useSWR<SimplePost[]>('/api/posts');
  console.log(data);
  return (
    <>
      <section className='bg-red-100 w-full h-[650px]  flex flex-col p-4'>
        {data &&
          data.map((post) => (
            <article
              key={post.id}
              className='bg-yellow-100 h-full rounded-lg basis-3/4 mb-4'
            >
              {post.text}
            </article>
          ))}
      </section>
      {/* <span>{format('2024-01-01', 'ko')}</span>
        <span>♥️ 좋아요</span>
        <div>댓글</div> */}
    </>
  );
}
