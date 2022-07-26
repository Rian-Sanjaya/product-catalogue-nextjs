import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Navbar.module.scss';

export default function Navbar() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <Link href="/">
            <a  className={`text_tertiary ${router.asPath === '/' ? styles.active : ''}`}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/tech">
            <a className={`text_tertiary ${router.asPath === '/tech' ? styles.active : ''}`}>
              Tech
            </a>
          </Link>
        </li>
      </ul>
    </header>
  )
};