import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Avatar from '@/components/Avatar';
import FollowingBar from '@/components/FollowingBar';
import PostList from '@/components/PostList';
import SideBar from '@/components/SideBar';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function UserProfilepage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect('/auth/signin');
  }
  return (
    <>
      <section className='flex flex-col md:flex-row max-w-[850px] p-4'>
        <div className='w-full basis-3/4'>
          <FollowingBar />
          <PostList />
        </div>
        <div className='basis-1/4'>
          <SideBar user={user} />
        </div>
      </section>
    </>
  );
}
