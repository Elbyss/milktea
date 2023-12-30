import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';
import styles from './navbar.module.css';

export default function Navbar({ pathname }: { pathname: string }) {
  console.log(pathname);
  return (
    <>
      <Link href='/' className={styles.milktea}>
        밀크티
      </Link>
      <nav className={`${styles.nav}`}>
        <Link href='/' className={`${styles.nav}`}>
          {pathname === '/' ? (
            <AiFillHome className='transition-all' />
          ) : (
            <AiOutlineHome className='transition-all hover:text-4xl' />
          )}
        </Link>
        <Link href='/search'>
          {pathname === '/search' ? (
            <RiSearchFill className='transition-all' />
          ) : (
            <RiSearchLine className='transition-all hover:text-4xl' />
          )}
        </Link>
        <Link href='/upload'>
          {pathname === '/upload' ? (
            <BsPlusSquareFill className='transition-all' />
          ) : (
            <BsPlusSquare className='transition-all hover:text-4xl' />
          )}
        </Link>
        <Link href='/signin'>Sign in</Link>
      </nav>
    </>
  );
}
