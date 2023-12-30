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

export default function Navbar() {
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
    {
      href: '/signin',
      icon: 'Sign in',
      clickedIcon: 'Sign in',
    },
  ];
  return (
    <>
      <section className='flex mx-8 my-4'>
        <Link href='/' className='text-4xl mr-auto'>
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
          </ul>
        </nav>
      </section>
    </>
  );
}
