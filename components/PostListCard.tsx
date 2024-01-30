import { SimplePost } from '@/model/post';
import Avatar from './Avatar';
import Image from 'next/image';
import { IoIosHeartEmpty } from 'react-icons/io';
import parseDate from '@/util/date';
import { CiBookmark } from 'react-icons/ci';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import WriterActionBar from './WriterActionBar';
type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <>
      <div>
        <WriterActionBar
          userImage={userImage}
          createdAt={createdAt}
          username={username}
        />
        <figure className='w-full flex items-center justify-center mb-2 h-full'>
          <Image
            className='rounded-xl shadow-lg border-2 object-cover w-full'
            src={post.image}
            alt={post.text}
            width={600}
            height={600}
            priority={priority}
          />
        </figure>
        <ActionBar likes={likes} text={text} username={username} />
        <CommentForm />
      </div>
    </>
  );
}
