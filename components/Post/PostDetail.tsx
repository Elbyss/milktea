import { FullPost, SimplePost } from '@/model/post';
import Image from 'next/image';
import useSWR from 'swr';
import WriterActionBar from './WriterActionBar';
import ActionBar from './ActionBar';
import CommentForm from './CommentForm';
import Avatar from './Avatar';

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;
  console.log(comments);
  return (
    <>
      <section className='flex w-full h-full'>
        <figure className='flex relative basis-4/6'>
          <Image
            className='object-cover rounded-tl-lg rounded-bl-lg'
            src={image}
            alt={`photo by ${username}`}
            priority
            fill
            sizes='600px'
          />
        </figure>
        <ul className='text-sm w-full basis-2/6 overflow-y-auto p-2'>
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, idx) => (
                <li key={idx} className='flex items-center'>
                  <Avatar
                    image={image}
                    size='small'
                    highlight={commentUsername === username}
                  />
                  <div className='ml-2'>
                    <span className='font-semibold'>{commentUsername}</span>
                    <span className='ml-2'>{comment}</span>
                  </div>
                </li>
              )
            )}
          <ActionBar likes={likes} username={username} />
          <CommentForm />
        </ul>
      </section>
    </>
  );
}
