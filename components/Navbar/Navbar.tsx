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

export default function Navbar() {
  const { data: session } = useSession();
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
      <section className='flex px-8 py-8 items-center justify-center'>
        <Link
          href='/'
          className='text-4xl font-bold mr-auto transition ease-in-out hover:-translate-y-1 px-8 py-2 rounded-tl-[4rem] rounded-br-[4rem] bg-gradient-to-bl from-[#71C9CE] to-[#FFE5FF] '
        >
          밀크티
        </Link>
        <nav>
          <ul className='flex text-4xl gap-8 items-center'>
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
            {session ? (
              <LoginButton text={'로그아웃'} onClick={() => signOut()} />
            ) : (
              <LoginButton text={'로그인'} onClick={() => signIn()} />
            )}
          </ul>
        </nav>
      </section>
    </>
  );
}
