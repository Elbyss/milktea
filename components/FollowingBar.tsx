'use client';
import useSWR from 'swr';
import Avatar from './Post/Avatar';
import { DetailUser } from '@/model/user';
import { PropagateLoader } from 'react-spinners';
import Link from 'next/link';
import ScrollableBar from './ui/ScrollableBar';

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  // const users = data?.following;
  const users = data?.following && [...data?.following, ...data?.following, ...data?.following];
  // const users = undefined;
  return (
    <>
      <section className='border shadow-sm flex gap-2 justify-center h-32 items-center rounded-xl w-full p-4 mb-4 min-h-[90px] overflow-y-hidden overflow-x-auto'>
        {loading ? (
          <PropagateLoader size={8} color='blue' />
        ) : (
          (!users || users.length === 0) && <p>{`팔로잉이 존재하지 않습니다.`}</p>
        )}
        {users && users.length > 0 && (
          <ScrollableBar>
            {users.map(({ username, image }) => (
              <Link key={username} className='flex flex-col items-center w-20 p-2' href={`/user/${username}`}>
                <Avatar size='small' highlight image={image} />
                <p className='text-sm text-ellipsis text-center w-full'>{username}</p>
              </Link>
            ))}
          </ScrollableBar>
        )}
      </section>
    </>
  );
}
