import { useCallback, useEffect, useState } from 'react';

import _ from 'lodash';

import type { SignupRequestDto } from '@/types/user';

type SignupFormData = Omit<SignupRequestDto, 'profileImage'> & {
  password2: string;
};

const useSignupForm = <T extends SignupFormData>(initialState: T) => {
  const [userState, setUserState] = useState<T>(initialState);
  const [error, setError] = useState<T>(initialState);

  const handleChangeUserInput = useCallback(
    _.debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target as HTMLInputElement;

      setUserState((prev) => ({
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

    const { userId, nickName, password, password2 } = userState;

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

    // TBD
    // 추후 회원가입 API 추가
  };

  useEffect(() => {
    return () => {
      handleChangeUserInput.cancel();
    };
  }, []);

  return {
    userState,
    error,
    handleChangeUserInput,
    handleSignupSubmit,
  };
};

export default useSignupForm;
