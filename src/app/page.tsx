import Image from 'next/image';
import Link from 'next/link';

import styles from './root.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <Image src="/assets/icons/mainLogo.svg" width={380} height={380} alt="메인로고_이미지" />
      </div>
      <div className={`${styles.main__container} ${styles.main__content} `}>
        <h1 className={styles.main__title}> 지금 일어나고 있는 일 </h1>
        <h2 className={styles.main__subTitle}> 지금 가입하세요. </h2>
        <Link href="/i/flow/signup" className={styles.main__signupLink}>
          계정 생성
        </Link>
        <span className={styles.main__loginText}> 이미 계정이 있으신가요? </span>
        <Link href="/login" className={`${styles.main__signupLink} ${styles.main__loginLink}`}>
          로그인
        </Link>
      </div>
    </main>
  );
}
