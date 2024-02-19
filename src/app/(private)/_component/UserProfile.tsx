'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles from './navigation.module.scss';

export default function UserProfile() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <button className={styles.logoutButton} onClick={handleLogout}>
      <div className={styles.logoutUserImage}>
        <Image src="/assets/icons/profile.svg" width={40} height={40} alt="프로필_이미지" />
      </div>
      <div className={styles.logoutUserName}>
        <div> 김태웅 </div>
        <div> @14P5_ </div>
      </div>
    </button>
  );
}
