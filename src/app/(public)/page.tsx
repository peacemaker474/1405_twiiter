import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/main/main.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image src="/assets/icons/mainLogo.svg" width={380} height={380} alt="메인로고_이미지" />
      </div>
      <div className={`${styles.container} ${styles.content} `}>
        <h1 className={styles.title}> 지금 일어나고 있는 일 </h1>
        <h2 className={styles.subTitle}> 지금 가입하세요. </h2>
        <Link href="/i/flow/signup" className={styles.signupLink}>
          계정 생성
        </Link>
        <span className={styles.loginText}> 이미 계정이 있으신가요? </span>
        <Link href="/i/flow/login" className={`${styles.signupLink} ${styles.loginLink}`}>
          로그인
        </Link>
      </div>
    </main>
  );
}
