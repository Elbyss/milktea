import { User } from '@/model/user';
import Avatar from './Post/Avatar';

type Props = {
  user: User;
};
export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className=' flex items-center'>
        {image && <Avatar image={image} size='small' highlight />}
        <div className='ml-4'>
          <p className='font-bold'>{username}</p>
          <p className='text-lg text-neutral-500 leading-4'>{name}</p>
        </div>
      </div>
      <p className='text-sm text-neutral-500 mt-8'>
        어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고
      </p>
      <p className='font-bold text-sm mt-8 text-neutral-500'>
        @Copyright 어쩌고저쩌고
      </p>
    </>
  );
}
