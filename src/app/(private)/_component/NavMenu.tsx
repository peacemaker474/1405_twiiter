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
          <Image src="/assets/icons/home.svg" width={26} height={26} alt="홈페이지_아이콘" />
          <span className={segment === 'home' ? styles.active : ''}> 홈 </span>
        </Link>
      </li>
      <li>
        <Link href="/explore" className={styles.navLink}>
          <Image src="/assets/icons/search.svg" width={26} height={26} alt="검색_아이콘" />
          <span className={segment === 'explore' ? styles.active : ''}> 탐색하기 </span>
        </Link>
      </li>
      <li>
        <Link href="/message" className={styles.navLink}>
          <Image src="/assets/icons/message.svg" width={26} height={26} alt="쪽지_아이콘" />
          <span className={segment === 'message' ? styles.active : ''}> 쪽지 </span>
        </Link>
      </li>
      <li>
        <Link href="/profile" className={styles.navLink}>
          <Image src="/assets/icons/profile.svg" width={26} height={26} alt="프로필_아이콘" />
          <span className={segment === 'profile' ? styles.active : ''}> 프로필 </span>
        </Link>
      </li>
    </>
  );
}
