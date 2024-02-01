'use client';

import { useCallback, useEffect, useState } from 'react';

import _ from 'lodash';

import Modal from '@/components/common/Modal';
import styles from '@/styles/main/sign.module.scss';
import { SignupRequestDto } from '@/types/user';

type SignupFormData = Omit<SignupRequestDto, 'profileImage'> & {
  password2: string;
};

export default function SignupModal() {
  const [userInput, setUserInput] = useState<SignupFormData>({
    userId: '',
    nickName: '',
    password: '',
    password2: '',
  });
  const [error, setError] = useState<SignupFormData>({
    userId: '',
    nickName: '',
    password: '',
    password2: '',
  });

  const handleChangeUserInput = useCallback(
    _.debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target as HTMLInputElement;

      setUserInput((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (value) {
        setError((prev) => ({
          ...prev,
          [name]: '',
        }));
      }
    }, 300),
    [],
  );

  const handleSignupSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { userId, nickName, password, password2 } = userInput;

    if (userId === '' || nickName === '' || password === '') {
      return setError((prev) => ({
        ...prev,
        userId: userId === '' ? '아이디를 입력해주세요.' : '',
        nickName: nickName === '' ? '닉네임을 입력해주세요.' : '',
        password: password === '' ? '비밀번호를 입력해주세요.' : '',
      }));
    }

    if (password !== password2) {
      return setError((prev) => ({
        ...prev,
        password2: '입력한 비밀번호가 일치하지 않습니다.',
      }));
    }
  };

  useEffect(() => {
    return () => {
      handleChangeUserInput.cancel();
    };
  }, []);

  return (
    <Modal className={styles.container}>
      <h2 className={styles.title}> 계정을 생성하세요. </h2>
      <form className={styles.form} onSubmit={handleSignupSubmit}>
        <div className={styles['input-wrapper']}>
          <label className={styles.label} htmlFor="register_userId">
            아이디
          </label>
          <input
            type="text"
            name="userId"
            onChange={handleChangeUserInput}
            id="register_userId"
            className={styles.input}
            placeholder="아이디를 입력하세요."
          />
          {error.userId && <span className={styles['error-text']}> {error.userId} </span>}
        </div>
        <div className={styles['input-wrapper']}>
          <label className={styles.label} htmlFor="register_nickName">
            닉네임
          </label>
          <input
            type="text"
            name="nickName"
            onChange={handleChangeUserInput}
            id="register_nickName"
            className={styles.input}
            placeholder="닉네임을 입력하세요."
          />
          {error.nickName && <span className={styles['error-text']}> {error.nickName} </span>}
        </div>
        <div className={styles['input-wrapper']}>
          <label className={styles.label} htmlFor="register_password">
            비밀번호
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChangeUserInput}
            id="register_password"
            className={styles.input}
            placeholder="비밀번호를 입력하세요."
          />
          {error.password && <span className={styles['error-text']}> {error.password} </span>}
        </div>
        <div className={styles['input-wrapper']}>
          <label className={styles.label} htmlFor="register_password2">
            비밀번호 확인
          </label>
          <input
            type="password"
            name="password2"
            onChange={handleChangeUserInput}
            id="register_password2"
            className={styles.input}
            placeholder="비밀번호 확인을 위하여 입력해하세요."
          />
          {error.password2 && <span className={styles['error-text']}> {error.password2} </span>}
        </div>
        <button type="submit" className={styles['sign-button']}>
          회원가입
        </button>
      </form>
    </Modal>
  );
}
