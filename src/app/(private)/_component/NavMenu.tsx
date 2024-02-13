'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import styles from './navigation.module.scss';

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <li>
        <Link href="/home" className={styles.navLink}>
          {segment === 'home' ? (
            <>
              <Image src="/assets/icons/activeHome.svg" width={26} height={26} alt="홈페이지_아이콘" />
              <span className={styles.active}> 홈 </span>
            </>
          ) : (
            <>
              <Image src="/assets/icons/home.svg" width={26} height={26} alt="홈페이지_아이콘" />
              <span> 홈 </span>
            </>
          )}
        </Link>
      </li>
      <li>
        <Link href="/explore" className={styles.navLink}>
          {segment === 'explore' ? (
            <>
              <Image src="/assets/icons/activeHome.svg" width={26} height={26} alt="홈페이지_아이콘" />
              <span className={styles.active}> 탐색하기 </span>
            </>
          ) : (
            <>
              <Image src="/assets/icons/home.svg" width={26} height={26} alt="홈페이지_아이콘" />
              <span> 탐색하기 </span>
            </>
          )}
        </Link>
      </li>
      <li>
        <Link href="/message" className={styles.navLink}>
          {segment === 'message' ? (
            <>
              <Image src="/assets/icons/activeHome.svg" width={26} height={26} alt="홈페이지_아이콘" />
              <span className={styles.active}> 쪽지 </span>
            </>
          ) : (
            <>
              <Image src="/assets/icons/home.svg" width={26} height={26} alt="홈페이지_아이콘" />
              <span> 쪽지 </span>
            </>
          )}
        </Link>
      </li>
    </>
  );
}
