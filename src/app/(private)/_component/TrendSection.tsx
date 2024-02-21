import Link from 'next/link';

import styles from './rightSection.module.scss';

export default function TrendSection() {
  return (
    <aside className={styles.trendBg}>
      <div className={styles.trend}>
        <h3> 나를 위한 트렌드 </h3>
        {Array.from({ length: 10 }).map((_, idx) => (
          <Link href={`/search?q=트렌드`} className={styles.container} key={idx}>
            <div className={styles.count}> 실시간 트렌드 </div>
            <div className={styles.title}> 1405 </div>
            <div className={styles.count}> 1,234 </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
