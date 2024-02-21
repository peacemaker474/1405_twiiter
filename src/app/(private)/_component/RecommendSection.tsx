import styles from './rightSection.module.scss';

export default function RecommenSection() {
  return (
    <div className={styles.followRecommend}>
      <h3> 팔로우 추천 </h3>
      {Array.from({ length: 3 }).map((_, idx) => (
        <div className={styles.followContainer} key={idx}>
          <div>
            <div className={styles.userLogo}>
              <img src="./dummy" alt="유저프로필_이미지" />
            </div>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.title}> 김태웅 </div>
            <div className={styles.count}> @14P5 </div>
          </div>
          <div className={styles.followButtonSection}>
            <button> 팔로우 </button>
          </div>
        </div>
      ))}
    </div>
  );
}
