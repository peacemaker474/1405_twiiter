import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/main/privateMain.module.scss';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <header className={styles.leftContainer}>
        <nav className={styles.leftWrapper}>
          <ul className={styles.globalMenu}>
            <Link href="/home" className={styles.logoLink}>
              <div className={styles.logoLinkWrapper}>
                <Image src="/assets/icons/mainLogo.svg" width={25} height={25} alt="메인로고" />
              </div>
            </Link>
          </ul>
        </nav>
      </header>
      <main className={styles.rightContainer}>
        <section className={styles.rightWrapper}>
          <div className={styles.mainContent}>{children}</div>
          <div className={styles.rightContent}>
            <form className={styles.search}>
              <Image src="/assets/icons/search.svg" width={20} height={20} alt="검색_아이콘" />
              <input type="search" className={styles.searchInput} />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
