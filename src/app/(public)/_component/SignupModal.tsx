'use client';

import Modal from '@/components/common/Modal';
import useSignupForm from '@/hooks/useSignupForm';
import styles from '@/styles/main/sign.module.scss';

export default function SignupModal() {
  const initialState = {
    userId: '',
    nickName: '',
    password: '',
    password2: '',
  };
  const { error, handleChangeUserInput, handleSignupSubmit } = useSignupForm(initialState);

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
