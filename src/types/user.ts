import type { BaseEntity } from './common';

export interface UserEntity extends BaseEntity {
  userId: string;
}

export type LoginRequestDto = Pick<UserEntity, 'userId'> & {
  password: string;
};
