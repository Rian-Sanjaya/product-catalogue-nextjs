import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Sidebar.module.scss';

export default function Sidebar() {
  const router = useRouter();
  const sidebar = useRef();
  const hamburgerBtn = useRef();

  // useEffect(() => {
  //   const toggleBtn = document.querySelector('.hamburger_menu');
  //   const sidebar = document.querySelector('.sidebar');

  //   toggleBtn?.addEventListener('click', function() {
  //     console.log('toggleBtn: ', toogleBtn);
  //     toggleBtn?.classList.toggle('is_closed');
  //     sidebar?.classList.toggle('is_closed');

  //     return () => {
  //       toggleBtn?.removeEventListener('click', function() {
  //         toggleBtn?.classList.toggle('is_closed');
  //         sidebar?.classList.toggle('is_closed');
  //       })
  //     }
  //   })
  // })

  const handleToggleSidebar = (e) => {
    hamburgerBtn.current.classList.toggle('is_closed');
    sidebar.current.classList.toggle('is_closed')
  };

  return (
    <>
      {/* <div ref={sidebar} className={`${styles.sidebar} ${styles.is_closed}`}> */}
      <div ref={sidebar} className="sidebar is_closed">
        {/* <ul className={styles.nav}> */}
        <ul className="nav">
          <li>
            <Link href="/">
              <a className={`text_tertiary ${router.asPath === '/' ? styles.active : ''}`}>
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
          <li>
            <Link href="/lifestyle">
              <a className={`text_tertiary ${router.asPath === '/lifestyle' ? styles.active : ''}`}>
                Lifestyle
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div ref={hamburgerBtn} className="hamburger_menu is_closed" onClick={handleToggleSidebar}>
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </>
  )
}