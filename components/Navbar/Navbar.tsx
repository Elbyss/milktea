'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  FillHomeIcon,
  SearchLine,
  FillSearchIcon,
  PlusSquareIcon,
  FillPlusSquare,
} from '../ui/icons';
import LoginButton from '../LoginButton';
import { signIn, signOut, useSession } from 'next-auth/react';
import Avatar from '../Avatar';

export default function Navbar() {
  const { data: session } = useSession();
  const user = session?.user;
  const pathname = usePathname();

  const menu = [
    {
      href: '/',
      icon: <HomeIcon />,
      clickedIcon: <FillHomeIcon />,
    },
    {
      href: '/search',
      icon: <SearchLine />,
      clickedIcon: <FillSearchIcon />,
    },
    {
      href: '/upload',
      icon: <PlusSquareIcon />,
      clickedIcon: <FillPlusSquare />,
    },
  ];
  return (
    <>
      <section className='flex flex-col px-8 py-8 items-center justify-center sm:flex sm:flex-row'>
        <Link
          href='/'
          className='text-sm hidden font-bold mr-auto transition ease-in-out hover:-translate-y-1 px-4 py-4 rounded-tl-[4rem] rounded-br-[4rem] bg-gradient-to-bl from-[#71C9CE] to-[#FFE5FF] sm:text-4xl md:px-8 md:text-4xl sm:block'
        >
          밀크티
        </Link>
        <nav className=''>
          <ul className='flex text-2xl gap-8 items-center sm:text-4xl'>
            {menu.map(({ href, icon, clickedIcon }) => (
              <li
                key={href}
                className='transition ease-in-out hover:-translate-y-1'
              >
                <Link href={href}>
                  {pathname === href ? clickedIcon : icon}
                </Link>
              </li>
            ))}
            {user && (
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} />
              </Link>
            )}

            {session ? (
              <LoginButton
                text={'로그아웃'}
                size='small'
                onClick={() => signOut()}
              />
            ) : (
              <LoginButton
                text={'로그인'}
                size='small'
                onClick={() => signIn()}
              />
            )}
          </ul>
        </nav>
      </section>
    </>
  );
}
