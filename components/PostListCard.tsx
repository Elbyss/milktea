import { SimplePost } from '@/model/post';
import Avatar from './Avatar';
import Image from 'next/image';
import { IoIosHeartEmpty } from 'react-icons/io';
import parseDate from '@/util/date';
import { CiBookmark } from 'react-icons/ci';
type Props = {
  post: SimplePost;
};

export default function PostListCard({ post }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <>
      <div>
        <div className='flex items-center p-2 gap-2'>
          <Avatar image={userImage} highlight size='small' />
          <span className='font-semibold'>{username}</span>
          <p>• {parseDate(createdAt)}</p>
        </div>
        <div className='w-full flex items-center justify-center mb-4 h-full'>
          <Image
            className='rounded-xl shadow-lg border-2 object-cover w-full'
            src={post.image}
            alt={post.text}
            width={600}
            height={600}
          />
        </div>
        <div className='flex justify-between my-2 px-4'>
          <IoIosHeartEmpty size={30} />
          <CiBookmark size={30} />
        </div>
        <div className=''>
          <p className='font-semibold'>{`좋아요 ${likes?.length ?? 0}개`}</p>
          <p>
            <span className='font-semibold pr-2'>{username}</span>
            <span className=''>{text}</span>
          </p>

          <form className='flex w-full'>
            <input
              className='outline-none border-b w-full basis-11/12 p-2'
              type='text'
              placeholder='댓글 달기...'
            />
            <button className='basis-1/12 text-sky-500 font-bold'>작성</button>
          </form>
        </div>
      </div>
    </>
  );
}
