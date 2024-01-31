'use client';
import { SimplePost } from '@/model/post';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import WriterActionBar from './WriterActionBar';
import { useState } from 'react';
import ModalPortal from './ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);

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
            onClick={() => setOpenModal(true)}
          />
        </figure>
        <ActionBar likes={likes} text={text} username={username} />
        <CommentForm />
        {openModal && (
          <ModalPortal>
            <PostModal onClose={() => setOpenModal(false)}>
              <PostDetail post={post} />
            </PostModal>
          </ModalPortal>
        )}
      </div>
    </>
  );
}
