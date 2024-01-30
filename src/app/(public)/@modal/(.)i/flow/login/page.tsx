'use client';

import Modal from '@/components/common/Modal';
import styles from '@/styles/main/sign.module.scss';

export default function LoginModalPage() {
  return (
    <Modal className={styles.wrapper}>
      <div> 로그인 모달 </div>
    </Modal>
  );
}
