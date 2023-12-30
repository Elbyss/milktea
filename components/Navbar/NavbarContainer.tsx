'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import styles from './navbar.module.css';

export default function NavbarContainer() {
  const pathname = usePathname();
  return (
    <>
      <section className={styles.wrapper}>
        <Navbar pathname={pathname} />
      </section>
    </>
  );
}
