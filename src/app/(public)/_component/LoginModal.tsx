'use client';

import { useRouter } from 'next/navigation';

import { useRef, useState } from 'react';

import Modal from '@/components/common/Modal';
import styles from '@/styles/main/sign.module.scss';

import type { LoginRequestDto } from '@/types/user';

export default function LoginModal() {
  const router = useRouter();
  const userIdRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<LoginRequestDto>({
    userId: '',
    password: '',
  });

  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (userIdRef.current?.value === '' || passwordRef.current?.value === '') {
      return setError((prev) => ({
        ...prev,
        userId: userIdRef.current?.value === '' ? '아이디를 입력해주세요.' : '',
        password: passwordRef.current?.value === '' ? '비밀번호를 입력해주세요.' : '',
      }));
    }

    router.push('/home');
  };

  return (
    <Modal className={styles.container}>
      <h2 className={styles.title}> 로그인 </h2>
      <form className={styles.form} onSubmit={handleLoginSubmit}>
        <div className={styles['input-wrapper']}>
          <label className={styles.label} htmlFor="login_userId">
            아이디
          </label>
          <input
            id="login_userId"
            type="text"
            className={styles.input}
            placeholder="아이디를 입력하세요"
            ref={userIdRef}
          />
          {error.userId && (
            <span className={styles['error-text']} aria-label="error-login-userId">
              {error.userId}
            </span>
          )}
        </div>
        <div className={styles['input-wrapper']}>
          <label className={styles.label} htmlFor="login_password">
            비밀번호
          </label>
          <input
            id="login_password"
            type="password"
            className={styles.input}
            placeholder="비밀번호를 입력하세요"
            ref={passwordRef}
          />
          {error.password && (
            <span className={styles['error-text']} aria-label="error-login-password">
              {error.password}
            </span>
          )}
        </div>
        <button type="submit" className={styles['sign-button']} aria-label="login-button">
          로그인
        </button>
      </form>
    </Modal>
  );
}
