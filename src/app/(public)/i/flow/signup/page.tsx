'use client';

import Modal from '@/components/common/Modal';
import styles from '@/styles/main/sign.module.scss';

export default function SignupPage() {
  return (
    <Modal className={styles.container}>
      <div> 회원가입 모달 </div>
    </Modal>
  );
}
