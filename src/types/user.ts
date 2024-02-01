import type { BaseEntity } from './common';

export interface UserEntity extends BaseEntity {
  userId: string;
  nickName: string;
  profileImage?: string;
}

export type LoginRequestDto = Pick<UserEntity, 'userId'> & {
  password: string;
};

export type SignupRequestDto = Omit<UserEntity, 'id'> & {
  password: string;
};
